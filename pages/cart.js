import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header/Header'
import { Cartlists } from './api/Cartlists'
import { useRouter } from 'next/router';
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';

export default function CartView() {

    const [cart, setCart] = useState("")
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("")
    const [cartListing, setCartListing] = useState([])
    const [price, setPrice] = useState(0)
    const router = useRouter();
    useEffect(() => {

        if (localStorage.getItem("itemId")) {
            itemData();
        }
        if (localStorage.getItem("items")) {
            withoutLogin();

        }
        if (localStorage.getItem("token")) {
            cartList();
            setToken(localStorage.getItem("token"))
            if (localStorage.getItem("items")) {
                addApi();

            }
        }

        setToken(localStorage.getItem("token"))

        document.body.classList.add("cart__page");
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove('login__form');
        document.body.classList.remove('checkout__page');
    }, [])
    const saveUrl = () => {
        localStorage.setItem("url", router.asPath)
    }
    const deleteItem = async (index, data) => {
        console.log(index)
        console.log(data)

        const items = JSON.parse(localStorage.getItem("items"))
        items.splice(index, 1)
        localStorage.setItem("items", JSON.stringify(items));
        withoutLogin()

    }
    const deleteApi = async (data) => {

        setLoading(true)
        console.log(data)
        const result = await fetch(
            `${process.env.baseApiUrl}/api/delete/cart/item`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ "cart_id": data.cart_id })
            }
        );
        let response = await result.json();
        if (response.success) {
            cartList()
            toast.success(response.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000
            });
        } else {

            return response;
        }

    }

    const withoutLogin = () => {
        const items = JSON.parse(localStorage.getItem("items"))
        console.log(items);

        setCartListing(items)
        const total = 0
        items.map((item) => {

            console.log(item)
            total = total + (item.total_price ? item.total_price : item.price)
        })
        console.log(total)
        setPrice(total)
    }
    const duplicate = async (data) => {
        if (token) {
            setLoading(true)
            const storeId = localStorage.getItem("storeId")
            console.log(data)
            const selectedAddon = [];
            if(data.selected_addon_data) {
                data?.selected_addon_data.map((data) =>{
                    selectedAddon.push({"addon_id": data.addon_id})
                })
            }
            const arrayItem = []
            arrayItem.push({ item_id: data.item_id, is_customize: 1, selectedoptions: data.selected_options.length > 0 ? data.selected_options : [], selectedCategory: data.selected_category.length > 0 ? data.selected_category : [],SelectedAddon: selectedAddon })
            console.log(arrayItem)
            const result = await fetch(
                `${process.env.baseApiUrl}/api/add/to/cart`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        Accept: "application/json",
                        store_id: storeId,
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(arrayItem)
                }
            );

            let response = await result.json();
            console.log(response)
            if (response.success) {
                //   localStorage.removeItem("items")
                //   setCartListing([])
                cartList()
                toast.success("item copied sucessfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                });



            } else {

                return response;
            }

        } else {
            console.log(data)
            const items = JSON.parse(localStorage.getItem("items"))
            console.log(items)
            data['uniqueIndex'] = items[items.length - 1].uniqueIndex + 1
            console.log(items)
            items.push(data)
            console.log(items)

            localStorage.setItem("items", JSON.stringify(items))
            withoutLogin()

        }

    }

    const clearCart = async() => {
        const storeId = localStorage.getItem("storeId")
        const result = await fetch(
            // `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${myArray.at(-1)}`,
            `${process.env.baseApiUrl}/api/delete/addon/change/store`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                },
                body:JSON.stringify({"store_id":storeId})
            }
        );

        let response = await result.json();
        if (response.success) {
            cartList()

        } else {
            
            return response;
        }

    }

    const itemData = async () => {
        const items = JSON.parse(localStorage.getItem("items"))
        console.log(items)
        setLoading(true)
        const result = await fetch(
            // `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${myArray.at(-1)}`,
            `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${items[0].item_id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json",
                },
            }
        );

        let response = await result.json();
        if (response.success) {
            setLoading(false);
            // console.log(response.item_data[0].price)
            setCart(response.item_data);

        } else {
            setLoading(false)
            setCart("");
            return response;
        }
    };
    const selectAddOn = async (e, data, cart_id) => {
        console.log(data, cart_id)
        const total = 0
        if (token) {
            if (e.target.checked === true) {
                const result = await fetch(
                    // `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${myArray.at(-1)}`,
                    `${process.env.baseApiUrl}/api/store/addon`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({ "item_id": data.item_id, "addon_id": data.addon_id, "cart_id": cart_id })
                    }
                );

                let response = await result.json();
                if (response.success) {
                    cartList()
                    // window.location.reload(true);

                } else {
                    setLoading(false)
                    setCart("");
                    return response;
                }

            } else {
                const result = await fetch(
                    // `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${myArray.at(-1)}`,
                    `${process.env.baseApiUrl}/api/delete/addon`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({ "item_id": data.item_data.item_id, "addon_id": data.addon_id, "cart_id": cart_id })
                    }
                );

                let response = await result.json();
                if (response.success) {
                    cartList()
                    // window.location.reload(true);
                } else {
                    setLoading(false)
                    setCart("");
                    return response;
                }

            }

        } else {
            console.log()
            if(e.target.checked === true) {
                
                const items = JSON.parse(localStorage.getItem("items"))
                const findOut = items.find((e) => e.uniqueIndex === cart_id.uniqueIndex);
                const index = items.indexOf(findOut)
                findOut['total_price'] = findOut.total_price + data.offered_price;
                if(!findOut.selected_addOn) {
                    findOut['selected_addOn'] = []
                findOut['selected_addOn'].push(data)
                } else{
                    findOut['selected_addOn'].push(data)
                }
                
                items.splice(index, 1, findOut);
                
                // items.push(findOut)
                localStorage.setItem("items", JSON.stringify(items))
                items.map((item) => {

                    console.log(item)
                    total = total + (item.total_price ? item.total_price : item.price)
                })
                console.log(total)
                setPrice(total)
                setCartListing(JSON.parse(localStorage.getItem("items")))

                
            }else {
                console.log("unchecked")
                const items = JSON.parse(localStorage.getItem("items"))
                const findOut = items.find((e) => e.uniqueIndex === cart_id.uniqueIndex);
                console.log(findOut);
                const index = items.indexOf(findOut)
                findOut['total_price'] = findOut.total_price - data.offered_price;
                findOut['selected_addOn'].splice(findOut.selected_addOn.indexOf(findOut.selected_addOn.find((e) => e.addon_id === data.addon_id)), 1)
                items.splice(index, 1, findOut);
                
                // items.push(findOut)
                localStorage.setItem("items", JSON.stringify(items))
                items.map((item) => {

                    console.log(item)
                    total = total + (item.total_price ? item.total_price : item.price)
                })
                console.log(total)
                setPrice(total)
                setCartListing(JSON.parse(localStorage.getItem("items")))
            }
            // console.log(data)
        }
    }

    const cartList = async () => {
        setLoading(true)
        const result = await fetch(
            `${process.env.baseApiUrl}/api/cart/list`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            }
        );
        let response = await result.json();
        console.log(response)
        if (response.success) {
            
            const total = 0
            response.cart_item.map((item) => {
                total = total + (item.total_price ? parseInt(item.total_price) : item.price)
            })
            setPrice(total)
            setCartListing(response.cart_item)
            localStorage.removeItem("items")
            setLoading(false)
        } else {

            return response;
        }

    }

    const addApi = async () => {
        const storeId = localStorage.getItem("storeId")
        const items = JSON.parse(localStorage.getItem("items"))
        const arrayItem = []
        // item['selectedOptions'] = stepOptionId
        // item['selectedCategory'] = categoryId
        items.map((data) => {
            const selectedAddon = [];
            if(data.selected_addOn) {
                data?.selected_addOn.map((data) =>{
                    selectedAddon.push({"addon_id": data.addon_id})
                })
            }
            
            console.log(selectedAddon)
            arrayItem.push({ item_id: data.item_id, is_customize: data.selectedCategory || data.selectedoptions ? 1 : 0, selectedoptions: data.selectedoptions ? data.selectedoptions : [], selectedCategory: data.selectedCategory ? data.selectedCategory : [], SelectedAddon: selectedAddon  })

        })
        console.log(arrayItem)

        const result = await fetch(
            `${process.env.baseApiUrl}/api/add/to/cart`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json",
                    store_id: storeId,
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(arrayItem)
            }
        );

        let response = await result.json();
        console.log(response)
        if (response.success) {
            localStorage.setItem("items", [])
            setCartListing([])
            cartList()
            toast.success(response.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000
            });



        } else {

            return response;
        }

    }
    console.log(cartListing,'cartListing....')
    return (
        <React.Fragment>
            {/* Header */}
            <Header />

            {/* Cart view */}
            <div className='cart__wrapper show--item--table'>
                {!token &&
                    <div className='notlogged--in'>
                        <span>
                            <p>Please <b>SIGN IN</b> to continue to checkout</p>
                            <Link href="/login">
                                <a className='btnRed btn' onClick={() => saveUrl()}>Sign In</a>
                            </Link>
                        </span>
                    </div>
                }
                {loading &&
                    <>
                        <div style={{ 'display': 'flex', 'justifyContent': 'center', marginTop: '15px' }}>
                            <ClipLoader color='red' loading={loading} size={80} />
                        </div>
                    </>
                }
                {!loading &&
                    <div className='cart--table'>
                        <div className='table--scroll'>
                            {cartListing.length > 0 ?
                                <table>
                                    <tbody></tbody>
                                    <thead></thead>
                                    <tfoot></tfoot>
                                    <tr>
                                        <th>Item</th>
                                        <th></th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                    <>
                                        {cartListing && cartListing.length > 0 &&
                                            cartListing.map((cart, index) => {
                                                console.log(cart, index)
                                                return (
                                                    <tr key={index}>

                                                        <td>
                                                            <div className='cart__info'>
                                                                {cart.item_attachment &&
                                                                    <div className='cart__image'>

                                                                        <img src={`${process.env.baseApiUrl}${cart?.item_attachment?.attachment_url}`} alt="item image" layout="fill" quality={100} />
                                                                    </div>
                                                                }
                                                                {cart.cart_attachment &&
                                                                    <div className='cart__image'>

                                                                        <img src={`${process.env.baseApiUrl}${cart?.cart_attachment?.attachment_url}`} alt="item image" layout="fill" quality={100} />
                                                                    </div>
                                                                }
                                                                <div>
                                                                    {cart?.name &&
                                                                        <div className='cart__title'>
                                                                            <h3>{cart?.name}</h3>
                                                                        </div>
                                                                    }
                                                                    {cart.selectedoptions &&
                                                                        cart.selectedoptions.map((data, index) => {
                                                                            console.log(data)
                                                                            return (
                                                                                <div style={{ display: "inline-block", padding: '5px' }} key={data.item_step_option_id}>
                                                                                    <p>{data.title}</p>
                                                                                </div>

                                                                            )
                                                                        })}
                                                                    {cart.selected_options &&
                                                                        cart.selected_options.map((data, index) => {
                                                                            console.log(data)
                                                                            return (
                                                                                <div style={{ display: "inline-block", padding: '5px' }} key={data.step_option_id}>
                                                                                    <p>{data.title}</p>
                                                                                </div>

                                                                            )
                                                                        })}
                                                                    {cart.selectedCategory &&
                                                                        cart.selectedCategory.map((data, index) => {
                                                                            console.log(data)
                                                                            return (

                                                                                <h3 key={data?.item_id}><b>{data?.name}</b></h3>

                                                                            )
                                                                        })}
                                                                    {cart.selected_category &&
                                                                        cart.selected_category.map((data, index) => {
                                                                            console.log(data)
                                                                            return (

                                                                                <h3 key={data?.item_id}><b>{data?.name}</b></h3>

                                                                            )
                                                                        })}
                                                                </div>

                                                            </div>


                                                            <div className='cart__offers' >
                                                                <form>
                                                                    <ul>
                                                                        {cart?.addon_data?.length > 0 &&
                                                                            cart?.addon_data?.map((data, index) => {
                                                                                console.log(data)
                                                                                console.log(cart)
                                                                                // let selectedItem = cart?.selected_addon_data.filter((e) => e.addon_id == data.addon_id)
                                                                                return (
                                                                                    <li key={data.addon_id}>
                                                                                        {token &&
                                                                                        
                                                        <div className='offer__select'>
                                                            <input type="checkbox" name="offerList" value="" defaultChecked={cart?.selected_addon_data?.find((e) => e.addon_id == data.addon_id) ? true : false} id={cart.cart_id + data.addon_id.toString()} onClick={(e) => selectAddOn(e, data, cart?.cart_id )} />
                                                            <label htmlFor={cart.cart_id + data.addon_id.toString()}>
                                                                <span className='remove__offer'>
                                                                    <Image src="/images/remove-offer--icon.svg" alt="remove item" layout="fill" quality={100} />
                                                                </span>
                                                                <span className='add__offer'>
                                                                    <Image src="/images/add-offer--icon.svg" alt="add item" layout="fill" quality={100} />
                                                                </span>
                                                                <span className='offer__title'>{data.addon_item ? data.addon_item.name : data.item_data?.name}</span>
                                                                <span className='offer__price'><span>$ {data.addon_item ? data.addon_item.price : data.item_data?.price}</span> $ {data.offered_price}</span>
                                                            </label>
                                                        </div>
                                                                        }
                                                                        
                                                                        {!token &&
                                                        
                                                                                        
                                                                                        <div className='offer__select'>
                                                                                            <input type="checkbox" name="offerList" value="" defaultChecked={cart?.selected_addOn?.find((e) => e.addon_id == data.addon_id ) ? true : false } id={cart.uniqueIndex.toString() + data.addon_id} onClick={(e) => selectAddOn(e, data, cart)} />
                                                                                            <label htmlFor={cart.uniqueIndex.toString() + data.addon_id}>
                                                                                                <span className='remove__offer'>
                                                                                                    <Image src="/images/remove-offer--icon.svg" alt="remove item" layout="fill" quality={100} />
                                                                                                </span>
                                                                                                <span className='add__offer'>
                                                                                                    <Image src="/images/add-offer--icon.svg" alt="add item" layout="fill" quality={100} />
                                                                                                </span>
                                                                                                <span className='offer__title'>{data.addon_item ? data.addon_item.name : data.item_data?.name}</span>
                                                                                                <span className='offer__price'><span>$ {data.addon_item ? data.addon_item.price : data.item_data?.price}</span> $ {data.offered_price}</span>
                                                                                            </label>
                                                                                        </div>
                                                                                                        }
                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                        {/* } */}

                                                                        {/* {cart.addon_data.length > 0 &&
                                                    <li>
                                                        <div className='offer__select'>
                                                            <input type="checkbox" name="offerList" value="" id={data.labelId2} />
                                                            <label htmlFor={data.labelId2}>
                                                                <span className='remove__offer'>
                                                                    <Image src="/images/remove-offer--icon.svg" alt="remove-item" layout="fill" quality={100} />
                                                                </span>
                                                                <span className='add__offer'>
                                                                    <Image src="/images/add-offer--icon.svg" alt="add item" layout="fill" quality={100} />
                                                                </span>
                                                                <span className='offer__title'>{data.cartOffer2}</span>
                                                                <span className='offer__price'><span>$ {data.offerItemPrice2}</span> $ {data.offerPrice}</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    } */}
                                                                    </ul>
                                                                </form>
                                                            </div>

                                                        </td>
                                                        <td>
                                                            <div className='cart__actions'>

                                                                {/* <Link href="#"> */}
                                                                <a><img src="/images/bin-icon.svg" alt="delete" layout='fill' quality={100} onClick={() => { token ? deleteApi(cart) : deleteItem(index, cart) }} /></a>
                                                                {/* </Link> */}
                                                                {/* <Link href="#"> */}
                                                                <a><img src="/images/add-item-icon.svg" alt="add item" layout='fill' quality={100} onClick={() => duplicate(cart)} /></a>
                                                                {/* </Link> */}
                                                                {cart.customize_status > 0 &&
                                                                    <Link href={`/prepSteps/step-1/?edit_id=${JSON.stringify(cart)}`}>
                                                                        <a><img src="/images/edit-icon--black.svg" alt="edit" layout='fill' quality={100} /></a>
                                                                    </Link>
                                                                }
                                                            </div>
                                                        </td>
                                                        <td className='site_font--700'>1</td>
                                                        <td>$ {cart.total_price ? parseInt(cart.total_price).toFixed(2) : cart.price.toFixed(2)}</td>

                                                    </tr>

                                                )
                                            })
                                        }
                                    </>

                                    <tr>

                                        <td colSpan='4'>
                                            <div className='cart--subtotal'>
                                                <span>Sub Total</span>
                                                <span>${parseInt(price).toFixed(2)}</span>
                                            </div>
                                            <div className='cart--subtotal'>
                                                <span>Service Fee</span>
                                                <span>${parseInt(price * 5 / 100).toFixed(2)}</span>

                                            </div>

                                            <div className='cart--subtotal'>
                                                <span>Total</span>
                                                <span>${parseInt(price + price * 5 / 100).toFixed(2)}</span>
                                            </div>
                                            <button onClick={() => clearCart()}>Clear All</button>
                                            {/* <div className='cart--subtotal'>
                                        <span></span>
                                        <span>
                                        <Link href="/card-checkout">
                        <a className="btnRed btn">Checkout</a>
                      </Link>
                                        </span>
                                    
                                    </div> */}
                                        </td>
                                    </tr>
                                    
                                </table>
                                
                                :
                                <p>Nothing In The Cart...</p>
                            }
                        </div>
                        
                    </div>
                    
                }
            </div>
        </React.Fragment>
    )
}
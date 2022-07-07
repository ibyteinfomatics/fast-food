import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header/Header'
import { Cartlists } from './api/Cartlists'
import { useRouter } from 'next/router';
import ClipLoader from "react-spinners/ClipLoader";

export default function CartView() {
    
    const [ cart, setCart ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [token, setToken ] = useState("")
    const router = useRouter();
    const saveUrl = () => {
        localStorage.setItem("url", router.asPath)
    }
    const deleteItem = async (data) => {

        const item = localStorage.getItem("itemId")
        const myArray = item.split(",");
        const index = myArray.indexOf(`${data.item_id}`)
            if( index !== -1 ) {
            myArray.splice(index, 1)
            localStorage.setItem("itemId" , myArray);
            itemData()
            }

    }

    const itemData = async () => {
        const itemId = localStorage.getItem("itemId")
        console.log(itemId)
        const myArray = itemId.split(",");
        console.log(myArray[0])
        setLoading(true)
        const result = await fetch(
            `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${myArray.at(-1)}`,
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
            console.log(cart)
        } else {
            setLoading(false)
            setCart([]);
            return response;
        }
    };
    useEffect(() => {
        if( localStorage.getItem("itemId") ) {
            itemData();
        }
        setToken(localStorage.getItem("token"))
        
        document.body.classList.add("cart__page");
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove('login__form');
        document.body.classList.remove('checkout__page');
    }, [])
    // const listLength = Cartlists.length;
    return(
        <React.Fragment>
            {/* Header */}
            <Header/>

            {/* Cart view */}
            <div className='cart__wrapper'>
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
                    {cart ?
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
                        {/* {cart?.map((data, index) =>{
                            console.log(data)
                            return(  */}
                                {cart &&  
                                                             
                            <tr>
                                
                                <td>
                                    <div className='cart__info'>
                                        {cart.item_attachment &&
                                        <div className='cart__image'>
                                            <img src={`${process.env.baseApiUrl}${cart?.item_attachment?.attachment_url}`} alt="item image" layout="fill" quality={100} />
                                        </div>
                                        }
                                        {cart?.name &&
                                        <div className='cart__title'>
                                            <h3>{cart?.name}</h3>
                                        </div>
                                        }
                                    </div>
                                    {cart.addon_status != 0 &&
                                    <div className='cart__offers'>
                                        <form>
                                            <ul>
                                            {/* {cart.addon_data.length > 0 &&
                                                <li>
                                                    <div className='offer__select'>
                                                        <input type="checkbox" name="offerList" value="" id={data.labelId1} />
                                                        <label htmlFor={data.labelId1}>
                                                            <span className='remove__offer'>
                                                                <Image src="/images/remove-offer--icon.svg" alt="remove item" layout="fill" quality={100} />
                                                            </span>
                                                            <span className='add__offer'>
                                                                <Image src="/images/add-offer--icon.svg" alt="add item" layout="fill" quality={100} />
                                                            </span>
                                                            <span className='offer__title'>{data.cartOffer}</span>
                                                            <span className='offer__price'><span>$ {data.offerItemPrice}</span> $ {data.offerPrice}</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                } */}
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
                                    }
                                </td>
                                <td>
                                    <div className='cart__actions'>
                                        <Link href={`/prepSteps/step-1/?item_id=${cart.item_id}`}>
                                            <a><Image src="/images/edit-icon--black.svg" alt="edit" layout='fill' quality={100} /></a>
                                        </Link>
                                        {/* <Link href="#"> */}
                                            <a><Image src="/images/bin-icon.svg" alt="delete" layout='fill' quality={100} onClick={() => {deleteItem(cart)}}/></a>
                                        {/* </Link> */}
                                        <Link href="#">
                                            <a><Image src="/images/add-item-icon.svg" alt="add item" layout='fill' quality={100} /></a>
                                        </Link>
                                    </div>
                                </td>
                                <td className='site_font--700'>1</td>
                                <td>$ {cart.price}</td>
                            </tr>
                        }
                            {/* );
                        })} */}
                        <tr>
                            
                            <td colSpan='4'>
                                <div className='cart--subtotal'>
                                    <span>Sub Total</span>
                                    <span>${cart.price}</span>
                                </div>
                                <div className='cart--subtotal'>
                                    <span>Tax</span>
                                    <span>${cart.price * 3/100}</span>
                                    
                                </div>
                                
                                <div className='cart--subtotal'>
                                    <span>Total</span>
                                    <span>${cart.price+ cart.price * 3/100}</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                    :
                    <p>Nothing In The Cart...</p>
                    }
                </div>
                }
            </div>
        </React.Fragment>
    )
}
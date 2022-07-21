import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../../components/Header/Header'
import CardImage from '../../components/CardImage/CardImage';
import { useRouter } from "next/router";
// import { Circles } from  'react-loader-spinner'
import StepSelection from './step1-selection';
// import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { Sidelist } from '../api/Sideslist';
import Image from 'next/image';
import { toast } from 'react-toastify';



export default function StepOne(props) {

    const router = useRouter();
    const [token, setToken] = useState("")
    const [editData, setEditData] = useState()
    const id = router.asPath.substring(router.asPath.indexOf('=') + 1);


    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [stepOptionId, setStepOptionId] = useState([]);
    const [categoryId, setCategoryId] = useState([]);


    const addToCart = async () => {
        if (token) {
            if (editData) {
                console.log(editData)
                console.log(stepOptionId)
                console.log(categoryId)
                const arrayItem = {
                    cart_id: editData.cart_id, selectedoptions: stepOptionId, selectedCategory: categoryId
                }
                console.log(arrayItem)
                const result = await fetch(
                    `${process.env.baseApiUrl}/api/update/cart`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            Accept: "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        },
                        body: JSON.stringify(arrayItem)
                    }
                );
                let response = await result.json();
                console.log(response)
                if (response.success) {

                    toast.success("item updated sucessfully", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000

                    });
                    setTimeout(() => {
                        router.push("/cart")
                    }, 2000)




                } else {

                    return response;
                }

            } else {
                const storeId = localStorage.getItem("storeId")
                console.log("token recieved")
                console.log(item)
                const arrayItem = []
                arrayItem.push({ item_id: item.item_id, is_customize: 1, selectedoptions: stepOptionId, selectedCategory: categoryId })
                console.log(arrayItem)
                const result = await fetch(

                    `${process.env.baseApiUrl}/api/add/to/cart`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            Accept: "application/json",
                            store_id: storeId,
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify(arrayItem)
                    }
                );
                let response = await result.json();
                console.log(response)
                if (response.success) {
                    toast.success(response.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000
                    });
                    localStorage.removeItem("items")
                    router.push("/cart")

                } else {

                    return response;
                }
            }

        }
        else {
            if (editData) {
                console.log(editData)
                console.log("editData")
                console.log(item)
                item['selectedoptions'] = stepOptionId
                item['selectedCategory'] = categoryId
                item['uniqueIndex'] = editData.uniqueIndex
                item['selected_addOn'] = editData?.selected_addOn
                //this is for selected options and category price add
                const price = 0;
            price = item.price
            item.selectedoptions.map((data) => {
                price = price + parseInt(data.price ? data.price : 0)
            })
            item.selectedCategory.map((data) => {
                price = price + parseInt(data.price ? data.price : 0)
            })
            if(item.selected_addOn) {
                item?.selected_addOn.map((data) => {
                    price = price + parseInt(data.offered_price ? data.offered_price : 0)
                })
            }
            
            item['total_price'] = price
            console.log(price)
                console.log(item)
                const findData = JSON.parse(localStorage.getItem("items"))
                const ui = findData.find((e) => e.uniqueIndex === item.uniqueIndex)
                const index = findData.indexOf(ui)
                console.log(index)
                findData.splice(index, 1, item)
                console.log(findData)
                localStorage.setItem("items", JSON.stringify(findData))
                router.push("/cart")

            } else {
                console.log(item)

                item['selectedoptions'] = stepOptionId
                item['selectedCategory'] = categoryId
                //this is for selected options and category price add
                const price = 0;
                price = item.price
                item.selectedoptions.map((data) => {

                    price = price + parseInt(data?.price ? data.price : 0)
                })
                item.selectedCategory.map((data) => {
                    price = price + parseInt(data?.price ? data.price : 0)
                })
                item['total_price'] = price
                console.log(price)
                if (localStorage.getItem("items") != [] && localStorage.getItem("items")) {
                    const items = JSON.parse(localStorage.getItem("items"))
                    item['uniqueIndex'] = items.length > 0 ? items[items.length - 1].uniqueIndex + 1 : 1
                    console.log(items)
                    items.push(item)
                    console.log(items)

                    localStorage.setItem("items", JSON.stringify(items))
                } else {
                    item["uniqueIndex"] = 1
                    const array = [item]
                    localStorage.setItem("items", JSON.stringify(array))
                    console.log(array)
                }
                router.push("/cart")

            }

        }


    }
    const itemData = async () => {


        setLoading(true);
        if (router.query.edit_id) {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                console.log("enter in edit")
                const data = JSON.parse(router.query.edit_id)
                console.log(data)

                const changeOptionData = []
                const changeCategoryData = []
                data.selected_options.map((data1) => {
                    console.log(data1)
                    changeOptionData.push({
                        attachment_id: data1.attachment_id,
                        step_id: data1.step_id,
                        is_option: null,
                        item_id: data1.item_id,
                        item_step_option_id: data1.item_step_option_id,
                        price: data1.price,
                        short_description: data1.short_description,
                        step_attachment: data1.option_attachment,
                        title: data1.title
                    })
                })
                data.selected_category.map((data1) => {
                    console.log(data1)
                    changeCategoryData.push({
                        addon_status: 0,
                        attachment_id: data1.attachment_id,
                        customize_status: data1.customize_status,
                        description: data1.description,
                        item_attachment: data1.sub_category_attachment,
                        item_id: data1.item_id,
                        item_type_id: data1.item_type_id,
                        name: data1.name,
                        price: data1.price,
                        short_description: "",
                        slug: "combo",
                        status: 1,
                        user_id: data1.user_id
                    })
                })
                setStepOptionId(changeOptionData)
                setCategoryId(changeCategoryData)
                // setStepOptionId(data.selected_options)
                setEditData(data)
                const result = await fetch(
                    `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${data.item_id}`,
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
                    setItem(response.item_data);
                    setLoading(false);
                } else {
                    return response;
                }

            } else {
                console.log("edit without login");
                const data = JSON.parse(router.query.edit_id)
                console.log(data)

                setStepOptionId(data.selectedoptions)
                setCategoryId(data.selectedCategory)
                // setStepOptionId(data.selected_options)
                setEditData(data)
                const result = await fetch(
                    `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${data.item_id}`,
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
                    setItem(response.item_data);
                    setLoading(false);
                } else {
                    return response;
                }
            }



        }
        else {
            // const data = router.asPath.substring(router.asPath.indexOf('=') + 1);
            // data.split("?")[0];
            // // const data= JSON.parse(router.query.edit_id)
            // console.log(JSON.parse(data))

            const result = await fetch(
                `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${id}`,
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
                setItem(response.item_data);
                setLoading(false);
            } else {
                router.push('/cart')
                // return response;

            }
        }





    };
    const getOptionData = async (data) => {

        console.log(data)
        const steps = [...stepOptionId];
        const find = stepOptionId.find((e) => e.step_id === data.step_id)
        console.log(find)
        if (find) {
            console.log(steps)
            const stepIndex = stepOptionId.indexOf(find)
            steps.splice(stepIndex, 1)
            steps.push(data)
            console.log(steps)
            setStepOptionId(steps)
        } else {
            steps.push(data)
            setStepOptionId(steps)
            console.log(steps)
        }



    }
    const getSubData = async (e, data) => {
        console.log(e)
        console.log(data)

        if (editData) {
            if (e.target.checked) {
                const category = [...categoryId, data]
                await setCategoryId(category)
            } else {
                const allCategory = [...categoryId]
                console.log(allCategory)
                const findDataId = allCategory.find((e) => e.item_id === data.item_id)
                console.log(findDataId)
                const index = allCategory.indexOf(findDataId)
                console.log(index)
                if (index !== -1) {
                    allCategory.splice(index, 1)
                    await setCategoryId(allCategory)

                }

            }

        } else {
            if (e.target.checked) {
                const category = [...categoryId, data]
                await setCategoryId(category)
            } else {
                const allCategory = categoryId
                console.log(allCategory)

                const index = allCategory.indexOf(data)
                console.log(index)
                if (index !== -1) {
                    allCategory.splice(index, 1)
                    await setCategoryId(allCategory)

                }

            }
        }



        // }

    }

    useEffect(() => {
        setStepOptionId([])
        setCategoryId([])

        setToken(localStorage.getItem("token"))
        document.body.classList.add("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove("login__pages");
        document.body.classList.remove('cart__page');
        document.body.classList.remove('checkout__page');
        document.body.classList.remove("progress__page");
        document.body.classList.remove("profile__pages");
        itemData();
    }, [])

    return (
        <React.Fragment>
            <Header />

            <div className='siteWidth step-one'>
                {loading &&
                    <>
                        <div style={{ 'display': 'flex', 'justifyContent': 'center', marginTop: '15px' }}>
                            <ClipLoader color='red' loading={loading} size={80} />
                        </div>
                    </>
                }
                {!loading &&
                    <>

                        {item &&

                            <div className='bgGray' key={item.item_id}>

                                <div className='stepGridTwo bgGrey'>
                                    <div className='stepLeftData'>
                                        <CardImage
                                            cardTitle={item.name}
                                            cardPrice={`$${item.price}`}
                                            cardDesc={item.description}
                                            cardImg={`${process.env.baseApiUrl}${item.item_attachment?.attachment_url}`}
                                            itemId={item.item_id}
                                            key={item.item_id}
                                        />
                                    </div>

                                    <div className='stepRightData bgWhite'>
                                        <div className='chooseList'>
                                            {item.step_data && item?.step_data?.length > 0 &&
                                                item?.step_data.map((stepList) => {
                                                    // console.log(stepList)
                                                    return (
                                                        <div className='optionRow' key={stepList.item_step_id}>
                                                            <div className='stepRightData bgWhite'>


                                                                <h4 className='font-26'>{stepList.title}</h4>
                                                                <p className='textGray'>{stepList.sub_title}</p>


                                                                <div className='heatSelection'>
                                                                    <div className='heatOption'>
                                                                        {stepList.option && stepList.option.length > 0 &&
                                                                            stepList.option.map((optionData) => {
                                                                                console.log(optionData, 'optionData')
                                                                                return (



                                                                                    <div className='chooseOption extraheat' key={optionData.item_step_option_id} >
                                                                                        {localStorage.getItem("token") &&
                                                                                            <><input type="radio" id={optionData.item_step_option_id} defaultChecked={editData && editData.selected_options.find((e) => e.item_step_option_id === optionData.item_step_option_id) ? true : false} name={optionData.step_id} /><label className={optionData?.step_attachment ? "" : 'hidden-img'} htmlFor={optionData.item_step_option_id} onClick={() => getOptionData(optionData)}>
                                                                                                <div className='heatOptionText'>{<span className='heatIcon'>
                                                                                                    {optionData?.step_attachment && <img src={`${process.env.baseApiUrl}${optionData?.step_attachment?.attachment_url}`} />}

                                                                                                </span>}
                                                                                                    <p className='font-21'>{optionData.title}</p>
                                                                                                    <p className='font-8'>{optionData?.price && `$ ${optionData?.price}`}</p>
                                                                                                </div>
                                                                                            </label></>
                                                                                        }
                                                                                        {!localStorage.getItem("token") &&


                                                                                            <><input type="radio" id={optionData.item_step_option_id} defaultChecked={editData && editData.selectedoptions.find((e) => e.item_step_option_id === optionData.item_step_option_id) ? true : false} name={optionData.step_id} /><label className={optionData?.step_attachment ? "" : 'hidden-img'} htmlFor={optionData.item_step_option_id} onClick={() => getOptionData(optionData)}>
                                                                                                <div className='heatOptionText'>{<span className='heatIcon'>
                                                                                                    {optionData?.step_attachment && <img src={`${process.env.baseApiUrl}${optionData?.step_attachment?.attachment_url}`} />}

                                                                                                </span>}
                                                                                                    <p className='font-21'>{optionData.title}</p>
                                                                                                    <p className='font-8'>{optionData?.price && `$ ${optionData?.price}`}</p>
                                                                                                </div>
                                                                                            </label></>

                                                                                        }
                                                                                    </div>





                                                                                )
                                                                            })


                                                                        }
                                                                    </div>
                                                                </div>





                                                            </div>

                                                            <div className='optionTitle'
                                                            >

                                                            </div>




                                                        </div>
                                                    )
                                                })}

                                            {item.sub_category_data && item.sub_category_data.length > 0 &&
                                                item.sub_category_data.map((side_data) => {
                                                    // console.log(side_data)
                                                    return (

                                                        <div className='optionRow' key={side_data.item_step_id}>
                                                            <h4 className='font-26'>{side_data.title}</h4>
                                                            <p className='textGray'>{side_data.sub_title}</p>

                                                            <div className='stepSelection'>
                                                                <form>
                                                                    <ul>
                                                                        {side_data.map_item_side.map((data, index) => {
                                                                            // console.log(data);
                                                                            return (
                                                                                <li key={index}>
                                                                                    {data.map_item.map((data1, index) => {
                                                                                        console.log(data1);
                                                                                        return (


                                                                                            <div className='form--item' key={data1.item_id} onClick={(e) => getSubData(e, data1)}>
                                                                                                {localStorage.getItem("token") &&
                                                                                                    <><input type="checkbox" defaultChecked={editData && editData.selected_category.find((e) => e.item_id === data1.item_id) ? true : false} id={data1.item_id} name="sides" /><label htmlFor={data1.item_id}>
                                                                                                        <span className='side__image'>
                                                                                                            <img src={`${process.env.baseApiUrl}${data1?.item_attachment?.attachment_url}`} alt="side image" width="215" height="195" />
                                                                                                        </span>
                                                                                                        <span className='side__header'>
                                                                                                            <h3>{data1.name}</h3>
                                                                                                            <p>${data1.price}</p>
                                                                                                        </span>
                                                                                                    </label></>
                                                                                                }
                                                                                                {!localStorage.getItem("token") &&

                                                                                                    <><input type="checkbox" defaultChecked={editData && editData.selectedCategory.find((e) => e.item_id === data1.item_id) ? true : false} id={data1.item_id} name="sides" /><label htmlFor={data1.item_id}>
                                                                                                        <span className='side__image'>
                                                                                                            <img src={`${process.env.baseApiUrl}${data1?.item_attachment?.attachment_url}`} alt="side image" width="215" height="195" />
                                                                                                        </span>
                                                                                                        <span className='side__header'>
                                                                                                            <h3>{data1.name}</h3>
                                                                                                            <p>${data1.price}</p>
                                                                                                        </span>
                                                                                                    </label></>

                                                                                                }
                                                                                            </div>



                                                                                        )
                                                                                    })}
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </form>
                                                            </div>


                                                        </div>
                                                    )
                                                })}
                                        </div>
                                        <div className='rightBtn'>

                                            {/* <Link href="/prepSteps/your-selection"> */}
                                            <a style={{ 'cursor': 'pointer' }} className='btnBlack btn' onClick={() => { addToCart() }} >Update Meal</a>
                                            {/* </Link> */}
                                        </div>
                                    </div>

                                </div>


                            </div>

                        }
                    </>
                }
            </div>
        </React.Fragment>
    )
}

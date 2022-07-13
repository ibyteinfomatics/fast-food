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
    const [token, setToken ] = useState("")
    // const [id, setId] = useState("")
    const [editData, setEditData] = useState()
    const id = router.asPath.substring(router.asPath.indexOf('=') + 1);
    
    
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(true);
    const [heatOptions, setHeatOptions] = useState("");
    const [tweak, setTweak] = useState([]);
    const [stepOptionId, setStepOptionId] = useState([]);
    const [categoryId, setCategoryId] = useState([]);

    


    
    const handleClick = async (data, tweakData) => {
        
        setTweak(tweakData);
        setHeatOptions(data);
    };
    const addToCart = async() => {
        if(token) {
            if(editData) {
                console.log( editData)
                console.log(stepOptionId )
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
                    router.push("/cart")
                toast.success("item updated sucessfully", {
                    position: toast.POSITION.TOP_RIGHT,
                });
          
          
          
      } else {
    
          return response;
      }

            }else {
                const storeId = localStorage.getItem("storeId")
            console.log("token recieved")
            console.log(item)
            const arrayItem = []
        // item['selectedOptions'] = stepOptionId
        // item['selectedCategory'] = categoryId
        arrayItem.push({item_id: item.item_id, is_customize: 1, selectedoptions: stepOptionId, selectedCategory: categoryId})
        console.log(arrayItem)
        const result = await fetch(
            // `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${myArray.at(-1)}`,
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
        });
        localStorage.removeItem("items")
        router.push("/cart")
        
    } else {
  
        return response;
    }
            }
            
        // if(localStorage.getItem("items") !=[] && localStorage.getItem("items")) {
        //     const items = JSON.parse(localStorage.getItem("items"))
        //     console.log(items)
        //     items.push(item)
        //     console.log(items)
            
        //     // console.log(cartItem)
            
        //     // localStorage.setItem("items",JSON.stringify(items))
        // }else {
        //     const array = [item]
        //     // localStorage.setItem("items", JSON.stringify(array))
        //     console.log(array)
        // }
        // router.push("/cart")
        //     console.log(categoryId)
        // const sub = stepOptionId.map((item) => {
        //     return item.item_step_option_id
        // });
        
        //    localStorage.setItem("subCatgeoryId", categoryId)
        //    localStorage.setItem("stepOptions", sub)
        //     if(localStorage.getItem("itemId")) {
        //         const items = localStorage.getItem("itemId");
        //         items = [items, id]
                
        //         localStorage.setItem("itemId", items)
            
        //     } else {
        //       localStorage.setItem("itemId", id)
        //     }
        //     router.push("/cart")
        }
        else{
            console.log(item)
        item['selectedoptions'] = stepOptionId
        item['selectedCategory'] = categoryId
        console.log(item)
        if(localStorage.getItem("items") !=[] && localStorage.getItem("items")) {
            const items = JSON.parse(localStorage.getItem("items"))
            console.log(items)
            items.push(item)
            console.log(items)
            
            localStorage.setItem("items",JSON.stringify(items))
        }else {
            const array = [item]
            localStorage.setItem("items", JSON.stringify(array))
            console.log(array)
        }
        router.push("/cart")
        }
        
        
    }
    // const addToCart = () => {
    //     if(!token) {
    //         localStorage.setItem("url", router.asPath)
    //         console.log(categoryId)
    //     const sub = stepOptionId.map((item) => {
    //         return item.item_step_option_id
    //     });
        
    //        localStorage.setItem("subCatgeoryId", categoryId)
    //        localStorage.setItem("stepOptions", sub)
    //         if(localStorage.getItem("itemId")) {
    //             const items = localStorage.getItem("itemId");
    //             items = [items, id]
                
    //             localStorage.setItem("itemId", items)
            
    //         } else {
    //           localStorage.setItem("itemId", id)
    //         }
    //         router.push("/login")
    //     }
    //     else {
            
    //         console.log(categoryId)
    //     const sub = stepOptionId.map((item) => {
    //         return item.item_step_option_id
    //     });
        
    //        localStorage.setItem("subCatgeoryId", categoryId)
    //        localStorage.setItem("stepOptions", sub)
    //         if(localStorage.getItem("itemId")) {
    //             const items = localStorage.getItem("itemId");
    //             items = [items, id]
                
    //             localStorage.setItem("itemId", items)
            
    //         } else {
    //           localStorage.setItem("itemId", id)
    //         }
    //         router.push("/cart")
    //     }
        
            
          
    // }
    const itemData = async () => {
        
        // window.location.reload();
        setLoading(true);
        if(router.query.edit_id) {
            console.log("enter in edit")
            const data= JSON.parse(router.query.edit_id)
            console.log(data)
            const changeOptionData = []
            const changeCategoryData = []
            data.selected_options.map((data) => {
                console.log(data)
                changeOptionData.push({
                    attachment_id: data.attachment_id,
                    step_id: data.step_id,
                    is_option: null,
                    item_id: data.item_id,
                    item_step_option_id: data.step_option_id,
                    price: data.price,
                    short_description: data.short_description,
                    step_attachment: data.option_attachment,
                    title: "test1"
                })
            })
            data.selected_category.map((data) => {
                console.log(data)
                changeCategoryData.push({
                    addon_status: 0,
                    attachment_id: data.attachment_id,
                    customize_status: data.customize_status,
                    description:  data.description,
                    item_attachment:data.sub_category_attachment ,
                    item_id: data.item_id,
                    item_type_id: data.item_type_id,
                    name: "Combo Meal",
                    price: 90,
                    short_description: "",
                    slug: "combo",
                    status: 1,
                    user_id:data.user_id
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
        }
        else{
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
                return response;
            }
        }
        
    

       
    };
    const getOptionData = async (data) => {
        if(editData) {
            console.log(data)
            const steps = [...stepOptionId];
            console.log(steps)
            const find = stepOptionId.find((e) => e.step_id === data.step_id)
            console.log(find)
        //     const newEditData = {
        //         attachment_id: find.attachment_id,
        //         is_option: null,
        //         item_id: find.item_id,
        //         item_step_option_id: find.step_option_id,
        //         price: find.price,
        //         short_description: find.short_description,
        //         step_attachment: find.option_attachment,
        //         step_id: find.step_id,
        //         title: data.title,
        //     }
        // if(find) {
        //     console.log(steps)
        //     const stepIndex = stepOptionId.indexOf(find)
        //     steps.splice(stepIndex, 1)
        //     steps.push(newEditData)
        //     console.log(steps)
        //     setStepOptionId(steps)
        // } else {
        //     steps.push(newEditData)
        // setStepOptionId(steps)
        // console.log(steps)
        // }
        }else{
            console.log(data)
        const steps = [...stepOptionId];
        const find = stepOptionId.find((e) => e.step_id === data.step_id)
        console.log(find)
        if(find) {
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
        
        
    }
    const getSubData = async (e,data) => {
        if(editData) {
            console.log(data)
        }else{
            console.log(data)
        
            if(e.target.checked) {
                const category = [...categoryId, data]
                await setCategoryId(category)
            } else {
                const allCategory = categoryId
                console.log(allCategory)
                const index = allCategory.indexOf(data)
                if( index !== -1 ) {
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

            <div className='siteWidth'>
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
                                                                                
                                                                                
                                                                                return(
                                                                                    
                                                                    
                                                                                    <div className='chooseOption extraheat'  key={optionData.item_step_option_id} >
                                                                            <input type="radio" id={optionData.item_step_option_id} defaultChecked={ editData && editData.selected_options.find( (e) => e.step_option_id === optionData.item_step_option_id) ? true: false}   name={optionData.step_id}/>
                                                                            
                                                                            <label htmlFor={optionData.item_step_option_id} onClick={() => getOptionData(optionData)}>
                                                                                <span className='heatIcon'>
                                                                                <img src={`${process.env.baseApiUrl}${optionData?.step_attachment?.attachment_url}`}/>
                                                                                    
                                                                                </span>
                                                                                <p className='font-21'>{optionData.title}</p>
                                                                                <p className='font-8'>${optionData?.price}</p>
                                                                            </label>
                                                                                    </div>
                                                                                  
                                                                        
                                                                                )
                                                                            })
                                                                        
                                                                        
                                                                        }
                                                                        </div>
                                                                        </div>
                                                                        
                                                                        
                                                                    
                                                                
                                                                
                                                            </div>
                                                                    {/* <h4 className='step--title'>{stepList.title}</h4> */}
                                                                    <div className='optionTitle'
                                                                    //  onClick={() => { openEdit() }}
                                                                     >
                                                                        {/* <Link href="/prepSteps/step1-selection"> */}

                                                                        {/* <a>
                                                                            <h4>{tweak && heatOptions ? `${heatOptions}, ${tweak} ` : heatOptions ? heatOptions : stepList.sub_title}</h4>
                                                                            {!heatOptions &&
                                                                                <p className='addIcon'>

                                                                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M21 0.6875C9.80615 0.6875 0.6875 9.80615 0.6875 21C0.6875 32.1938 9.80615 41.3125 21 41.3125C32.1938 41.3125 41.3125 32.1938 41.3125 21C41.3125 9.80615 32.1938 0.6875 21 0.6875ZM21 3.8125C30.5093 3.8125 38.1875 11.4907 38.1875 21C38.1875 30.5093 30.5093 38.1875 21 38.1875C11.4907 38.1875 3.8125 30.5093 3.8125 21C3.8125 11.4907 11.4907 3.8125 21 3.8125ZM19.4375 13.1875V19.4375H13.1875V22.5625H19.4375V28.8125H22.5625V22.5625H28.8125V19.4375H22.5625V13.1875H19.4375Z" fill="#FE0435" />
                                                                                    </svg>


                                                                                </p>
                                                                            }

                                                                            {heatOptions && tweak &&
                                                                                <p className='addIcon'>

                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#FE0435" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>


                                                                                </p>
                                                                            }



                                                                        </a> */}


                                                                        {/* </Link> */}
                                                                    </div>
                                                                    {/* {options && */}
                                                                        {/* <StepSelection 
                                                                        selectHeat={heatOptions} tweak={tweak} options={stepList.option} handleClick={handleClick}
                                                                         /> */}
                                                                    {/* } */}



                                                                </div>
                                                            )
                                                        })}
                                                        
                                                        { item.sub_category_data && item.sub_category_data.length > 0 &&
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
                                                                return(
                                                                    <li key={index}>
                                                                        {data.map_item.map((data1, index) => {
                                                                        // console.log(data1);
                                                                        return(
                                                                        <div className='form--item' key={data1.item_id} onClick={(e) => getSubData(e,data1)}>
                                                                            <input type="checkbox" defaultChecked={ editData&& editData.selected_category.find( (e) => e.item_id === data1.item_id) ? true: false} id={data1.item_id} name="sides" />
                                                                            <label htmlFor={data1.item_id}>
                                                                                <span className='side__image'>
                                                                                    <img src={`${process.env.baseApiUrl}${data1?.item_attachment?.attachment_url}`} alt="side image" width="215" height="195" />
                                                                                </span>
                                                                                <span className='side__header'>
                                                                                    <h3>{data1.name}</h3>
                                                                                    <p>${data1.price}</p>
                                                                                </span>
                                                                            </label>
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
                                <a style={{'cursor': 'pointer'}} className='btnBlack btn' onClick={() => {addToCart()}} >Update Meal</a>
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

// {item.sub_category_data.length > 0 &&
//     item.sub_category_data.map((side_data) => {
//         return (
            
//             <div className='optionRow' key={side_data.side_option_id}>                                                                
//             <h4 className='font-26'>{side_data.title}</h4>
            
//                 {/* <div className='optionTitle'>

//                     <a>
//                         <h4>{side_data.sub_title}</h4>
//                         <p className='addIcon'>
//                             <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M21 0.6875C9.80615 0.6875 0.6875 9.80615 0.6875 21C0.6875 32.1938 9.80615 41.3125 21 41.3125C32.1938 41.3125 41.3125 32.1938 41.3125 21C41.3125 9.80615 32.1938 0.6875 21 0.6875ZM21 3.8125C30.5093 3.8125 38.1875 11.4907 38.1875 21C38.1875 30.5093 30.5093 38.1875 21 38.1875C11.4907 38.1875 3.8125 30.5093 3.8125 21C3.8125 11.4907 11.4907 3.8125 21 3.8125ZM19.4375 13.1875V19.4375H13.1875V22.5625H19.4375V28.8125H22.5625V22.5625H28.8125V19.4375H22.5625V13.1875H19.4375Z" fill="#FE0435" />
//                             </svg>
//                         </p>
//                     </a>

//                 </div> */}

//             </div>
//         )
//     })}

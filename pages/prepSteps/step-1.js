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


export default function StepOne(props) {
    console.log(props)
    const router = useRouter();
    const id = router.asPath.substring(router.asPath.indexOf('=') + 1);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(true);
    const [heatOptions, setHeatOptions] = useState("");
    const [tweak, setTweak] = useState([]);


    const handleClick = (data, tweakData) => {
        
        setTweak(tweakData);
        setHeatOptions(data);
        console.log(heatOptions, tweak)
        // setOptions(false)
    };
    const addToCart = () => {
           
            console.log(heatOptions, tweak)
            if(localStorage.getItem("itemId")) {
                const items = localStorage.getItem("itemId");
                items = [items, id]
                
                localStorage.setItem("itemId", items)
            // allItems.push(id)
            // localStorage.setItem("itemId", JSON.stringify(item))
            } else {
              localStorage.setItem("itemId", id)
            }
            router.push("/cart")
            
          
    }
    const itemData = async () => {
        setLoading(true);
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
            console.log(response)
            setItem(response.item_data);
            setLoading(false);
        } else {
            return response;
        }
    };
    const getOptionData = (e,data) => {
        // console.log(data)
        // console.log(e.target.checked)
    }
    // const openEdit = () => {
    //     setOptions(!options)
    // }
    useEffect(() => {
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
                                                            console.log(stepList)
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
                                                                                    
                                                                    
                                                                                    <div className='chooseOption extraheat' key={optionData.item_step_option_id} onClick={(e) => getOptionData(e, optionData)}>
                                                                            <input type="radio" id={optionData.item_step_option_id} name={optionData.step_id}/>
                                                                            
                                                                            <label htmlFor={optionData.item_step_option_id}>
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
                                                    console.log(side_data)
                                                    return (
                                                        
                                                        <div className='optionRow' key={side_data.item_step_id}>                                                                
                                                        <h4 className='font-26'>{side_data.title}</h4>
                                                        <p className='textGray'>{side_data.sub_title}</p>
                                                        
                                                   <div className='stepSelection'>
                                                        <form>
                                                            <ul>
                                                            {side_data.map_item_side.map((data, index) => {
                                                                console.log(data);
                                                                return(
                                                                    <li key={index}>
                                                                        {data.map_item.map((data1, index) => {
                                                                        console.log(data1);
                                                                        return(
                                                                        <div className='form--item' key={data1.item_id} onClick={(e) => getOptionData(e,data1)}>
                                                                            <input type="checkbox" id={data1.item_id} name="sides" />
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

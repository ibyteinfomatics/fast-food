import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
// import Header from '../../components/Header/Header';
// import CardImage from '../../components/CardImage/CardImage';
// import { set } from 'react-hook-form';

export default function StepSelection(props) {
    // console.log(props);
    
    const [ heat, setHeat ] = useState();
    const [ tweak, setTweak ] = useState([]);
    
    const handleChange = async (e) => {
        // const stepId = JSON.parse(e.target.value);
        // if( localStorage.getItem("stepOptionId")) {
        //     const stepOptions = [localStorage.getItem("stepOptionId")]
        //     stepOptions.push(stepId.item_step_option_id);
        //     localStorage.setItem("stepOptionId", stepOptions)
        // } else {
        //     localStorage.setItem("stepOptionId", stepId.item_step_option_id)
        // }
        
        setHeat(e.target.value)
        // setHeat({...heat});
        props.handleClick(heat, tweak);
        
      };
      const handleChangeTweak = async (e) => {
          setTweak({...tweak});
        if(e.target.checked == true) {
            
            await setTweak([...tweak ,e.target.value])
            
        } 
        if( e.target.checked == false ){
            let index = tweak.indexOf(e.target.value)
            if (index !== -1) {
                tweak.splice(index, 1);
                await setTweak(tweak);
                
            }
        } 
        props.handleClick(heat, tweak);
              
        
      };
      
      const buttonClickHandler = () => {
         setHeat({...heat});
         setTweak({...tweak});
        props.handleClick(heat, tweak);
        
    }
    

    useEffect(() => {
        if(props.selectHeat != '' || props.tweak.length > 0) {
            setTweak(props.tweak)
            setHeat(props.selectHeat)
            
        }
        
        document.body.classList.add("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove('login__form');
        document.body.classList.remove('cart__page');
        document.body.classList.remove('checkout__page');
        document.body.classList.remove("progress__page");
        document.body.classList.remove("profile__pages");
    }, [])
    return (
        <React.Fragment>
            <div className='siteWidth heatPage'>
            <div className='stepRightData bgWhite'>
                            <h4 className='font-26'>How would you like it?</h4>
                            <p className='textGray'>Choose your heat</p>
                            
                            <div className='heatSelection'>
                                <div className='heatOption'>
                                    {props.options &&
                                    
                                    <div className='chooseOption extraheat'>
                                        <input type="radio" id="exhot" name="heatoption" defaultChecked={props.selectHeat === "Extra Hot" ? true : false}  className="Extra Hot" value="Extra Hot" onChange={handleChange} />
                                        
                                        <label htmlFor="exhot">
                                            <span className='heatIcon'>
                                            {/* <img src='http://fastfoodadmin.ibyteworkshop.com/storage/banner/2022/05/10457454141651734196.jpg' /> */}
                                                {/* <img src='http://fastfoodadmin.ibyteworkshop.com/storage/banner/2022/05/10457454141651734196.jpg' /> */}
                                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    
                                                    <path d="M59.302 0.713318C57.6009 0.713318 56.2204 2.09389 56.2204 3.79495V13.0037H54.2462C48.6931 13.0037 44.1465 17.3573 43.8938 22.9227C43.5918 30.0105 40.9973 54.3134 20.5167 69.0991C19.432 69.8818 18.9784 71.2661 19.3852 72.5419C19.7981 73.8053 20.985 74.6725 22.3224 74.6725C60.7319 74.6725 74.6741 44.3992 74.6741 24.0543C74.6741 17.8725 70.1272 13.0399 64.3337 13.0399L62.3836 13.0278V3.79495C62.3836 2.09389 61.0031 0.713318 59.302 0.713318ZM21.7446 0.761468C21.1367 0.868555 20.5605 1.15698 20.1075 1.61614C19.8178 1.89965 13.0414 8.82418 13.0414 21.5143C13.0414 30.6915 17.8642 34.936 21.3835 38.03C24.0028 40.335 25.3679 41.6374 25.3679 43.8562C25.3679 45.8654 24.2374 50.0195 20.8538 50.0195C20.6504 50.0071 15.9351 49.5607 12.909 39.8597C12.5946 38.8674 11.8008 38.0968 10.8024 37.8133C9.7916 37.5175 8.71399 37.761 7.93742 38.4513C7.64159 38.7102 0.714844 44.8793 0.714844 54.6419C0.714844 59.6958 3.6553 65.3217 8.39485 69.3278C8.9742 69.8147 9.67845 70.0621 10.3811 70.0621C11.2562 70.0621 12.1303 69.6758 12.7404 68.9547C13.8437 67.6542 13.6677 65.7182 12.3673 64.6211C9.03911 61.7983 6.87811 57.8776 6.87811 54.6419C6.87811 51.4925 7.92847 48.8261 9.081 46.8415C13.7712 56.0618 20.4188 56.1827 20.7455 56.1827C28.1845 56.1827 31.5312 48.9717 31.5312 43.8562C31.5312 38.7468 28.3058 35.8978 25.4522 33.3955C22.2411 30.5727 19.2046 27.9057 19.2046 21.5143C19.2046 19.388 19.4309 17.4735 19.7945 15.7724C20.3615 18.5212 21.333 21.1416 22.9724 22.9227C26.2328 26.4481 31.8776 25.9018 34.8175 22.5737C36.802 20.3302 37.5266 17.1349 37.7546 14.4723C38.2169 14.7127 38.6943 14.9827 39.1751 15.2909C40.5926 16.1907 42.5122 15.7642 43.4244 14.3158C44.3242 12.8798 43.8915 10.9726 42.4493 10.0666C38.9794 7.88476 35.5009 7.00987 35.3591 6.97289C34.3669 6.73252 33.3307 6.98724 32.5664 7.65903C31.8083 8.33083 31.4258 9.32648 31.5553 10.3434C31.7895 12.2355 31.7666 16.7238 30.195 18.5049C29.8868 18.8501 29.4418 19.2031 28.4495 19.2031C28.1291 19.2031 27.8558 19.1217 27.5106 18.7457C25.3781 16.4406 24.9738 8.76264 25.3559 4.04774C25.4668 2.75962 24.7574 1.54459 23.5863 1.00222C23.0008 0.731037 22.3524 0.654382 21.7446 0.761468ZM54.2342 19.167L64.3217 19.2031C67.0705 19.2031 68.5108 21.6383 68.5108 24.0543C68.5108 38.0696 60.4953 63.471 31.4108 67.8592C47.4969 51.6067 49.7554 30.0593 50.0451 23.1996C50.1498 20.9377 51.9907 19.167 54.2342 19.167Z" fill="white" />
                                                </svg>
                                            </span>
                                            <p className='font-21'>Extra Hot</p>
                                        </label>
                                    </div>
                                    
                                    }
                                    {/* <div className='chooseOption heat'>
                                        <input type="radio" id="hot" name="heatoption" value="Hot"  className="Hot" onChange={handleChange}/>
                                        <label htmlFor="hot">
                                            <span className='heatIcon'>
                                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M59.302 0.713318C57.6009 0.713318 56.2204 2.09389 56.2204 3.79495V13.0037H54.2462C48.6931 13.0037 44.1465 17.3573 43.8938 22.9227C43.5918 30.0105 40.9973 54.3134 20.5167 69.0991C19.432 69.8818 18.9784 71.2661 19.3852 72.5419C19.7981 73.8053 20.985 74.6725 22.3224 74.6725C60.7319 74.6725 74.6741 44.3992 74.6741 24.0543C74.6741 17.8725 70.1272 13.0399 64.3337 13.0399L62.3836 13.0278V3.79495C62.3836 2.09389 61.0031 0.713318 59.302 0.713318ZM21.7446 0.761468C21.1367 0.868555 20.5605 1.15698 20.1075 1.61614C19.8178 1.89965 13.0414 8.82418 13.0414 21.5143C13.0414 30.6915 17.8642 34.936 21.3835 38.03C24.0028 40.335 25.3679 41.6374 25.3679 43.8562C25.3679 45.8654 24.2374 50.0195 20.8538 50.0195C20.6504 50.0071 15.9351 49.5607 12.909 39.8597C12.5946 38.8674 11.8008 38.0968 10.8024 37.8133C9.7916 37.5175 8.71399 37.761 7.93742 38.4513C7.64159 38.7102 0.714844 44.8793 0.714844 54.6419C0.714844 59.6958 3.6553 65.3217 8.39485 69.3278C8.9742 69.8147 9.67845 70.0621 10.3811 70.0621C11.2562 70.0621 12.1303 69.6758 12.7404 68.9547C13.8437 67.6542 13.6677 65.7182 12.3673 64.6211C9.03911 61.7983 6.87811 57.8776 6.87811 54.6419C6.87811 51.4925 7.92847 48.8261 9.081 46.8415C13.7712 56.0618 20.4188 56.1827 20.7455 56.1827C28.1845 56.1827 31.5312 48.9717 31.5312 43.8562C31.5312 38.7468 28.3058 35.8978 25.4522 33.3955C22.2411 30.5727 19.2046 27.9057 19.2046 21.5143C19.2046 19.388 19.4309 17.4735 19.7945 15.7724C20.3615 18.5212 21.333 21.1416 22.9724 22.9227C26.2328 26.4481 31.8776 25.9018 34.8175 22.5737C36.802 20.3302 37.5266 17.1349 37.7546 14.4723C38.2169 14.7127 38.6943 14.9827 39.1751 15.2909C40.5926 16.1907 42.5122 15.7642 43.4244 14.3158C44.3242 12.8798 43.8915 10.9726 42.4493 10.0666C38.9794 7.88476 35.5009 7.00987 35.3591 6.97289C34.3669 6.73252 33.3307 6.98724 32.5664 7.65903C31.8083 8.33083 31.4258 9.32648 31.5553 10.3434C31.7895 12.2355 31.7666 16.7238 30.195 18.5049C29.8868 18.8501 29.4418 19.2031 28.4495 19.2031C28.1291 19.2031 27.8558 19.1217 27.5106 18.7457C25.3781 16.4406 24.9738 8.76264 25.3559 4.04774C25.4668 2.75962 24.7574 1.54459 23.5863 1.00222C23.0008 0.731037 22.3524 0.654382 21.7446 0.761468ZM54.2342 19.167L64.3217 19.2031C67.0705 19.2031 68.5108 21.6383 68.5108 24.0543C68.5108 38.0696 60.4953 63.471 31.4108 67.8592C47.4969 51.6067 49.7554 30.0593 50.0451 23.1996C50.1498 20.9377 51.9907 19.167 54.2342 19.167Z" fill="white" />
                                                </svg>
                                            </span>
                                            <p className='font-21'>Hot</p>
                                        </label>
                                    </div>
                                    <div className='chooseOption mdheat'>
                                        <input type="radio" id="mdhot" name="heatoption" value="Medium" className="Medium" onChange={handleChange} />
                                        <label htmlFor="mdhot">
                                            <span className='heatIcon'>
                                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M59.302 0.713318C57.6009 0.713318 56.2204 2.09389 56.2204 3.79495V13.0037H54.2462C48.6931 13.0037 44.1465 17.3573 43.8938 22.9227C43.5918 30.0105 40.9973 54.3134 20.5167 69.0991C19.432 69.8818 18.9784 71.2661 19.3852 72.5419C19.7981 73.8053 20.985 74.6725 22.3224 74.6725C60.7319 74.6725 74.6741 44.3992 74.6741 24.0543C74.6741 17.8725 70.1272 13.0399 64.3337 13.0399L62.3836 13.0278V3.79495C62.3836 2.09389 61.0031 0.713318 59.302 0.713318ZM21.7446 0.761468C21.1367 0.868555 20.5605 1.15698 20.1075 1.61614C19.8178 1.89965 13.0414 8.82418 13.0414 21.5143C13.0414 30.6915 17.8642 34.936 21.3835 38.03C24.0028 40.335 25.3679 41.6374 25.3679 43.8562C25.3679 45.8654 24.2374 50.0195 20.8538 50.0195C20.6504 50.0071 15.9351 49.5607 12.909 39.8597C12.5946 38.8674 11.8008 38.0968 10.8024 37.8133C9.7916 37.5175 8.71399 37.761 7.93742 38.4513C7.64159 38.7102 0.714844 44.8793 0.714844 54.6419C0.714844 59.6958 3.6553 65.3217 8.39485 69.3278C8.9742 69.8147 9.67845 70.0621 10.3811 70.0621C11.2562 70.0621 12.1303 69.6758 12.7404 68.9547C13.8437 67.6542 13.6677 65.7182 12.3673 64.6211C9.03911 61.7983 6.87811 57.8776 6.87811 54.6419C6.87811 51.4925 7.92847 48.8261 9.081 46.8415C13.7712 56.0618 20.4188 56.1827 20.7455 56.1827C28.1845 56.1827 31.5312 48.9717 31.5312 43.8562C31.5312 38.7468 28.3058 35.8978 25.4522 33.3955C22.2411 30.5727 19.2046 27.9057 19.2046 21.5143C19.2046 19.388 19.4309 17.4735 19.7945 15.7724C20.3615 18.5212 21.333 21.1416 22.9724 22.9227C26.2328 26.4481 31.8776 25.9018 34.8175 22.5737C36.802 20.3302 37.5266 17.1349 37.7546 14.4723C38.2169 14.7127 38.6943 14.9827 39.1751 15.2909C40.5926 16.1907 42.5122 15.7642 43.4244 14.3158C44.3242 12.8798 43.8915 10.9726 42.4493 10.0666C38.9794 7.88476 35.5009 7.00987 35.3591 6.97289C34.3669 6.73252 33.3307 6.98724 32.5664 7.65903C31.8083 8.33083 31.4258 9.32648 31.5553 10.3434C31.7895 12.2355 31.7666 16.7238 30.195 18.5049C29.8868 18.8501 29.4418 19.2031 28.4495 19.2031C28.1291 19.2031 27.8558 19.1217 27.5106 18.7457C25.3781 16.4406 24.9738 8.76264 25.3559 4.04774C25.4668 2.75962 24.7574 1.54459 23.5863 1.00222C23.0008 0.731037 22.3524 0.654382 21.7446 0.761468ZM54.2342 19.167L64.3217 19.2031C67.0705 19.2031 68.5108 21.6383 68.5108 24.0543C68.5108 38.0696 60.4953 63.471 31.4108 67.8592C47.4969 51.6067 49.7554 30.0593 50.0451 23.1996C50.1498 20.9377 51.9907 19.167 54.2342 19.167Z" fill="white" />
                                                </svg>
                                            </span>
                                            <p className='font-21'>Medium</p>
                                        </label>
                                    </div>
                                    <div className='chooseOption plainheat'>
                                        <input type="radio" id="plain" name="heatoption" value="Plain"  className="Plain" onChange={handleChange}/>
                                        <label htmlFor="plain">
                                            <span className='heatIcon'>
                                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M59.302 0.713318C57.6009 0.713318 56.2204 2.09389 56.2204 3.79495V13.0037H54.2462C48.6931 13.0037 44.1465 17.3573 43.8938 22.9227C43.5918 30.0105 40.9973 54.3134 20.5167 69.0991C19.432 69.8818 18.9784 71.2661 19.3852 72.5419C19.7981 73.8053 20.985 74.6725 22.3224 74.6725C60.7319 74.6725 74.6741 44.3992 74.6741 24.0543C74.6741 17.8725 70.1272 13.0399 64.3337 13.0399L62.3836 13.0278V3.79495C62.3836 2.09389 61.0031 0.713318 59.302 0.713318ZM21.7446 0.761468C21.1367 0.868555 20.5605 1.15698 20.1075 1.61614C19.8178 1.89965 13.0414 8.82418 13.0414 21.5143C13.0414 30.6915 17.8642 34.936 21.3835 38.03C24.0028 40.335 25.3679 41.6374 25.3679 43.8562C25.3679 45.8654 24.2374 50.0195 20.8538 50.0195C20.6504 50.0071 15.9351 49.5607 12.909 39.8597C12.5946 38.8674 11.8008 38.0968 10.8024 37.8133C9.7916 37.5175 8.71399 37.761 7.93742 38.4513C7.64159 38.7102 0.714844 44.8793 0.714844 54.6419C0.714844 59.6958 3.6553 65.3217 8.39485 69.3278C8.9742 69.8147 9.67845 70.0621 10.3811 70.0621C11.2562 70.0621 12.1303 69.6758 12.7404 68.9547C13.8437 67.6542 13.6677 65.7182 12.3673 64.6211C9.03911 61.7983 6.87811 57.8776 6.87811 54.6419C6.87811 51.4925 7.92847 48.8261 9.081 46.8415C13.7712 56.0618 20.4188 56.1827 20.7455 56.1827C28.1845 56.1827 31.5312 48.9717 31.5312 43.8562C31.5312 38.7468 28.3058 35.8978 25.4522 33.3955C22.2411 30.5727 19.2046 27.9057 19.2046 21.5143C19.2046 19.388 19.4309 17.4735 19.7945 15.7724C20.3615 18.5212 21.333 21.1416 22.9724 22.9227C26.2328 26.4481 31.8776 25.9018 34.8175 22.5737C36.802 20.3302 37.5266 17.1349 37.7546 14.4723C38.2169 14.7127 38.6943 14.9827 39.1751 15.2909C40.5926 16.1907 42.5122 15.7642 43.4244 14.3158C44.3242 12.8798 43.8915 10.9726 42.4493 10.0666C38.9794 7.88476 35.5009 7.00987 35.3591 6.97289C34.3669 6.73252 33.3307 6.98724 32.5664 7.65903C31.8083 8.33083 31.4258 9.32648 31.5553 10.3434C31.7895 12.2355 31.7666 16.7238 30.195 18.5049C29.8868 18.8501 29.4418 19.2031 28.4495 19.2031C28.1291 19.2031 27.8558 19.1217 27.5106 18.7457C25.3781 16.4406 24.9738 8.76264 25.3559 4.04774C25.4668 2.75962 24.7574 1.54459 23.5863 1.00222C23.0008 0.731037 22.3524 0.654382 21.7446 0.761468ZM54.2342 19.167L64.3217 19.2031C67.0705 19.2031 68.5108 21.6383 68.5108 24.0543C68.5108 38.0696 60.4953 63.471 31.4108 67.8592C47.4969 51.6067 49.7554 30.0593 50.0451 23.1996C50.1498 20.9377 51.9907 19.167 54.2342 19.167Z" fill="white" />
                                                </svg>
                                            </span>
                                            <p className='font-21'>Plain</p>
                                        </label>
                                    </div> */}
                                </div>
                            </div>
                             
                            <h4 className='font-26'>Tweak your dish</h4>
                            <div className='heatSelection tweak'>
                                <div className='heatOption'>
                                    <div className='chooseOption'>
                                        <input type="checkbox" id="nocheese" defaultChecked={props?.tweak?.find(o => o === "No Cheese") ? true : false} name="tweakoption1"  className="No Cheese" value="No Cheese" onChange={handleChangeTweak} hidden/>
                                        <label htmlFor="nocheese">No Cheese
                                        </label>
                                    </div>
                                    <div className='chooseOption'>
                                        <input type="checkbox" id="redpaper" defaultChecked={props?.tweak?.find(o => o === "No Red Pepper Chutney") ? true : false}  name="tweakoption2"  className="No Red Pepper Chutney" value="No Red Pepper Chutney" onChange={handleChangeTweak} hidden />
                                        <label htmlFor="redpaper">No Red Pepper Chutney
                                        </label>
                                    </div>
                                    <div className='chooseOption'>
                                        <input type="checkbox" id="nolettuce" defaultChecked={props?.tweak?.find(o => o === "No Lettuce") ? true : false} name="tweakoption3"  className="No Lettuce" value="No Lettuce" onChange={handleChangeTweak} hidden/>
                                        <label htmlFor="nolettuce">No Lettuce
                                        </label>
                                    </div>
                                    <div className='chooseOption'>
                                        <input type="checkbox" id="nolemon"  defaultChecked={props?.tweak?.find(o => o === "No Lemon and Herb Mayo") ? true : false} name="tweakoption4"  className="No Lemon and Herb Mayo" value="No Lemon and Herb Mayo" onChange={handleChangeTweak} hidden/>
                                        <label htmlFor="nolemon">No Lemon and
                                            Herb Mayo
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='rightBtn'>
                                <a style={{'cursor': 'pointer'}} className='btnBlack btn' onClick={buttonClickHandler}>Update Meal</a>
                                
                            </div> */}
                        </div>
                <div className='bgGray'>
                    <div className='stepGridTwo bgGrey'>
                        {/* <div className='stepLeftData'>
                            <CardImage
                                cardImg="/images/bg.png"
                                cardTitle="Sunset Burgers"
                                cardPrice="$8.25"
                                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                            />
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CardCheckout() {
    const router = useRouter();
    const [checkoutCart, setCheckoutCart] = useState([])
    const [finalPrice, setFinalPrice] = useState()

    
    useEffect(() => {
        cartList()
    }, [])

    const cartList = async () => {
   
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
        setCheckoutCart(response.cart_item)
        const total = 0;
        response.cart_item.map((data) => {
            
            total = total + parseInt(data.total_price)
        })
        setFinalPrice(total)
        
    } else {
  
        return response;
    }

    }
    const [mobile, setMobile] = useState()
    const [cardNumber, setCardNumber] = useState();
    const [expires, setExpires] = useState();
    const [cvv, setCvv] = useState()
    const [time, setTime] = useState()
    const [saveCard, setSaveCard] = useState(false)
    const getFormValue = (e) => {
        e.preventDefault()
        const frmdetails = {
            'Mobile': mobile,
            'Card Number': cardNumber,
            'Expires On': expires,
            'cvv': cvv,
            'Time': time,
            'Save Card': saveCard
        }
        router.push('/checkout')
    }
    const formatString = (e) => {
        setExpires(e.target.value);
        var inputChar = String.fromCharCode(event.keyCode);
        var code = event.keyCode;
        var allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
            return;
        }

        event.target.value = event.target.value.replace(
            /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
            /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
            /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
            /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
            /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
            /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
            /\/\//g, '/' // Prevent entering more than 1 `/`
        );
    }

    return (
        <React.Fragment>
            <Header />

            <div className='bgGray'>
                <div className='siteWidth'>
                    <div className='cardVerify'>

                        <form onSubmit={(e) => { getFormValue(e) }}>
                            <div className='card-block'>
                                <h4 className='cardTitle'>Collection</h4>
                                <div className='gridBlogTwo'>
                                    <div className='form--item'>
                                        <div className='showDate'>
                                            Today [Wed 17 Feb 2022]
                                        </div>
                                    </div>
                                    <div className='form--item'>
                                        <select className='form--control' onChange={(e) => setTime(e.target.value)}>
                                            <option>Choose time</option>
                                            <option value="8PM">8 PM</option>
                                            <option value="9PM">9 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='location'>
                                    <p className='firstRow'>
                                        <span className='leftIcon'>
                                            <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.75 0C3.93066 0 0 3.93066 0 8.75C0 10.1035 0.553711 11.5869 1.31934 13.1523C2.08496 14.7246 3.08301 16.3652 4.08789 17.8623C6.08399 20.8633 8.07324 23.3037 8.07324 23.3037L8.75 24.1377L9.42676 23.3037C9.42676 23.3037 11.416 20.8633 13.4189 17.8623C14.417 16.3652 15.415 14.7246 16.1807 13.1523C16.9463 11.5869 17.5 10.1035 17.5 8.75C17.5 3.93066 13.5693 0 8.75 0ZM8.75 1.75C12.626 1.75 15.75 4.87402 15.75 8.75C15.75 9.57031 15.3193 10.9307 14.6084 12.3867C13.8975 13.8496 12.9268 15.4355 11.9629 16.8984C10.3564 19.3047 9.2627 20.6309 8.75 21.2734C8.2373 20.6309 7.14355 19.3047 5.53711 16.8984C4.57324 15.4355 3.60254 13.8496 2.8916 12.3867C2.18067 10.9307 1.75 9.57031 1.75 8.75C1.75 4.87402 4.87402 1.75 8.75 1.75ZM8.75 7C7.78613 7 7 7.78613 7 8.75C7 9.71387 7.78613 10.5 8.75 10.5C9.71387 10.5 10.5 9.71387 10.5 8.75C10.5 7.78613 9.71387 7 8.75 7Z" fill="#FE0435" />
                                            </svg>
                                        </span>
                                        <div className='locationAdd'>
                                            <span>Fastfood Elephant Castle</span>
                                            <span>Lorem Ipsum Address comes here</span>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div className='card-block'>
                                <div className='formWidth'>
                                    <div className='form--item'>
                                        <label className='form--label'>Mobile Number</label>
                                        <input className='form--control' type="text" placeholder='' onChange={e => setMobile(e.target.value)} />
                                    </div>
                                    <div className='form--item'>
                                        <p>Lorem ipsum address come here</p>
                                    </div>
                                    <div className='form--item mt--44'>
                                        <h6 className='formSubTitle'>Payment</h6>
                                    </div>
                                    <div className='form--item'>
                                        <label className='form--label'>Card number</label>
                                        <input className='form--control' maxLength="16" type="text" placeholder='1234 1234 1234 1234' onChange={e => setCardNumber(e.target.value)} />
                                    </div>
                                    <div className='gridBlogTwo'>
                                        <div className='form--item'>
                                            <label className='form--label'>Expires on</label>
                                            <input className='form--control' type="text" placeholder='MM/YY' maxLength='5' onKeyUp={(event) => formatString(event)} />
                                        </div>
                                        <div className='form--item'>
                                            <label className='form--label'>Card CVV</label>
                                            <input className='form--control' type="text" maxLength="3" placeholder='CVV' onChange={e => setCvv(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='form--item form--item--checkbox'>
                                        <input type="checkbox" id="keptsigned" onChange={(e) => setSaveCard(e.target.checked)} />
                                        <label htmlFor='keptsigned'>Save card details</label>
                                    </div>
                                    <div className='form--item'>
                                        <p>Payment will be taken immediately</p>
                                    </div>
                                    {/* <Link href="/checkout"> */}
                                    {/* <button type='submit' className='btn btnRed'>
                                        Place Order($200)
                                    </button> */}
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div className='card-block'>
                                <div className='form--item'>
                                    <h6 className='formSubTitle'>Order Summary</h6>
                                </div>
                                
                                <div className='orderSummery'>
                                    <div className='item--list'>
                                    {checkoutCart && checkoutCart.length > 0 &&
                                    checkoutCart.map((data) => {
                                        console.log(data)
                                        return(
 
                                        <div className='repeatSummery'>
                                            <p>{data.name}</p>
                                            <p>${data.total_price}</p>
                                            
                                        </div>
                                        )
                                    })}
                                        {/* <div className='repeatSummery'>
                                            <p>Latte (Regular)</p>
                                            <p>$100.0</p>
                                        </div>
                                        <div className='repeatSummery'>
                                            <p>Latte (Regular)</p>
                                            <p>$100.0</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='total repeatSummery'>
                                    <p>Total</p>
                                    <p>${finalPrice}</p>
                                </div>
                                <button type='submit' className='btn btnRed'>
                                    Place Order(${finalPrice})
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

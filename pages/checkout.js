import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header/Header';

export default function Checkout() {
    useEffect(() => {
        document.body.classList.add('checkout__page');
        document.body.classList.remove('login__form');
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("cart__page");
        document.body.classList.remove("rest__pages");
    })
    return (
        <React.Fragment>
            {/* Header */}
            <Header />

            {/* Order Detail */}
            <div className='orderCheckout'>
                <div className='successIcon'>
                    <Image src="/images/success_icon.svg" alt="image" layout='fill' quality={100} />
                </div>
                <h4 className='font-25 successMsg'>
                    Your Order Has been Placed successfully
                </h4>
                <div className='orderDetail'>
                    <div className='card-block'>
                        <ul>
                            <li className='orderId'>Order #121</li>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='fontBold'>Order time</span>
                                    <span className='fontNormal'>23rd Mar 2022 12:43 PM</span>
                                </p>
                                <p className='innerBlock'>
                                    <span className='fontBold'>Estimate time</span>
                                    <span className='fontNormal'>45 Mins</span>
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='fontBold'>Chicken Butterfly</span>
                                    <span className='fontNormal'>$8.25</span>
                                </p>
                                <p className='innerBlock'>
                                    <span className='fontNormal'>Extra Hot</span>
                                </p>
                            </li>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='fontBold'>Sunset Burger</span>
                                    <span className='fontNormal'>$8.25</span>
                                </p>
                                <p className='innerBlock'>
                                    <span className='fontNormal'>Extra Hot, No Cheese</span>
                                </p>
                                <p className='innerBlock'>
                                    <span className='fontBold'>Coca-Cola Classic 330ml</span>
                                    <span className='fontNormal'>$1.75</span>
                                </p>
                            </li>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='fontBold'>Sunset Burger</span>
                                    <span className='fontNormal'>$8.25</span>
                                </p>
                                <p className='innerBlock'>
                                    <span className='fontNormal'>Extra Hot, No Cheese</span>
                                </p>
                                <p className='innerBlock'>
                                    <span className='fontBold'>Coca-Cola Classic 330ml</span>
                                    <span className='fontNormal'>$1.75</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <p className='instructions'>
                        You can check your order progress in our panel also or visit my orders section under your profile
                    </p>
                    <div className='myOrders'>
                        <Link href="/userProfile/my-orders">
                            <a className='btnRed btn'>My orders</a>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
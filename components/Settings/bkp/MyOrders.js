import React from 'react'
import Link from 'next/link'


export default function MyOrders() {
    return(
        <React.Fragment>
            <div className='orderDetail'>
                <div className='card-block'>
                    <ul>
                        <li className='orderId'>Order #121</li>
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
            </div>
        </React.Fragment>
    )
}
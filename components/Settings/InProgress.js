import React from 'react'
import Link from 'next/link'
export default function InProgress() {
  return (
    <React.Fragment>
            <div className='orderDetail hasBorder'>
                <div className='card-block-hasBg'>
                    <h4 className='progressTitle'>In Progress (1)</h4>
                    <div className='card-block haNoBorder'>
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
                <div className='card-block-hasBg'>
                    <h4 className='progressTitle'>Ready for Pickup (1)</h4>
                    <div className='card-block haNoBorder'>
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
            </div>
        </React.Fragment>
  )
}

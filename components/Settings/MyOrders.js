import React from 'react'
import Link from 'next/link'


export default function MyOrders() {
    return (
        <React.Fragment>
            <div className='orderDetail hasBorder'>
                <div className='card-block order--ready'>
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
                    <div className='orderBtn'>
                        <Link href="#">
                            <a className='btn btnFullW'>
                                Ready for pickup
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='btn btnFullW black'>
                                <span>
                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.38462 0.391113V8.62486H2.53846C1.01803 8.62486 0 9.63602 0 11.1462V17.8698C0 19.38 1.01803 20.3911 2.53846 20.3911H19.4615C20.982 20.3911 22 19.38 22 17.8698V11.1462C22 9.63602 20.982 8.62486 19.4615 8.62486H18.6154V0.391113L16.0769 1.90129L14.3846 0.890128L12.6923 1.90129L11 0.890128L9.30769 1.90129L7.61538 0.890128L5.92308 1.90129L3.38462 0.391113ZM7.61538 2.91245L9.30769 3.91705L11 2.91245L12.6923 3.91705L14.3846 2.91245L16.0769 3.91705L16.9231 3.41147V11.9866H5.07692V3.41147L5.92308 3.91705L7.61538 2.91245ZM2.53846 10.3058H3.38462V13.6675H18.6154V10.3058H19.4615C19.9706 10.3058 20.3077 10.6406 20.3077 11.1462V17.8698C20.3077 18.3754 19.9706 18.7102 19.4615 18.7102H2.53846C2.02945 18.7102 1.69231 18.3754 1.69231 17.8698V11.1462C1.69231 10.6406 2.02945 10.3058 2.53846 10.3058ZM5.07692 15.3484V17.0293H6.76923V15.3484H5.07692ZM8.46154 15.3484V17.0293H10.1538V15.3484H8.46154ZM11.8462 15.3484V17.0293H13.5385V15.3484H11.8462ZM15.2308 15.3484V17.0293H16.9231V15.3484H15.2308Z" fill="white" />
                                    </svg>
                                </span>
                                Print Invoice
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='card-block order--processing'>
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
                    <div className='orderBtn'>
                        <Link href="#">
                            <a className='btn btnFullW'>
                            Processing
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='btn btnFullW black'>
                                <span>
                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.38462 0.391113V8.62486H2.53846C1.01803 8.62486 0 9.63602 0 11.1462V17.8698C0 19.38 1.01803 20.3911 2.53846 20.3911H19.4615C20.982 20.3911 22 19.38 22 17.8698V11.1462C22 9.63602 20.982 8.62486 19.4615 8.62486H18.6154V0.391113L16.0769 1.90129L14.3846 0.890128L12.6923 1.90129L11 0.890128L9.30769 1.90129L7.61538 0.890128L5.92308 1.90129L3.38462 0.391113ZM7.61538 2.91245L9.30769 3.91705L11 2.91245L12.6923 3.91705L14.3846 2.91245L16.0769 3.91705L16.9231 3.41147V11.9866H5.07692V3.41147L5.92308 3.91705L7.61538 2.91245ZM2.53846 10.3058H3.38462V13.6675H18.6154V10.3058H19.4615C19.9706 10.3058 20.3077 10.6406 20.3077 11.1462V17.8698C20.3077 18.3754 19.9706 18.7102 19.4615 18.7102H2.53846C2.02945 18.7102 1.69231 18.3754 1.69231 17.8698V11.1462C1.69231 10.6406 2.02945 10.3058 2.53846 10.3058ZM5.07692 15.3484V17.0293H6.76923V15.3484H5.07692ZM8.46154 15.3484V17.0293H10.1538V15.3484H8.46154ZM11.8462 15.3484V17.0293H13.5385V15.3484H11.8462ZM15.2308 15.3484V17.0293H16.9231V15.3484H15.2308Z" fill="white" />
                                    </svg>
                                </span>
                                Print Invoice
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='card-block order--delayed'>
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
                    <div className='orderBtn'>
                        <Link href="#">
                            <a className='btn btnFullW'>
                            Order Delayed
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='btn btnFullW black'>
                                <span>
                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.38462 0.391113V8.62486H2.53846C1.01803 8.62486 0 9.63602 0 11.1462V17.8698C0 19.38 1.01803 20.3911 2.53846 20.3911H19.4615C20.982 20.3911 22 19.38 22 17.8698V11.1462C22 9.63602 20.982 8.62486 19.4615 8.62486H18.6154V0.391113L16.0769 1.90129L14.3846 0.890128L12.6923 1.90129L11 0.890128L9.30769 1.90129L7.61538 0.890128L5.92308 1.90129L3.38462 0.391113ZM7.61538 2.91245L9.30769 3.91705L11 2.91245L12.6923 3.91705L14.3846 2.91245L16.0769 3.91705L16.9231 3.41147V11.9866H5.07692V3.41147L5.92308 3.91705L7.61538 2.91245ZM2.53846 10.3058H3.38462V13.6675H18.6154V10.3058H19.4615C19.9706 10.3058 20.3077 10.6406 20.3077 11.1462V17.8698C20.3077 18.3754 19.9706 18.7102 19.4615 18.7102H2.53846C2.02945 18.7102 1.69231 18.3754 1.69231 17.8698V11.1462C1.69231 10.6406 2.02945 10.3058 2.53846 10.3058ZM5.07692 15.3484V17.0293H6.76923V15.3484H5.07692ZM8.46154 15.3484V17.0293H10.1538V15.3484H8.46154ZM11.8462 15.3484V17.0293H13.5385V15.3484H11.8462ZM15.2308 15.3484V17.0293H16.9231V15.3484H15.2308Z" fill="white" />
                                    </svg>
                                </span>
                                Print Invoice
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='card-block order--accepted'>
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
                    <div className='orderBtn'>
                        <Link href="#">
                            <a className='btn btnFullW'>
                            Order Accepted
                            </a>
                        </Link>
                        <Link href="#">
                            <a className='btn btnFullW black'>
                                <span>
                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.38462 0.391113V8.62486H2.53846C1.01803 8.62486 0 9.63602 0 11.1462V17.8698C0 19.38 1.01803 20.3911 2.53846 20.3911H19.4615C20.982 20.3911 22 19.38 22 17.8698V11.1462C22 9.63602 20.982 8.62486 19.4615 8.62486H18.6154V0.391113L16.0769 1.90129L14.3846 0.890128L12.6923 1.90129L11 0.890128L9.30769 1.90129L7.61538 0.890128L5.92308 1.90129L3.38462 0.391113ZM7.61538 2.91245L9.30769 3.91705L11 2.91245L12.6923 3.91705L14.3846 2.91245L16.0769 3.91705L16.9231 3.41147V11.9866H5.07692V3.41147L5.92308 3.91705L7.61538 2.91245ZM2.53846 10.3058H3.38462V13.6675H18.6154V10.3058H19.4615C19.9706 10.3058 20.3077 10.6406 20.3077 11.1462V17.8698C20.3077 18.3754 19.9706 18.7102 19.4615 18.7102H2.53846C2.02945 18.7102 1.69231 18.3754 1.69231 17.8698V11.1462C1.69231 10.6406 2.02945 10.3058 2.53846 10.3058ZM5.07692 15.3484V17.0293H6.76923V15.3484H5.07692ZM8.46154 15.3484V17.0293H10.1538V15.3484H8.46154ZM11.8462 15.3484V17.0293H13.5385V15.3484H11.8462ZM15.2308 15.3484V17.0293H16.9231V15.3484H15.2308Z" fill="white" />
                                    </svg>
                                </span>
                                Print Invoice
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
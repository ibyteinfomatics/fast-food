import React from 'react'
import Link from 'next/link'

export default function OrderDetails() {
    return (

        <React.Fragment>
            <div className='orderDetail hasBorder'>
                <div className='invoiceColLeft'>
                    <div className='card-block'>
                        <ul>
                            <li className='orderId'>
                                <p className='innerBlock'>
                                    <span className='fontBold'> Order #121</span>
                                    <span className='fontBold'>45 mins</span>
                                </p>
                            </li>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='prdctTitle'>Name</span>
                                    <span className='prdctDes'>Username</span>
                                </p>
                            </li>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='prdctTitle'>Ammount</span>
                                    <span className='prdctDes'>$1.00</span>
                                </p>
                            </li>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='prdctTitle'>Placed at</span>
                                    <span className='prdctDes'>12 March 09:00 AM</span>
                                </p>
                            </li>
                            <li className='orderNm'>
                                <p className='innerBlock'>
                                    <span className='prdctTitle'>Delivery time</span>
                                    <span className='prdctDes'>12 March 09:45 AM</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='card-block'>
                        <table>
                            <tr>
                                <th>Items</th>
                                <th>Options</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total Price</th>
                            </tr>
                            <tr>
                                <td>Chicken Burger</td>
                                <td>Extra hot</td>
                                <td>2</td>
                                <td>$8.55</td>
                                <td>$17.1</td>
                            </tr>
                            <tr>
                                <td>Coca -  Cola Classic 300 ml</td>
                                <td></td>
                                <td>1</td>
                                <td>$1.25</td>
                                <td>$1.25</td>
                            </tr>
                            <tr>
                                <td colSpan="5" className='total'>
                                    <div className='subTotal'>
                                        <span>Sub Total</span>
                                        <span>$1.00</span>
                                    </div>
                                    <div className='subTotal'>
                                        <span>Service fee</span>
                                        <span>$1.00</span>
                                    </div>
                                    <div className='subTotal'>
                                        <span>Total Paid Online</span>
                                        <span>$1.00</span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

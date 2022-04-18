import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header/Header'
import { Cartlists } from './api/Cartlists'

export default function CartView() {
    useEffect(() => {
        document.body.classList.add("cart__page");
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove('login__form');
    })
    const listLength = Cartlists.length;
    console.log(listLength);
    return(
        <React.Fragment>
            {/* Header */}
            <Header />

            {/* Cart view */}
            <div className='cart__wrapper'>
                <div className='notlogged--in'>
                    <span>
                        <p>Please sign in to continue to checkout</p>
                        <Link href="/login">
                            <a className='btnRed btn'>Sign In</a>
                        </Link>
                    </span>
                </div>
                <div className='cart--table'>
                    {listLength != 0 ?
                    <table>
                        <tr>
                            <th>Item</th>
                            <th></th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        {Cartlists.map((data, index) =>{
                            return(                                
                            <tr key={index}>
                                <td>
                                    <div className='cart__info'>
                                        {data.image &&
                                        <div className='cart__image'>
                                            <Image src={data.image} alt="item image" layout="fill" quality={100} />
                                        </div>
                                        }
                                        {data.title &&
                                        <div className='cart__title'>
                                            <h3>{data.title}</h3>
                                        </div>
                                        }
                                    </div>
                                    {data.cartOffers &&
                                    <div className='cart__offers'>
                                        <form>
                                            <ul>
                                                <li>
                                                    <div className='offer__select'>
                                                        <input type="checkbox" name="offerList" value="" id={data.labelId1} />
                                                        <label htmlFor={data.labelId1}>
                                                            <span className='remove__offer'>
                                                                <Image src="/images/remove-offer--icon.svg" alt="remove item" layout="fill" quality={100} />
                                                            </span>
                                                            <span className='add__offer'>
                                                                <Image src="/images/add-offer--icon.svg" alt="add item" layout="fill" quality={100} />
                                                            </span>
                                                            <span className='offer__title'>{data.cartOffer}</span>
                                                            <span className='offer__price'><span>$ {data.offerItemPrice}</span> $ {data.offerPrice}</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                {data.cartOffers2 &&
                                                <li>
                                                    <div className='offer__select'>
                                                        <input type="checkbox" name="offerList" value="" id={data.labelId2} />
                                                        <label htmlFor={data.labelId2}>
                                                            <span className='remove__offer'>
                                                                <Image src="/images/remove-offer--icon.svg" alt="remove-item" layout="fill" quality={100} />
                                                            </span>
                                                            <span className='add__offer'>
                                                                <Image src="/images/add-offer--icon.svg" alt="add item" layout="fill" quality={100} />
                                                            </span>
                                                            <span className='offer__title'>{data.cartOffer2}</span>
                                                            <span className='offer__price'><span>$ {data.offerItemPrice2}</span> $ {data.offerPrice}</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                }
                                            </ul>
                                        </form>
                                    </div>
                                    }
                                </td>
                                <td>
                                    <div className='cart__actions'>
                                        <Link href="#">
                                            <a><Image src="/images/edit-icon--black.svg" alt="edit" layout='fill' quality={100} /></a>
                                        </Link>
                                        <Link href="#">
                                            <a><Image src="/images/bin-icon.svg" alt="delete" layout='fill' quality={100} /></a>
                                        </Link>
                                        <Link href="#">
                                            <a><Image src="/images/add-item-icon.svg" alt="add item" layout='fill' quality={100} /></a>
                                        </Link>
                                    </div>
                                </td>
                                <td className='site_font--700'>{data.quantity}</td>
                                <td>$ {data.price}</td>
                            </tr>
                            );
                        })}
                        <tr>
                            <td colSpan='4'>
                                <div className='cart--subtotal'>
                                    <span>Sub Total</span>
                                    <span>$20</span>
                                </div>
                                <div className='cart--subtotal'>
                                    <span>Service fee</span>
                                    <span>$3</span>
                                </div>
                                <div className='cart--subtotal'>
                                    <span>Total</span>
                                    <span>$23</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                    :
                    <p>No item selected Yet</p>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
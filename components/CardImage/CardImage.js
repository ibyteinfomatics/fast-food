import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CardImage(props) {
    return (
        <React.Fragment>                        
            <div className='cardBlock'>
                <div className='cardBlock__wrapper'>
                    {props.cardImg &&
                    <div className='cardImg'>
                        <Image src={props.cardImg} alt='Food Product Image' layout='fill' quality={100} />
                    </div>
                    }
                    <div className='card--img--detail'>
                        <div className='flexBlockTwo'>
                            {props.cardTitleLink ?
                            <Link href={props.cardTitleLink}>
                                <a>
                                    <h4 className='name font-18'>{props.cardTitle}</h4>
                                </a>
                            </Link>
                            :
                            <Link href="#">
                                <a>
                                    <h4 className='name font-18'>{props.cardTitle}</h4>
                                </a>
                            </Link>
                            }
                            {props.cardPrice &&
                            <h4 className='price font-20'>{props.cardPrice}</h4>
                            }
                        </div>
                    </div>
                </div>
                {props.cardDesc &&
                <div className='card--img--desc'>
                    <p className='mt-16'>{props.cardDesc}</p>
                </div>
                }
            </div>
        </React.Fragment>
    )
}

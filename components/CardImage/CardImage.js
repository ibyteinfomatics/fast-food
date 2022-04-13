import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function CardImage(props) {
    
    const router = useRouter();
    
    return (
        <React.Fragment>                        
            <div className='cardBlock'>            
                {router.pathname == '/page-4' &&
                    <Link href="/page-5"><a className='card__link cardLink'></a></Link>
                }
                {router.pathname == '/page-5' &&
                    <Link href="/step-1"><a className='card__link cardStepLink'></a></Link>
                }
                <div className='cardBlock__wrapper'>
                    {props.cardImg &&
                    <div className='cardImg'>
                        <Image src={props.cardImg} alt='Food Product Image' layout='fill' quality={100} />
                    </div>
                    }
                    <div className='card--img--detail'>
                        <div className='flexBlockTwo'>
                            {props.cardTitle &&
                            <h4 className='name font-18'>{props.cardTitle}</h4>
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

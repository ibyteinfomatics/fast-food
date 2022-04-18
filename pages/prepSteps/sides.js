import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header/Header'
import CardImage from '../../components/CardImage/CardImage'
import { Sidelist } from '../api/Sideslist'
import { faCropSimple } from '@fortawesome/free-solid-svg-icons'

export default function Sides() {
    useEffect(() => {
        document.body.classList.add("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
    })
    return (
        <React.Fragment>
            <Header />
            <div className='siteWidth heatPage'>
                <div className='bgGray'>
                    <div className='stepGridTwo bgGrey'>
                        <div className='stepLeftData'>
                            <CardImage
                                cardImg="/images/bg.png"
                                cardTitle="Sunset Burgers"
                                cardPrice="$8.25"
                                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                            />
                        </div>
                        <div className='stepRightData bgWhite'>
                            <h4 className='step--title'>Sides</h4>
                            <p className='textGray'></p>

                            <div className='stepSelection'>
                                <form>
                                    <ul>
                                    {/* {
                                        Object.keys(obj).map( (index,value) => {
                                            obj[index].title
                                        })
                                    }
                                    {console.log(Sidelist)} */}
                                    {Sidelist.map((data, index) => {
                                        console.log(data);
                                        return(
                                            <li key={index}>
                                                <div className='form--item'>
                                                    <input type="radio" id={data.inputId} name="sides" />
                                                    <label htmlFor={data.inputId}>
                                                        <span className='side__image'>
                                                            <Image src={data.image} alt="side image" width="215" height="195" />
                                                        </span>
                                                        <span className='side__header'>
                                                            <h3>{data.title}</h3>
                                                            <p>{data.subtitle}</p>
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                        );
                                    })}
                                    </ul>
                                </form>
                            </div>

                            <div className='btnBlack rightBtn'>
                                <Link href="#">
                                <a className='btn'>Update Meal</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

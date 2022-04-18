import React, {useEffect} from 'react'
import Link from 'next/link'
import Header from '../../components/Header/Header'
import CardImage from '../../components/CardImage/CardImage'
import Image from 'next/image'

export default function Yourselection() {
    useEffect(() => {
        document.body.classList.add("steps");
        document.body.classList.add("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove('login__form');
    })

    return (
        <React.Fragment>

            {/* Header */}
            <Header />

            <div className='siteWidth'>
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
                            <div className='chooseList'>
                                <div className='optionRow'>
                                    <h4 className='step--title'>Build your burger</h4>
                                    <div className='selection-list'>
                                        <div className='list--img'>
                                            <Image src="/images/bg.png" alt="image" layout='fill' quality={100} />
                                        </div>
                                        <div className='list--options'>
                                            <span className='opt-title'>Plain, No Cheese</span>
                                            <span className='opt-edit'>
                                                <Link href="/prepSteps/step1-selection">
                                                    <a><Image src="/images/edit-icon.svg" alt="image" layout='fill' quality={100} /></a>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='optionRow'>
                                    <h4 className='step--title'>Sides</h4>
                                    <div className='selection-list'>
                                        <div className='list--img'>
                                            <Image src="/images/chips.png" alt="image" layout='fill' quality={100} />
                                        </div>
                                        <div className='list--options'>
                                            <span className='opt-title'>Regular Chips</span>
                                            <span className='opt-edit'>
                                                <Link href="/prepSteps/sides">
                                                    <a><Image src="/images/edit-icon.svg" alt="image" layout='fill' quality={100} /></a>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='selection-list'>
                                        <div className='list--img'>
                                            <Image src="/images/chips.png" alt="image" layout='fill' quality={100} />
                                        </div>
                                        <div className='list--options'>
                                            <span className='opt-title'>Regular Chips</span>
                                            <span className='opt-edit'>
                                                <Link href="/prepSteps/sides">
                                                    <a><Image src="/images/edit-icon.svg" alt="image" layout='fill' quality={100} /></a>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='pageWrapper'>
                <div className='siteWidth'>
                    <div className='contentWrapper'>
                        <div className='bgGray'>
                            <div className='stepGridTwo'>
                                <StepLeftBlock />
                                <div className='stepRightData bgWhite'>
                                    <div className='chooseList'>
                                        <div className='optionRow'>
                                            <h4 className='font-26'>Build your burger</h4>
                                            <div className='optionTitle'>
                                                <Link href="#">
                                                    <a>
                                                        <h4>Choose your heat & extras</h4>
                                                        <p className='addIcon'>
                                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M21 0.6875C9.80615 0.6875 0.6875 9.80615 0.6875 21C0.6875 32.1938 9.80615 41.3125 21 41.3125C32.1938 41.3125 41.3125 32.1938 41.3125 21C41.3125 9.80615 32.1938 0.6875 21 0.6875ZM21 3.8125C30.5093 3.8125 38.1875 11.4907 38.1875 21C38.1875 30.5093 30.5093 38.1875 21 38.1875C11.4907 38.1875 3.8125 30.5093 3.8125 21C3.8125 11.4907 11.4907 3.8125 21 3.8125ZM19.4375 13.1875V19.4375H13.1875V22.5625H19.4375V28.8125H22.5625V22.5625H28.8125V19.4375H22.5625V13.1875H19.4375Z" fill="#FE0435" />
                                                            </svg>
                                                        </p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='optionRow'>
                                            <h4 className='font-26'>Select your sides</h4>
                                            <div className='optionTitle'>
                                                <Link href="#">
                                                    <a>
                                                        <h4>Choose a regular side</h4>
                                                        <p className='addIcon'>
                                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M21 0.6875C9.80615 0.6875 0.6875 9.80615 0.6875 21C0.6875 32.1938 9.80615 41.3125 21 41.3125C32.1938 41.3125 41.3125 32.1938 41.3125 21C41.3125 9.80615 32.1938 0.6875 21 0.6875ZM21 3.8125C30.5093 3.8125 38.1875 11.4907 38.1875 21C38.1875 30.5093 30.5093 38.1875 21 38.1875C11.4907 38.1875 3.8125 30.5093 3.8125 21C3.8125 11.4907 11.4907 3.8125 21 3.8125ZM19.4375 13.1875V19.4375H13.1875V22.5625H19.4375V28.8125H22.5625V22.5625H28.8125V19.4375H22.5625V13.1875H19.4375Z" fill="#FE0435" />
                                                            </svg>
                                                        </p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    )
}

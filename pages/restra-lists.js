import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header/Header'

export default function RestraLists() {
    useEffect(() =>{
        document.body.classList.add("home__page");
        document.body.classList.remove("steps");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove('login__form');
        document.body.classList.remove('cart__page');
        document.body.classList.remove('checkout__page');
    }, []);
    
    const [showMe, setShowMe] = useState(false);
    
    function toggle(){
        setShowMe(!showMe);
    }
    return (
        <React.Fragment>
            {/* Header */}
            <Header />

            {/* page content */}
            <div className='pageWrapper'>
                <div className='gridBlogTwo'>
                    <div className='gridCol'>
                        <h2 className='secTitle'>Click & Collect</h2>
                        <p className='colDesc'>
                            Have an allergy? Unfortunately, we can’t cater for allergens on Click & Collect - head to one of our restaurants to order.
                        </p>
                        <form className='searchForm'>
                            <div className='searchBox'>
                                <span className='leftIcon'>
                                    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0.75C4.18066 0.75 0.25 4.68066 0.25 9.5C0.25 10.8535 0.803711 12.3369 1.56934 13.9023C2.33496 15.4746 3.33301 17.1152 4.33789 18.6123C6.33399 21.6133 8.32324 24.0537 8.32324 24.0537L9 24.8877L9.67676 24.0537C9.67676 24.0537 11.666 21.6133 13.6689 18.6123C14.667 17.1152 15.665 15.4746 16.4307 13.9023C17.1963 12.3369 17.75 10.8535 17.75 9.5C17.75 4.68066 13.8193 0.75 9 0.75ZM9 2.5C12.876 2.5 16 5.62402 16 9.5C16 10.3203 15.5693 11.6807 14.8584 13.1367C14.1475 14.5996 13.1768 16.1855 12.2129 17.6484C10.6064 20.0547 9.5127 21.3809 9 22.0234C8.4873 21.3809 7.39355 20.0547 5.78711 17.6484C4.82324 16.1855 3.85254 14.5996 3.1416 13.1367C2.43067 11.6807 2 10.3203 2 9.5C2 5.62402 5.12402 2.5 9 2.5ZM9 7.75C8.03613 7.75 7.25 8.53613 7.25 9.5C7.25 10.4639 8.03613 11.25 9 11.25C9.96387 11.25 10.75 10.4639 10.75 9.5C10.75 8.53613 9.96387 7.75 9 7.75Z" fill="#FE0435" />
                                    </svg>
                                </span>
                                <input type="text" placeholder="Enter your postcode, address or city."  onClick={toggle}/>
                                <span className='rightIcon'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0.625C5.73145 0.625 0.625 5.73145 0.625 12C0.625 18.2686 5.73145 23.375 12 23.375C18.2686 23.375 23.375 18.2686 23.375 12C23.375 5.73145 18.2686 0.625 12 0.625ZM12 2.375C17.3252 2.375 21.625 6.6748 21.625 12C21.625 17.3252 17.3252 21.625 12 21.625C6.6748 21.625 2.375 17.3252 2.375 12C2.375 6.6748 6.6748 2.375 12 2.375ZM8.5 7.2627L7.2627 8.5L7.88477 9.11524L10.7627 12L7.88477 14.8848L7.2627 15.5L8.5 16.7373L9.11524 16.1152L12 13.2373L14.8848 16.1152L15.5 16.7373L16.7373 15.5L16.1152 14.8848L13.2373 12L16.1152 9.11524L16.7373 8.5L15.5 7.2627L14.8848 7.88477L12 10.7627L9.11524 7.88477L8.5 7.2627Z" fill="black" />
                                    </svg>
                                </span>
                            </div>
                            <div className='location__link'>
                                <Link href="#">
                                    <a>
                                        <span className='useLocation font-21'>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.25 0V3.54102C7.64258 3.96484 3.96484 7.64258 3.54102 12.25H0V14H3.54102C3.96484 18.6074 7.64258 22.2852 12.25 22.7021V26.25H14V22.7021C18.6074 22.2852 22.2852 18.6074 22.7021 14H26.25V12.25H22.7021C22.2852 7.64258 18.6074 3.96484 14 3.54102V0H12.25ZM13.125 5.25C17.4863 5.25 21 8.76367 21 13.125C21 17.4863 17.4863 21 13.125 21C8.76367 21 5.25 17.4863 5.25 13.125C5.25 8.76367 8.76367 5.25 13.125 5.25ZM13.125 10.5C11.6758 10.5 10.5 11.6758 10.5 13.125C10.5 14.5742 11.6758 15.75 13.125 15.75C14.5742 15.75 15.75 14.5742 15.75 13.125C15.75 11.6758 14.5742 10.5 13.125 10.5Z" fill="#181E27" />
                                        </svg>
                                        Use my location
                                        </span>
                                    </a>
                                </Link>
                            </div>
                            <ul className= {showMe?'searchList searchList_active':'searchList'}>
                                <li>
                                    <Link href="#">
                                        <a>SE1 0FH, London, England, United Kingdom</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>SE1 0FH, London, England, United Kingdom</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>SE1 0FH, London, England, United Kingdom</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>SE1 0FH, London, England, United Kingdom</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>SE1 0FH, London, England, United Kingdom</a>
                                    </Link>
                                </li>
                            </ul>
                        </form>
                        <div className='search__detail--lists'>
                            <div className='restroDetail'>
                                <div className='restroGroup'>
                                    <div className='colLeft'>
                                        <div className='prdtImg'>   
                                            <Image src='/images/rec_burger.jpg' alt='Food Image' layout="fill" quality={100} />
                                        </div>
                                    </div>
                                    <div className='colMid productDes'>
                                        <div className='flexBlockTwo'>
                                            <h4 className='font-18 prdtNm'>
                                                Fastfood Elephant & Castle
                                                <span className='orderAdd'>#123, Lorem ipsum address comes here</span>
                                            </h4>
                                            <p>
                                                0.3 mi. away
                                            </p>
                                        </div>
                                        <div className='flexBlockTwo'>
                                            <div className='flexBlockLeft'>
                                                <Link href="/restra--menus">
                                                    <a className='collect'>Click & Collect</a>
                                                </Link>
                                                <p className='openStatus'>
                                                    <span className='open'>Open• </span><span className='time'>11:30 - 22:05</span>
                                                </p>
                                            </div>
                                            <div className='orderStatus'>
                                                <Link href="/restra--menus">
                                                    <a className='btnRed btn'>Order Online</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='restroDetail'>
                                <div className='restroGroup'>
                                    <div className='colLeft'>
                                        <div className='prdtImg'>
                                            <Image src='/images/rec_burger.jpg' alt='Food Image' layout="fill" quality={100} />
                                        </div>
                                    </div>
                                    <div className='colMid productDes'>
                                        <div className='flexBlockTwo'>
                                            <h4 className='font-18 prdtNm'>
                                                Fastfood Elephant & Castle
                                                <span className='orderAdd'>#123, Lorem ipsum address comes here</span>
                                            </h4>
                                            <p>
                                                0.3 mi. away
                                            </p>
                                        </div>
                                        <div className='flexBlockTwo'>
                                            <div className='flexBlockLeft'>
                                                <Link href="/restra--menus">
                                                    <a className='collect'>Click & Collect</a>
                                                </Link>
                                                <p className='openStatus'>
                                                    <span className='close'>Currently Unavailable</span>
                                                </p>
                                            </div>
                                            <div className='orderStatus'>
                                                <Link href="/restra--menus">
                                                    <a className='btnRed btn'>Order Online</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

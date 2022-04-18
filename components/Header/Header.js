// import { elastic as Menu } from 'react-burger-menu'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from "react"
import { useRouter } from "next/router";
export default function Header(){

    const router = useRouter();
    const rout = router.pathname.split("/");
    const route = rout[1];
    
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
    // console.log(router)

    return(
        <React.Fragment>
            <div className="desktop__header header__wrapper">
                {route != "prepSteps" &&
                
                <div className="header__wrap--inner">
                    <div className="header__left">
                        <div className="site__logo">
                            <Link href="/">
                                <a className="logo__link">
                                    <Image src="/images/logo.svg" alt="Fast Food Logo" layout="fill" quality={100} />
                                </a>
                            </Link>
                        </div>
                        <div className='restra__name--links'>
                            <p>
                                <Link href="/restra-lists"><a><span className="map_icon"><Image src="/images/map-pin.svg" alt="Map Pin Icon" layout="fill" quality={100} /></span>
                                Fastfood Elephant Cas..</a></Link>
                            </p>
                        </div>
                    </div>
                    <div className="header__right">
                        <nav className="site__navigation">
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>Login</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                }

                {route == 'restraMenus' &&

                <div className='header__wrap--inner restra__menu'>
                    <ul>
                        <li className='burgur__icon'>
                            <Link href="/restra--menus">
                                <a></a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'burgers--wraps' ? "active__link" : ""}>
                            <Link href="/restraMenus/burgers--wraps">
                                <a>Burgers & Wraps</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'starters' ? "active__link" : ""}>
                            <Link href="/restraMenus/starters">
                                <a>Starters</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'chickens' ? "active__link" : ""}>
                            <Link href="#">
                                <a>Chickens</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'salads' ? "active__link" : ""}>
                            <Link href="#">
                                <a>Salads</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'platters' ? "active__link" : ""}>
                            <Link href="#">
                                <a>Platters</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'veggie' ? "active__link" : ""}>
                            <Link href="#">
                                <a>Veggie</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'for-kids' ? "active__link" : ""}>
                            <Link href="#">
                                <a>For Kids</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'sides--extras' ? "active__link" : ""}>
                            <Link href="#">
                                <a>Sides & Extras</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'drinks' ? "active__link" : ""}>
                            <Link href="#">
                                <a>Drinks</a>
                            </Link>
                        </li>
                        <li className={rout[2] == 'desserts' ? "active__link" : ""}>
                            <Link href="#">
                                <a>Desserts</a>
                            </Link>
                        </li>
                    </ul>
                    <div className='menu__srch'>
                        <Link href="#">
                            <a className='btnRed btn'>Search</a>
                        </Link>
                    </div>
                </div>

                }

                {route == 'prepSteps' && 
                <div className='header__wrap--inner prepSteps'>
                    <ul>
                        <li>
                            <Link href="/restra--menus">
                                <a className='back--menu--icon'></a>
                            </Link>
                        </li>
                        <li>Burgers & Wraps</li>
                    </ul>
                    <div className='add--order'>
                        <Link href="/cart">
                            <a className='btnRed btn'>Add to Order</a>
                        </Link>
                    </div>
                </div>
                }
            </div>

            {/* Mobile Header Wrapper */}
            {/* <div className="mobile__header header__wrapper">
                <div className="header__wrap--inner">
                    <div className="header__left">
                        <div className="site__logo">
                            <Link href="/">
                                <a className="logo__link">
                                    <Image src="/images/logo.svg" alt="Fast Food Logo" layout="fill" quality={100} />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <Menu right>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>Login</a>
                                    </Link>
                                </li>
                            </ul>
                        </Menu>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    )
}
// import { elastic as Menu } from 'react-burger-menu'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from "react"
import { useRouter } from "next/router";
export default function Header(){

    const router = useRouter();
    
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }

    return(
        <React.Fragment>
            <div className="desktop__header header__wrapper">
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
                            <p onClick={toggle}>
                                <span className="map_icon"><Image src="/images/map-pin.svg" alt="Map Pin Icon" layout="fill" quality={100} /></span>
                                Fastfood Elephant Cas..
                            </p>
                            <ul className={showMe ? 'restra__name--lists restra__name--lists--active' : 'restra__name--lists'}>
                                <li>
                                    <Link href="#"><a>Restraurent 1</a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a>Restraurent 2</a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a>Restraurent 3</a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a>Restraurent 4</a></Link>
                                </li>
                            </ul>
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
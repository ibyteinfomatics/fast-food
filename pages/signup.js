import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SignUp() {
    useEffect(() => {
        document.body.classList.add('login__form');
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("rest__pages");
    })
    return (
        <React.Fragment>
            <div className='user__form'>
                <div className='form__title'>
                <Link href="/">
                    <a>
                    <div className='site__logo'>
                        <Image src="/images/logo.svg" alt="logo" layout='fill' quality={100} />
                    </div>
                    </a>
                </Link>
                </div>
                <form>
                    <div className='form--item'>
                        <label className='form--label' htmlFor='username'>Username</label>
                        <input className='form--control' type="text" id="username" />
                        <span className='form--icon'><Image src="/images/user-icon-red.svg" alt="form icon" layout="fill" quality={100} /></span>
                    </div>
                    <div className='form--item'>
                        <label className='form--label' htmlFor='email'>Email</label>
                        <input className='form--control' type="email" id="email" />
                        <span className='form--icon'><Image src="/images/envelope-icon-red.svg" alt="form icon" layout="fill" quality={100} /></span>
                    </div>
                    <div className='form--item'>
                        <label className='form--label' htmlFor='pwd'>Password</label>
                        <input className='form--control' type="password" id="pwd" />
                        <span className='form--icon'><Image src="/images/key-icon-red.svg" alt="form icon" layout="fill" quality={100} /></span>
                    </div>
                    <div className='form--item'>
                        <label className='form--label' htmlFor='cnfpwd'>Confirm Password</label>
                        <input className='form--control' type="password" id="cnfpwd" />
                        <span className='form--icon'><Image src="/images/key-icon-red.svg" alt="form icon" layout="fill" quality={100} /></span>
                    </div>
                    <div className='form--actions'>
                        <button className='btn btnBlack' type="submit">Signup</button>
                    </div>
                    <div className='form--link--desc'>
                        <p>Already have an account? <Link href="/login"><a>Sign in</a></Link></p>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
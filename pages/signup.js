import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SignUp() {
    useEffect(() => {
        document.body.classList.add('signup__form')
        document.body.classList.remove('login__form')
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
                    </div>
                    <div className='form--item'>
                        <label className='form--label' htmlFor='email'>Email</label>
                        <input className='form--control' type="email" id="email" />
                    </div>
                    <div className='form--item'>
                        <label className='form--label' htmlFor='pwd'>Password</label>
                        <input className='form--control' type="password" id="pwd" />
                    </div>
                    <div className='form--item'>
                        <label className='form--label' htmlFor='cnfpwd'>Password</label>
                        <input className='form--control' type="password" id="cnfpwd" />
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
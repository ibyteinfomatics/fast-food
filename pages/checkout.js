import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Checkout() {
    useEffect(() => {
        document.body.classList.add('checkout__page');
        document.body.classList.remove('login__form');
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("cart__page");
        document.body.classList.remove("rest__pages");
    })
    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}
import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import OrderDetails from '../../components/Settings/OrderDetails'

export default function OrderDetailsPage() {
    useEffect(() => {
        document.body.classList.add('profile__pages');
        document.body.classList.remove('checkout__page');
        document.body.classList.remove('login__form');
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("cart__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove("progress__page");
    })
    return (
        <React.Fragment>
            <Header />
            <div className='settingPageALign siteWidth'>
                <div className="sideBarContent orderInvoicePage">
                    <OrderDetails />
                </div>
            </div>
        </React.Fragment>
    )
}

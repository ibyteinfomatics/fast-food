import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import MyOrders from '../../components/Settings/MyOrders';
import UserSidebar from '../../components/Settings/UserSidebar';

export default function OrdersPage() {
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
            {/* Header */}
            <Header />

            {/* Profile pages */}
            <div className='settingPageALign siteWidth'>
                {/* User Sidebar */}
                <UserSidebar />

                <div className="sideBarContent">   
                    <MyOrders />
                </div>
            </div>
        </React.Fragment>
    )
}

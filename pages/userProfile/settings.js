import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import UserSidebar from '../../components/Settings/UserSidebar';

export default function SettingsPage() {
    useEffect(() => {
        document.body.classList.add('profile__page');
        document.body.classList.remove('login__form');
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("cart__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove("progress__page");
        document.body.classList.remove("checkout__page");
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

                </div>
            </div>
        </React.Fragment>
    )
}

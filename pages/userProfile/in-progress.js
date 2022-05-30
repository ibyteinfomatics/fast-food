import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import InProgress from '../../components/Settings/InProgress'

export default function InProgressPage() {
    useEffect(() => {
        document.body.classList.add('progress__page');
        document.body.classList.remove('checkout__page');
        document.body.classList.remove('login__form');
        document.body.classList.remove("steps");
        document.body.classList.remove("home__page");
        document.body.classList.remove("cart__page");
        document.body.classList.remove("rest__pages");
        document.body.classList.remove("profile__pages");
    })
    return (
        <React.Fragment>
            {/* Header */}
            <Header />
            
            <div className='settingPageALign siteWidth'>
                <div className="sideBarContent inProgressContent">
                    <InProgress />
                </div>
            </div>
        </React.Fragment>
    )
}

import React from 'react'
import Header from '../../components/Header/Header'
import InProgress from '../../components/Settings/InProgress'

export default function InProgressPage() {
    return (
        <React.Fragment>
            <Header />
            <div className='settingPageALign siteWidth'>
                <div className="sideBarContent inProgressContent">
                    <InProgress />
                </div>
            </div>
        </React.Fragment>
    )
}

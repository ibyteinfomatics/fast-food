import React from 'react'
import Header from '../../components/Header/Header'
import OrderDetails from '../../components/Settings/OrderDetails'

export default function OrderDetailsPage() {
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

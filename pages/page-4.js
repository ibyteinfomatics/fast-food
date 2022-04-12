import React from 'react'
import CardImage from '../components/CardImage/CardImage'
import Header from '../components/Header/Header'
import Sitebanner from '../components/Sitebanner/Sitebanner'

export default function pageFour() {
    return (
        <React.Fragment>
            {/* Header */}
            <Header />

            <div className='siteWidth'>
                {/* Top Banner */}
                <Sitebanner />

                {/* Product grids */}
                <div className='product__lists'>
                    <CardImage 
                        cardImg="/images/burgers.png"
                        cardTitle="Burgers & Wraps"
                    />
                    
                    <CardImage 
                        cardImg="/images/starters.png"
                        cardTitle="Starters"
                    />
                    
                    <CardImage 
                        cardImg="/images/chicken.png"
                        cardTitle="Chicken"
                    />
                    
                    <CardImage 
                        cardImg="/images/salads.png"
                        cardTitle="Salads"
                    />
                    
                    <CardImage 
                        cardImg="/images/platters.png"
                        cardTitle="Platters"
                    />
                    
                    <CardImage 
                        cardImg="/images/veggie.png"
                        cardTitle="Veggie"
                    />
                    
                    <CardImage 
                        cardImg="/images/for-kids.png"
                        cardTitle="For Kids"
                    />
                    
                    <CardImage 
                        cardImg="/images/sides-extra.png"
                        cardTitle="Sides & Extra"
                    />
                    
                    <CardImage 
                        cardImg="/images/drinks.png"
                        cardTitle="Drinks"
                    />
                    
                    <CardImage 
                        cardImg="/images/desserts.png"
                        cardTitle="Desserts"
                    />
                </div>
            </div>

{/*             
            <div className='pageWrapper'>
                <div className='siteWidth'>
                    <div className='contentWrapper'>
                    <Sitebanner />
                        <h2 className='pageTitle'>Starters</h2>
                        <div className='gridBlockFour'>
                            <div className='cardBlock'>
                                <div className='card card--img'>
                                    <div className='cardImg'>
                                        <img src='images/bg.png' alt='Food Product Image' />
                                    </div>
                                </div>
                                <div className='card--img--detail'>
                                    <div className='flexBlockTwo'>
                                        <h4 className='name font-18'>Sunset Burger</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    )
}

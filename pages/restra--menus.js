import React, {useEffect} from 'react'
import CardImage from '../components/CardImage/CardImage'
import Header from '../components/Header/Header'
import Sitebanner from '../components/Sitebanner/Sitebanner'

export default function PageFour() {
    useEffect(() => {
        document.body.classList.add("rest__pages");
        document.body.classList.remove("home__page");
        document.body.classList.remove("steps");
        document.body.classList.remove('login__form');
    });

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
                        cardItem='/restraMenus/burgers--wraps'
                        cardImg="/images/burgers.png"
                        cardTitle="Burgers & Wraps"
                    />
                    
                    <CardImage 
                        cardItem='/restraMenus/starters'
                        cardImg="/images/starters.png"
                        cardTitle="Starters"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/chicken.png"
                        cardTitle="Chicken"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/salads.png"
                        cardTitle="Salads"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/platters.png"
                        cardTitle="Platters"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/veggie.png"
                        cardTitle="Veggie"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/for-kids.png"
                        cardTitle="For Kids"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/sides-extra.png"
                        cardTitle="Sides & Extra"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/drinks.png"
                        cardTitle="Drinks"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/desserts.png"
                        cardTitle="Desserts"
                    />
                </div>
            </div>

        </React.Fragment>
    )
}

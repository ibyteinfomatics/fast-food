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
        document.body.classList.remove('cart__page');
        document.body.classList.remove('checkout__page');
        document.body.classList.remove('profile__page');
        document.body.classList.remove("progress__page");
    });

    return (
        <React.Fragment>
            {/* Header */}
            <Header />
            
            {/* Top Banner */}
            <Sitebanner />
            
            <div className='siteWidth'>

                {/* Product grids */}
                <div className='product__lists rest--pages__lists'>
                    <CardImage 
                        cardItem='/restraMenus/burgers--wraps'
                        cardImg="/images/new_images/salads.jpg"
                        // cardTitle="Burgers & Wraps"
                    />
                    
                    <CardImage 
                        cardItem='/restraMenus/starters'
                        cardImg="/images/new_images/burgers.jpg"
                        // cardTitle="Starters"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/fries-slaws.jpg"
                        // cardTitle="Chicken"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/hot-boxes.jpg"
                        // cardTitle="Salads"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/grilled-wraps.jpg"
                        // cardTitle="Platters"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/hot-drinks.jpg"
                        // cardTitle="Veggie"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/cold-drinks.jpg"
                        // cardTitle="For Kids"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/vegan-shakes.jpg"
                        // cardTitle="For Kids"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/kids.jpg"
                        // cardTitle="For Kids"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/cookies-cakes.jpg"
                        // cardTitle="For Kids"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/sauces.jpg"
                        // cardTitle="For Kids"
                    />
                    
                    <CardImage 
                        cardItem='#'
                        cardImg="/images/new_images/drinks.jpg"
                        // cardTitle="For Kids"
                    />
                    
                </div>
            </div>

        </React.Fragment>
    )
}

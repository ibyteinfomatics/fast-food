import React from 'react'
import CardImage from '../components/CardImage/CardImage'
import Header from '../components/Header/Header'

export default function pageSix() {
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      <div className='siteWidth'>
          {/* Product grids */}
          <div className='product__lists prod__lists--content'>
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Sunset Burgers"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Starters"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Chicken"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Salads"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Platters"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Veggie"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="For Kids"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Sides & Extra"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Drinks"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
              
              <CardImage 
                cardImg="/images/bg.png"
                cardTitle="Desserts"
                cardPrice="$8.25"
                cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
              />
          </div>
      </div>
    </React.Fragment>
  )
}

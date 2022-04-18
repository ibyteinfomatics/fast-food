import React, {useEffect} from 'react'
import CardImage from '../../components/CardImage/CardImage'
import Header from '../../components/Header/Header'

export default function Starters() {
  useEffect(() => {
      document.body.classList.add("rest__pages");
      document.body.classList.remove("home__page");
      document.body.classList.remove("steps");
  });
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      <div className='siteWidth'>
        {/* Product grids */}
        <div className='product__cate'>
          <div className='prod_cate--name'>
            <h2 className='cateTitle'>Starters</h2>
          </div>
          <div className='product__lists prod__lists--content'>
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/starters--item.png"
              cardTitle="Sunset Burgers"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/starters--item.png"
              cardTitle="Sunset Burgers"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/starters--item.png"
              cardTitle="Sunset Burgers"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/starters--item.png"
              cardTitle="Sunset Burgers"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/starters--item.png"
              cardTitle="Sunset Burgers"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/starters--item.png"
              cardTitle="Sunset Burgers"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

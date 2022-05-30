import React, {useEffect} from 'react'
import CardImage from '../../components/CardImage/CardImage'
import Header from '../../components/Header/Header'

export default function BurgersWraps() {
  useEffect(() => {
      document.body.classList.add("rest__pages");
      document.body.classList.remove("home__page");
      document.body.classList.remove("steps");
      document.body.classList.remove('login__form');
      document.body.classList.remove('cart__page');
      document.body.classList.remove('checkout__page');
      document.body.classList.remove("progress__page");
      document.body.classList.remove("profile__pages");
  });
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      <div className='siteWidth'>
        {/* Product grids */}
        <div className='product__cate'>
          <div className='prod_cate--name'>
            <h2 className='cateTitle'>Burgers</h2>
          </div>
          <div className='product__lists prod__lists--content'>
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/bg.png"
              cardTitle="Sunset Burgers"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/bg.png"
              cardTitle="Starters"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/bg.png"
              cardTitle="Chicken"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            
            <CardImage 
              cardStepLink= "yes"
              cardImg="/images/bg.png"
              cardTitle="Salads"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
          </div>
        </div>

        
        <div className='product__cate'>
          <div className='prod_cate--name'>
            <h2 className='cateTitle'>Wraps</h2>
          </div>
          <div className='product__lists prod__lists--content'>
            <CardImage 
              cardImg="/images/wrap_img.png"
              cardTitle="Burgers & Wraps"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            
            <CardImage 
              cardImg="/images/wrap_img.png"
              cardTitle="Burgers & Wraps"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            
            <CardImage 
              cardImg="/images/wrap_img.png"
              cardTitle="Burgers & Wraps"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
            
            <CardImage 
              cardImg="/images/wrap_img.png"
              cardTitle="Burgers & Wraps"
              cardPrice="$8.25"
              cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

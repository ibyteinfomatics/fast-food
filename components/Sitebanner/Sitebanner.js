// import React from 'react'
// import Image from 'next/image'

// export default function Sitebanner(props) {
//     console.log(props.data)
//     return (
//         <div className='bannerImage'>
//             <Image src="/images/new_images/rest_banner.jpg" alt='Banner Image' layout='responsive' height={427} width={1920} />
//             {/* <div className='bannerContent'>
//                 <div className='bannerSubTitle textWhite'>
//                     <h3>Fastfood Elephant & Castle</h3>
//                 </div>
//             </div> */}
//         </div>
//     )
// }
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-grid-carousel'

export default function Sitebanner(props) {
    console.log(props?.data)
    return (
        <div className='bannerImage'>
            {props?.data?.length == 0 &&
            <img src="/images/new_images/rest_banner.jpg" alt='Banner Image' layout='responsive' />
            }
            
            {/* <Image src="/images/new_images/rest_banner.jpg" alt='Banner Image' layout='responsive' height={427} width={1920} /> */}
            {/* <div className='bannerContent'>
                <div className='bannerSubTitle textWhite'>
                    <h3>Fastfood Elephant & Castle</h3>
                </div>
            </div> */}
            {props?.data?.length > 0 &&
            
            <Carousel cols={1} rows={1} gap={10} showDots={true} autoplay={1500} loop>
                {props.data && props.data.length > 0 && 
                    props.data.map((data) => {
                        console.log(data)
                        return(                     
                <Carousel.Item key={data.banner_id}>
                    
                    <div className='bannerImage'>
                        <img src={`${process.env.baseApiUrl}${data?.banner_attachment?.attachment_url}`} alt='Banner Image' layout='responsive' height={427} width={1920} />
                    </div>
                    
                </Carousel.Item>
                
                  )
                })
            }
            
                {/* <Carousel.Item>
                    <div className='bannerImage'>
                        <Image src="/images/new_images/rest_banner.jpg" alt='Banner Image' layout='responsive' height={427} width={1920} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bannerImage'>
                        <Image src="/images/new_images/rest_banner.jpg" alt='Banner Image' layout='responsive' height={427} width={1920} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bannerImage'>
                        <Image src="/images/new_images/rest_banner.jpg" alt='Banner Image' layout='responsive' height={427} width={1920} />
                    </div>
                </Carousel.Item> */}
                {/* ... */}
            </Carousel>
}
        </div>
    )
}

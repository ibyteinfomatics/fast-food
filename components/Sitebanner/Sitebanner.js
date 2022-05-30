import React from 'react'
import Image from 'next/image'

export default function Sitebanner() {
    return (
        <div className='bannerImage'>
            <Image src="/images/new_images/rest_banner.jpg" alt='Banner Image' layout='responsive' height={427} width={1920} />
            {/* <div className='bannerContent'>
                <div className='bannerSubTitle textWhite'>
                    <h3>Fastfood Elephant & Castle</h3>
                </div>
            </div> */}
        </div>
    )
}

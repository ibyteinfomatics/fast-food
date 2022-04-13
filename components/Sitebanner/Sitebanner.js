import React from 'react'
import Image from 'next/image'

export default function Sitebanner() {
    return (
        <div className='bannerImage'>
            <Image src="/images/banner-img.png" alt='Banner Image' layout='responsive' width={1760} height={503} />
            <div className='bannerContent'>
                <div className='bannerSubTitle textWhite'>
                    <h3>Fastfood Elephant & Castle</h3>
                </div>
            </div>
        </div>
    )
}

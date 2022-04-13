import React from 'react'
import Image from 'next/image'

export default function StepLeftBlock() {
    return (
        <div className='stepLeftData bgGray'>
            <div className='cardBlock'>
                <div className='card card--img'>
                    <div className='cardImg'>
                        <Image src="/images/bg.png" alt='Food Product Image' />
                    </div>
                </div>
                <div className='card--img--detail noBg'>
                    <div className='flexBlockTwo'>
                        <h4 className='name font-18'>Sunset Burger</h4>
                        <h4 className='price font-20'>$8.25</h4>
                    </div>
                    <p className='mt-16'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.
                    </p>
                </div>
            </div>
        </div>
    )
}

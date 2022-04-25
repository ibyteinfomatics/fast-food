import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function MyProfile() {
  return (
    <React.Fragment>                             
        <form className='userProfileEditForm'>
            <div className='editProfile'>
                <div className='uploadedImg'>
                    <Image src="/images/user_pic.png" alt='Profile Image' layout='fill' quality={100} />
                </div>
                <div className='fileUpload'>
                    <input type="file" id="profile-img" />
                    <label htmlFor='profile-img'>
                        <div className='changeImg'>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="42" height="42" rx="12" fill="#FFF0F3" />
                                <path d="M18.2633 11.9C17.4258 11.9 16.7008 12.4531 16.3633 13.205L16.2383 13.4909H12.2008C10.882 13.4909 9.80078 14.566 9.80078 15.8773V27.0136C9.80078 28.3249 10.882 29.4 12.2008 29.4H29.8008C31.1195 29.4 32.2008 28.3249 32.2008 27.0136V15.8773C32.2008 14.566 31.1195 13.4909 29.8008 13.4909H25.7695L25.6383 13.205C25.2945 12.4531 24.5758 11.9 23.7383 11.9H18.2633ZM18.2633 13.4909H23.7383C23.8758 13.4909 24.0508 13.5841 24.1758 13.8576L24.732 15.0818H29.8008C30.2508 15.0818 30.6008 15.4298 30.6008 15.8773V27.0136C30.6008 27.4611 30.2508 27.8091 29.8008 27.8091H12.2008C11.7508 27.8091 11.4008 27.4611 11.4008 27.0136V15.8773C11.4008 15.4298 11.7508 15.0818 12.2008 15.0818H17.2695L17.8258 13.8576C17.9445 13.5841 18.1258 13.4909 18.2633 13.4909ZM13.0008 16.6727V18.2636H14.6008V16.6727H13.0008ZM21.0008 16.6727C18.357 16.6727 16.2008 18.8167 16.2008 21.4454C16.2008 24.0742 18.357 26.2182 21.0008 26.2182C23.6445 26.2182 25.8008 24.0742 25.8008 21.4454C25.8008 18.8167 23.6445 16.6727 21.0008 16.6727ZM21.0008 18.2636C22.7758 18.2636 24.2008 19.6805 24.2008 21.4454C24.2008 23.2104 22.7758 24.6273 21.0008 24.6273C19.2258 24.6273 17.8008 23.2104 17.8008 21.4454C17.8008 19.6805 19.2258 18.2636 21.0008 18.2636Z" fill="#FE0435" />
                            </svg>
                            <span>Change Image</span>
                        </div>
                    </label>
                </div>
            </div>
            <div className='formData'>
                <div className='form--item'>
                    <label className='form--label' htmlFor='name'>Name</label>
                    <input className='form--control' type="name" id="name" placeholder='Username' />
                </div>
                <div className='form--item'>
                    <label className='form--label' htmlFor='number'>Contact</label>
                    <input className='form--control' type="number" id="number" placeholder='+1 123 456 7890' />
                </div>
                <div className='form--item'>
                    <label className='form--label' htmlFor='email'>Email</label>
                    <input className='form--control' type="email" id="email" placeholder='myemail@gmail.com' />
                </div>
            </div>
        </form>  
    </React.Fragment>
  )
}

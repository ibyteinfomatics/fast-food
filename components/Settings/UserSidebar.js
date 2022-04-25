import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function UserSidebar() {

    const router = useRouter();

  return (
    <React.Fragment>
        <div className='user__sideBar'>
            <ul>
                <li>
                    <Link href="/userProfile/my-profile">
                        <a className={router.pathname == "/userProfile/my-profile" ? "active" : " "}>My Profile</a>
                    </Link>
                </li>
                <li>
                    <Link href="/userProfile/my-orders">
                        <a className={router.pathname == "/userProfile/my-orders" ? "active" : " "}>My Orders</a>
                    </Link>
                </li>
                <li>
                    <Link href="/userProfile/settings">
                        <a className={router.pathname == "/userProfile/settings" ? "active" : " "}>Settings</a>
                    </Link>
                </li>
            </ul>
        </div>
    </React.Fragment>
  )
}
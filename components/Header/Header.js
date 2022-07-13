import { elastic as Menu } from "react-burger-menu";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { setHeaderData } from "./header-reducer";


export default function Header(props) {
  // console.log(props.price)
  const router = useRouter();

  
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const slug_url = router.query.slug;
  const [isToken, setIsToken] = useState("");
  const rout = router.pathname.split("/");
  
  const route = rout[1];
  // console.log(route)
  const [showMe, setShowMe] = useState(false);
  const [menuListData, setMenuData] = useState([]);
  function toggle() {
    setShowMe(!showMe);
  }
  useEffect(() => {
    // Perform localStorage action
    if (slug_url && slug_url !== "") {
      menuList(slug_url);
      
    }
    const token = localStorage.getItem("token");
    if (token != null) {
      setIsToken(token);
    }
  }, [slug_url]);
  const setRouter = () => {
    localStorage.setItem("url", router.asPath)
    // console.log(router)
  }
  const menuList = async (slug_url) => {
    // console.log(slug_url)
    const result = await fetch(
      // `${process.env.baseApiUrl}/api/get/categories?store_url=37e50546f8938bebeaa2d13f159fde5bc947c745`,
      `${process.env.baseApiUrl}/api/get/categories?store_url=37e50546f8938bebeaa2d13f159fde5bc947c745`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );
    let response = await result.json();
    if (response.success) {
      // console.log(response )
      setMenuData(response.category_data);
    //  console.log( slug_url)
     if( route === 'submenu') {
      const categoryId = response.category_data.find( (item) =>
      item.slug === slug_url
      )
    //  localStorage.setItem("categoryId", categoryId?.category_id)
    //  localStorage.setItem("categoryItem", JSON.stringify([{'categoryId': categoryId.category_id , 'item': [null]}]))
     }
     
      await dispatch(setHeaderData(response.category_data));
    } else {
      return response;
    }
  };
  const itemId = () => {
    if(localStorage.getItem("itemId")) {
    const items = localStorage.getItem("itemId");
    const allItems = [items]
    allItems.push(props.item_id)
    localStorage.setItem("itemId", allItems)
    } else {
      localStorage.setItem("itemId", props.item_id)
    }
    
    
  }
  
  const logout = () => {
    
    localStorage.removeItem("token");
    if(router.asPath === '/' ) {
      window.location.reload()
    }
    router.push('/')
    
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <React.Fragment>
        <div className="desktop__header header__wrapper">
          {route != "prepSteps" && (
            <div className="header__wrap--inner">
              <div className="header__left">
                <div className="site__logo">
                  <Link href="/">
                    <a className="logo__link">
                      <Image
                        src="/images/logo.svg"
                        alt="Fast Food Logo"
                        layout="fill"
                        quality={100}
                      />
                    </a>
                  </Link>
                </div>
                <div className="restra__name--links">
                  <p>
                    <Link href="/">
                      <a>
                        <span className="map_icon">
                          <Image
                          
                            src="/images/map-pin.svg"
                            alt="Map Pin Icon"
                            layout="fill"
                            quality={100}
                          />
                        </span>
                        Mcdonalds..
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="header__right">
                <nav className="site__navigation">
                  <ul>
                    {isToken !== "" &&
                   <div className="add--order cartBtn">
                   <Link href="/cart">
                     {/* <img
                       src="/images/cart.jpg"
                       alt="Cart"
                       layout="fill"
                       quality={100}
                       width="50px"
                       height="50px"
                     /> */}
                     <a href="/cart/"><svg width="20" height="20" viewBox="0 0 328.997 329.146"><path id="icons8_shopping_cart_1" d="M57.147,2,1,2.285l.161,32.908,34.065-.161L89.445,165.091l-19.7,31.495C55.95,218.613,72.724,248.872,98.7,248.872H297.113V215.964H98.7c-1.831,0-2.042-.36-1.061-1.928l19.346-30.98H239.878a32.9,32.9,0,0,0,28.762-16.936L327.9,59.393a16.431,16.431,0,0,0-14.366-24.424H70.87Zm42.517,263.33a32.908,32.908,0,1,0,32.908,32.908A32.908,32.908,0,0,0,99.664,265.326Zm164.541,0a32.908,32.908,0,1,0,32.908,32.908A32.908,32.908,0,0,0,264.205,265.326Z" transform="translate(-1.004 -1.996)" fill="#fff"></path></svg> &nbsp;<span>$10 / 5 items</span></a>
                   </Link>
                 </div>
                    }
                    {isToken != "" ? (
                      <li className="logOut">
                        <Link href="/">
                          <a onClick={() => logout()}>Logout</a>
                        </Link>{" "}
                      </li>
                    ) : (
                      <li>
                        <Link href="/login">
                          <a onClick={setRouter}> Login</a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
          {route == "submenu" && (
            <div className="header__wrap--inner restra__menu">
              <ul className="desktop__menu">
                {/* <li className="burgur__icon">
                  <Link href="/">
                    <a></a>
                  </Link>
                </li> */}
                {menuListData &&
                  menuListData.length > 0 &&
                  menuListData.map((menuList) => {
                    return (
                      <li
                        className={
                          slug_url == menuList.slug ? "menu-active" : "" 
                          
                        }
                        
                        key={menuList.slug}
                        
                      >
                        <Link  href={`/submenu/${menuList.slug}`}>
                          <a className="">{menuList.name}</a>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
              {/* Mobile Menus */}

              {/* <div className="mobile__header header__wrapper">
                        <div className="header__left">
                            <Menu right>
                                <ul>
                                    <li className='burgur__icon'>
                                        <Link href="/restra--menus">
                                            <a></a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'burgers--wraps' ? "active__link" : ""}>
                                        <Link href="/restraMenus/burgers--wraps">
                                            <a>Burgers & Wraps</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'starters' ? "active__link" : ""}>
                                        <Link href="/restraMenus/starters">
                                            <a>Starters</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'chickens' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>Chickens</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'salads' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>Salads</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'platters' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>Platters</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'veggie' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>Veggie</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'for-kids' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>For Kids</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'sides--extras' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>Sides & Extras</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'drinks' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>Drinks</a>
                                        </Link>
                                    </li>
                                    <li className={rout[2] == 'desserts' ? "active__link" : ""}>
                                        <Link href="#">
                                            <a>Desserts</a>
                                        </Link>
                                    </li>
                                </ul>
                            </Menu>
                        </div>
                    </div>

                    <div className='menu__srch'>
                        <Link href="#">
                            <a className='btnRed btn'>Search</a>
                        </Link>
                    </div> */}
            </div>
          )}
          {route == "prepSteps" && (
            <div className="header__wrap--inner prepSteps">
              <ul>
                <li>
                  <Link href="/submenu/burger-wraps/">
                    <a className="back--menu--icon" 
                    ></a>
                  </Link>
                </li>
                <li>Burgers & Wraps</li>
              </ul>
              {/* {isToken !== "" && */}
              <div className="add--order cartBtn">
                      <Link href="/cart">
                        {/* <img
                          src="/images/cart.jpg"
                          alt="Cart"
                          layout="fill"
                          quality={100}
                          width="50px"
                          height="50px"
                        /> */}
                        <a href="/cart/"><svg width="20" height="20" viewBox="0 0 328.997 329.146"><path id="icons8_shopping_cart_1" d="M57.147,2,1,2.285l.161,32.908,34.065-.161L89.445,165.091l-19.7,31.495C55.95,218.613,72.724,248.872,98.7,248.872H297.113V215.964H98.7c-1.831,0-2.042-.36-1.061-1.928l19.346-30.98H239.878a32.9,32.9,0,0,0,28.762-16.936L327.9,59.393a16.431,16.431,0,0,0-14.366-24.424H70.87Zm42.517,263.33a32.908,32.908,0,1,0,32.908,32.908A32.908,32.908,0,0,0,99.664,265.326Zm164.541,0a32.908,32.908,0,1,0,32.908,32.908A32.908,32.908,0,0,0,264.205,265.326Z" transform="translate(-1.004 -1.996)" fill="#fff"></path></svg> &nbsp;<span>$10 / 5 items</span></a>
                      </Link>
                    </div>
                    
              {/* } */}
            {/* {isToken == '' &&
              <ul>
      
                <li>
                  <Link href="/login">
                    <a onClick={setRouter}> Login</a>
                  </Link>
                </li>
              
            </ul>
            } */}
            
            </div>
          )}
          {route == "cart" && (
            <div className="header__wrap--inner prepSteps">
              
              <ul>
                <li>
                <div className="site__logo">
                  <Link href="/">
                    <a className="logo__link">
                      <Image
                        src="/images/logo.svg"
                        alt="Fast Food Logo"
                        layout="fill"
                        quality={100}
                      />
                    </a>
                  </Link>
                </div>
                </li>
                {/* <li>
                  
                    <a className="back--menu--icon" href="/submenu/burger-wraps/"></a>
                  
                </li> */}
                <li>Your Cart</li>
              </ul>
              <div className="add--order">
                <Link href="/submenu/burger-wraps">
                {/* <Link href="submenu/burger-wraps/"> */}
                  <a className="conti--order">Continue Ordering</a>
                </Link>
                {isToken &&
                <ul>
                  <li>
                 <Link href="/card-checkout">
                  <a className="btnRed btn">Checkout</a>
                </Link>
                </li>
               
                <li className="logOut">
                        <Link href="/">
                          <a onClick={() => logout()}>Logout</a>
                        </Link>{" "}
                      </li>
                </ul>
               
              
                }
              </div>
            </div>
          )}
          {route == "userProfile" && (
            <div className="header__wrap--inner prepSteps">
              <ul>
                <li>
                  <Link href="/submenu/burger-wraps/">
                    <a className="back--menu--icon" ></a>
                  </Link>
                </li>
                <li>Your Profile</li>
              </ul>
            </div>
          )}
          {route === "checkout" && (
            <div className="header__wrap--inner prepSteps">
              <ul>
                <li>
                  <Link href="/submenu/burger-wraps/">
                    <a className="back--menu--icon" ></a>
                  </Link>
                </li>
                <li>Checkout</li>
              </ul>
              <div className="add--order">
                <Link href="/userProfile/my-profile">
                  <a className="btn">
                    <span className="user__pic">
                      <Image
                        src="/images/user_pic.png"
                        alt="user pic"
                        layout="fill"
                        quality={100}
                      />
                    </span>{" "}
                    Username
                  </a>
                </Link>
              </div>
            </div>
          )}
          {/* {route == "card-checkout" && (
            <div className="header__wrap--inner prepSteps">
              <ul>
                <li>
                  <Link href="/submenu/burger-wraps/">
                    <a className="back--menu--icon" ></a>
                  </Link>
                </li>
                <li>Checkout</li>
              </ul>
              <div className="add--order">
                <ul>
              {isToken != "" ? (
                      <li>
                        <Link href="/">
                          <a onClick={() => logout()}>Logout</a>
                        </Link>{" "}
                      </li>
                    ) : (
                      <li>
                        <Link href="/login">
                          <a onClick={setRouter}> Login</a>
                        </Link>
                      </li>
                    )}
              </div>
            </div>
          )} */}
          
          {router.pathname == "/userProfile/in-progress" && (
            <div className="header__wrap--inner progress--header">
              <ul>
                <li className="color__red">In Progress Orders</li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Header Wrapper */}
        {/* <div className="mobile__header header__wrapper">
                <div className="header__wrap--inner">
                    <div className="header__left">
                        <div className="site__logo">
                            <Link href="/">
                                <a className="logo__link">
                                    <Image src="/images/logo.svg" alt="Fast Food Logo" layout="fill" quality={100} />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <Menu right>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>Login</a>
                                    </Link>
                                </li>
                            </ul>
                        </Menu>
                    </div>
                </div>
            </div> */}
      </React.Fragment>
    </>
  );
}



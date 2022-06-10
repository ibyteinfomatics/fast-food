import { elastic as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { setHeaderData } from "./header-reducer";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const slug_url = router.query.slug;
  const [isToken, setIsToken] = useState("");
  const rout = router.pathname.split("/");
  const route = rout[1];
  const [showMe, setShowMe] = useState(false);
  const [menuListData, setMenuData] = useState([]);
  function toggle() {
    setShowMe(!showMe);
  }
  console.log(slug_url, "slug_url");
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
  const menuList = async (slug_url) => {
    const result = await fetch(
      `${process.env.baseApiUrl}/api/get/categories?store_url=restra--menus`,
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
      setMenuData(response.category_data);
      await dispatch(setHeaderData(response.category_data));
    } else {
      return response;
    }
  };
  const logout = (e, path) => {
    console.log(e);
    localStorage.clear();
    router.push("/login");
  };
  console.log(route, "Routing");
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
                        Fastfood Elephant Cas..
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="header__right">
                <nav className="site__navigation">
                  <ul>
                    {isToken != "" ? (
                      <li>
                        <Link href="login">
                          <a onClick={(e) => logout(e, "/logout")}>Logout</a>
                        </Link>{" "}
                      </li>
                    ) : (
                      <li>
                        <Link href="/login">
                          <a>Login</a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
          {(route == "menu" || route == "submenu") && (
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
                          rout[2] == "burgers--wraps" ? "active__link" : ""
                        }
                        key={menuList.slug}
                      >
                        <Link href={`/submenu/${menuList.slug}`}>
                          <a>{menuList.name}</a>
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
                  <Link href="/menu/restra--menus">
                    <a className="back--menu--icon"></a>
                  </Link>
                </li>
                <li>Burgers & Wraps</li>
              </ul>
              <div className="add--order">
                <Link href="/cart">
                  <a className="btnRed btn">Add to Order</a>
                </Link>
              </div>
            </div>
          )}
          {route == "cart" && (
            <div className="header__wrap--inner prepSteps">
              <ul>
                <li>
                  <Link href="/menu/restra--menus">
                    <a className="back--menu--icon"></a>
                  </Link>
                </li>
                <li>Your Cart</li>
              </ul>
              <div className="add--order">
                <Link href="/menu/restra--menus">
                  <a className="conti--order">Continue Ordering</a>
                </Link>
                <Link href="/checkout">
                  <a className="btnRed btn">Checkout</a>
                </Link>
              </div>
            </div>
          )}
          {route == "userProfile" && (
            <div className="header__wrap--inner prepSteps">
              <ul>
                <li>
                  <Link href="/menu/restra--menus">
                    <a className="back--menu--icon"></a>
                  </Link>
                </li>
                <li>Your Profile</li>
              </ul>
            </div>
          )}
          {route == "checkout" && (
            <div className="header__wrap--inner prepSteps">
              <ul>
                <li>
                  <Link href="/menu/restra--menus">
                    <a className="back--menu--icon"></a>
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

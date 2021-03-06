import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header/Header";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchRestraSearch } from "../restaurant/list";
import Geocode from "react-geocode";
import ReactPaginate from 'react-paginate';
import Layout from "../components/layout";
import { Router, useRouter } from "next/router";



export default function RestraLists() {

  const [cartData, setCartData] = useState([])
  useEffect(() => {
    if(localStorage.getItem("token")) {
      cartList()
    }
    
    document.body.classList.add("home__page");
    document.body.classList.remove("steps");
    document.body.classList.remove("rest__pages");
    document.body.classList.remove("login__form");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("checkout__page");
    
  }, []);
  const router = useRouter();
  const [showMe, setShowMe] = useState(false);
  const [currentAddress, setAddress] = useState("");
  const [checked, setChecked] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  Geocode.setApiKey("AIzaSyD5ff_0k1vyeWp5NO0OXPMIlnkd2HzMhFM");
  Geocode.setLanguage("en");
  Geocode.enableDebug();
  const [page, setPage] = useState(1);

  const cartList = async () => {
    
    const result = await fetch(
        `${process.env.baseApiUrl}/api/cart/list`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        }
    );
    let response = await result.json();
    console.log(response)
    if (response.success) {
        console.log(response)
        setCartData(response.cart_item)
    } else {

        return response;
    }

}

  const handleClick = async (path) => {
    
    if (path === "/useMylocation") {
      navigator.geolocation.getCurrentPosition(function (position) {
        const search = {
          search_item: "",
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        };
        // console.log(position.coords.longitude, "Longitude");
        // console.log(position.coords.latitude, "Latitude");
        setChecked(true);
        searchRestraResult(search);
        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude
        ).then(
          (response) => {
            const address = response.results[0].formatted_address;
            setAddress(address);
          },
          (error) => {
            console.error(error);
          }
        );
      });
    }
  };
  const deleteCart = async(prevStore, store_id, store_url) => {
    const storeId = localStorage.getItem("storeId")
    const result = await fetch(
      // `${process.env.baseApiUrl}/api/item/list/by/Id?item_id=${myArray.at(-1)}`,
      `${process.env.baseApiUrl}/api/delete/addon/change/store`,
      {
          method: "POST",
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body:JSON.stringify({"store_id":prevStore})
      }
  );

  let response = await result.json();
  if (response.success) {
    localStorage.setItem("storeId", store_id);
    localStorage.setItem("store_url", store_url)
    router.push(`/store/?store_id=${store_url}`)
      return response;
      

  } else {
      
      return response;
  }
  }
  const handleRemove = async (e) => {
    setAddress("");
    setCurrentData([]);
  };
  function toggle() {
    setShowMe(!showMe);
  }
  const restaurantSearch = async (event) => {
    // console.log( event );
    
    const val = event?.target?.value;
    setAddress(val);
    if (val != "") {
      const search = { search_item: val, longitude: "", latitude: "" };
      setChecked(true);
      searchRestraResult(search);

    } else {
      setCurrentData([]);
    }
  };
  const changeStoreData = async(storeData) => {
    if(localStorage.getItem("token")) {
      if(localStorage.getItem("storeId")) {
        const prevStore_id = localStorage.getItem("storeId")
        if((cartData.length > 0 && prevStore_id) && storeData.store_id != prevStore_id) {
          const confirmBox = window.confirm(
                  "Are you sure you want to change store? You will lose your current basket if you do."
                )
                if (confirmBox === true) {
                  localStorage.setItem("storeId", storeData.store_id)
                  localStorage.setItem("store_url", storeData.store_url)
                  localStorage.removeItem("items")
                  deleteCart(prevStore_id, storeData.store_id, storeData.store_url)
                }
  
        }else {
          router.push(`/store/?store_id=${storeData.store_url}`)
          localStorage.setItem("storeId", storeData.store_id)
        localStorage.setItem("store_url", storeData.store_url)
        }
  
      }else {
        localStorage.setItem("storeId", storeData.store_id)
        localStorage.setItem("store_url", storeData.store_url)
        router.push(`/store/?store_id=${storeData.store_url}`)
      }

    }else {
      if(localStorage.getItem("storeId")) {
        const prevStore_id = localStorage.getItem("storeId")
        if((localStorage.getItem("items") && prevStore_id) && storeData.store_id != prevStore_id) {
          const confirmBox = window.confirm(
                  "Are you sure you want to change store? You will lose your current basket if you do."
                )
                if (confirmBox === true) {
                  localStorage.setItem("storeId", storeData.store_id)
                  localStorage.setItem("store_url", storeData.store_url)
                  localStorage.removeItem("items")
                  
                  router.push(`/store/?store_id=${storeData.store_url}`)
                }
  
        }else {
          router.push(`/store/?store_id=${storeData.store_url}`)
          localStorage.setItem("storeId", storeData.store_id)
        localStorage.setItem("store_url", storeData.store_url)
        }
  
      }else {
        localStorage.setItem("storeId", storeData.store_id)
        localStorage.setItem("store_url", storeData.store_url)
        router.push(`/store/?store_id=${storeData.store_url}`)
      }

    }
    

    // if(localStorage.getItem("storeId")) {
    //   const prevStore_id = localStorage.getItem("storeId")
    //   if(storeData.store_id != prevStore_id) {
    //     const confirmBox = window.confirm(
    //       "Are you sure you want to change store? You will lose your current basket if you do."
    //     )
    //     if (confirmBox === true) {
    //       localStorage.setItem("storeId", storeData.store_id)
    //       localStorage.setItem("store_url", storeData.store_url)
    //       localStorage.removeItem("items")
    //       router.push(`/store/?store_id=${store_url}`)
    //     }
    //   }
    //   else{
    //     router.push(`/store/?store_id=${store_url}`)
    //   }

    // }else {
    //   localStorage.setItem("storeId", storeData.store_id)
    //   localStorage.setItem("store_url", storeData.store_url)
    //   router.push(`/store/?store_id=${storeData.store_url}`)
    // }
    
    
  }

  // const deleteApi = async(data) => {
  //   data.map(async(d) => {
  //     const result = await fetch(
  //       `${process.env.baseApiUrl}/api/delete/cart/item`,
  //       {
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json; charset=utf-8",
  //               Accept: "application/json",
  //               Authorization: `Bearer ${localStorage.getItem("token")}`
  //           },
  //           body: JSON.stringify({"cart_id":d.cart_id})
  //       }
  //   );
  //   let response = await result.json();
  //   if (response.success) {
        
  //   } else {
    
  //       return response;
  //   }
  //   })
  // }
  const changeStore = async (data) => {
//     const storeId = localStorage.getItem("storeId")
//     if(storeId === data) {
//       router.push(`/store/${data}`)
//     } else{
//       const confirmBox = window.confirm(
//         "Are you sure you want to change store? You will lose your current basket if you do."
//       )
//       if (confirmBox === true) {
//         if(localStorage.getItem("token")) {
//           localStorage.setItem("storeId", data);
//         localStorage.removeItem("items")
//     const result = await fetch(
//       `${process.env.baseApiUrl}/api/cart/list`,
//       {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json; charset=utf-8",
//               Accept: "application/json",
//               Authorization: `Bearer ${localStorage.getItem("token")}`
//           },
//       }
//   );
//   let response = await result.json();
// console.log(response)
// if (response.success) {
//   deleteApi(response)
  
// } else {

//   return response;
// }
//         } else {
//           localStorage.setItem("storeId", data);
//         localStorage.removeItem("items")
//         }
        
//         router.push(`/store/${data}`)
//       }
//     }
    router.push(`/store/${data}`)

  }
  const searchRestraResult = async (data,page) => {
    const response = await fetchRestraSearch(data,page);
    if (response.success) {
      // console.log(response)
      setCurrentData(response.store_data)
      
      setChecked(false);
    } else {
      setCurrentData([]);
      setChecked(false);
    }
  };
  const handlePageClick = async (e) => {
    // console.log( e );
    let pageNo = e.selected + 1
    await setPage(page);

    const searchStr = { search_item: currentAddress, longitude: "", latitude: "" };
    setChecked(true);
    await searchRestraResult(searchStr,pageNo);
  };
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      {/* page content */}
      <div className="pageWrapper">
        <div className="gridBlogTwo">
          <div className="gridCol">
            <h2 className="secTitle">Click & Collect</h2>
            <p className="colDesc">
              Have an allergy? Unfortunately, we can???t cater for allergens on
              Click & Collect - head to one of our restaurants to order.
            </p>
            
            <form className="searchForm">
              <div className="searchBox">
                <span className="leftIcon">
                  <svg
                    width="18"
                    height="25"
                    viewBox="0 0 18 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.75C4.18066 0.75 0.25 4.68066 0.25 9.5C0.25 10.8535 0.803711 12.3369 1.56934 13.9023C2.33496 15.4746 3.33301 17.1152 4.33789 18.6123C6.33399 21.6133 8.32324 24.0537 8.32324 24.0537L9 24.8877L9.67676 24.0537C9.67676 24.0537 11.666 21.6133 13.6689 18.6123C14.667 17.1152 15.665 15.4746 16.4307 13.9023C17.1963 12.3369 17.75 10.8535 17.75 9.5C17.75 4.68066 13.8193 0.75 9 0.75ZM9 2.5C12.876 2.5 16 5.62402 16 9.5C16 10.3203 15.5693 11.6807 14.8584 13.1367C14.1475 14.5996 13.1768 16.1855 12.2129 17.6484C10.6064 20.0547 9.5127 21.3809 9 22.0234C8.4873 21.3809 7.39355 20.0547 5.78711 17.6484C4.82324 16.1855 3.85254 14.5996 3.1416 13.1367C2.43067 11.6807 2 10.3203 2 9.5C2 5.62402 5.12402 2.5 9 2.5ZM9 7.75C8.03613 7.75 7.25 8.53613 7.25 9.5C7.25 10.4639 8.03613 11.25 9 11.25C9.96387 11.25 10.75 10.4639 10.75 9.5C10.75 8.53613 9.96387 7.75 9 7.75Z"
                      fill="#FE0435"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter your postcode, address or city."
                  value={currentAddress}
                  onClick={toggle}
                  onChange={(e) => restaurantSearch(e)}
                  autoFocus
                />
                <span className="rightIcon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleRemove("/remove")}
                  >
                    <path
                      d="M12 0.625C5.73145 0.625 0.625 5.73145 0.625 12C0.625 18.2686 5.73145 23.375 12 23.375C18.2686 23.375 23.375 18.2686 23.375 12C23.375 5.73145 18.2686 0.625 12 0.625ZM12 2.375C17.3252 2.375 21.625 6.6748 21.625 12C21.625 17.3252 17.3252 21.625 12 21.625C6.6748 21.625 2.375 17.3252 2.375 12C2.375 6.6748 6.6748 2.375 12 2.375ZM8.5 7.2627L7.2627 8.5L7.88477 9.11524L10.7627 12L7.88477 14.8848L7.2627 15.5L8.5 16.7373L9.11524 16.1152L12 13.2373L14.8848 16.1152L15.5 16.7373L16.7373 15.5L16.1152 14.8848L13.2373 12L16.1152 9.11524L16.7373 8.5L15.5 7.2627L14.8848 7.88477L12 10.7627L9.11524 7.88477L8.5 7.2627Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <div className="location__link">
                <Link href="/">
                  <a onClick={() => handleClick("/useMylocation")}>
                    <span className="useLocation font-21">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.25 0V3.54102C7.64258 3.96484 3.96484 7.64258 3.54102 12.25H0V14H3.54102C3.96484 18.6074 7.64258 22.2852 12.25 22.7021V26.25H14V22.7021C18.6074 22.2852 22.2852 18.6074 22.7021 14H26.25V12.25H22.7021C22.2852 7.64258 18.6074 3.96484 14 3.54102V0H12.25ZM13.125 5.25C17.4863 5.25 21 8.76367 21 13.125C21 17.4863 17.4863 21 13.125 21C8.76367 21 5.25 17.4863 5.25 13.125C5.25 8.76367 8.76367 5.25 13.125 5.25ZM13.125 10.5C11.6758 10.5 10.5 11.6758 10.5 13.125C10.5 14.5742 11.6758 15.75 13.125 15.75C14.5742 15.75 15.75 14.5742 15.75 13.125C15.75 11.6758 14.5742 10.5 13.125 10.5Z"
                          fill="#181E27"
                        />
                      </svg>
                      Use my location
                    </span>
                  </a>
                </Link>
              </div>
            </form>
            <div className="search__detail--lists">
              {checked ? (
                <Skeleton count={1} />
              ) : currentData.data && currentData.data.length > 0 ? (
                currentData.data.map((resList) => {
                  console.log(resList.store_id)
                  return (
                    <div className="restroDetail" key={resList.store_id}>
                      <div className="restroGroup">
                        <div className="colLeft">
                          <div className="prdtImg">
                            <img
                              src={`${process.env.baseApiUrl}${resList.store_image.attachment_url}`}
                              alt="Food Image"
                              layout="fill"
                              quality={100}
                            />
                          </div>
                        </div>
                        <div className="colMid productDes">
                          <div className="flexBlockTwo">
                            <h4 className="font-18 prdtNm">
                              {resList.store_name}
                              <span className="orderAdd">
                                #{resList.postal_code}, {resList.location}
                              </span>
                            </h4>
                            <p>0.3 mi. away</p>
                          </div>
                          <div className="flexBlockTwo">
                            <div className="flexBlockLeft">
                              <Link href={`/store/${resList.store_url}`}>
                                
                                <a className="collect">Click & Collect</a>
                              </Link>
                              <p className="openStatus">
                                <span className="open">Open??? </span>
                                <span className="time">
                                  {resList.start_time} - {resList.end_time}
                                </span>
                              </p>
                            </div>
                            <div className="orderStatus">
                              {/* <Link href={`/store/?store_id=${resList.store_url}`}> */}
                              {/* <Link href={{
            pathname: "/store/",
            query: resList.store_url,
          }}> */}
                              {/* <Link href={`/store/?store_id=${resList.store_url}`}> */}
                              {/* <Link href="/store/:[pid]" as={`/store/${resList.store_url}`}> */}
                                <a className="btnRed btn"
                                 onClick={() => changeStoreData(resList)}
                                 >Order Online</a>
                              {/* </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    
                  );
                })
                
              )
               : (
                "Restaurant not found"
              )}
              {currentData?.total > 5 &&
                  <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil((currentData?.total) / (currentData?.per_page))}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />}
              
            </div>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  
}
// RestraLists.getLayout = (page) => {
//   return(
//       <Layout>
//           { page }
//       </Layout>
//   )
// }


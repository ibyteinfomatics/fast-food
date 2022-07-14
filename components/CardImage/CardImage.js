import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

// import ReadMoreReact from "read-more-react";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function CardImage(props) {
  const router = useRouter();
  const slug_url = router.query.slug;
  const rout = router.pathname.split("/");
  const route = rout[1];
  const [cartCount, setCartCount] = useState(0)
  const [ token, setToken] = useState("")
  
  const singleItemData = {
    item_id: props.item_id ? props.item_id : props.itemId,
  };

  useEffect(()=> {
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  },[])

  const directAddToCart = async (data) => {
    if(token) {
      const storeId = localStorage.getItem("storeId")
      if(data.customize_status === 0) {
        console.log("token present")
        console.log(data.item)
        const arrayItem = []
    
        arrayItem.push({item_id: data.item.item_id, is_customize: 0, selectedoptions: [], selectedCategory: []})
        console.log(arrayItem)
        if(localStorage.getItem("items") ) {
          const cartItem = JSON.parse(localStorage.getItem("items"))
          cartItem.map((data) => {
            arrayItem.push({item_id: data.item_id, is_customize: data.selectedCategory || data.selectedoptions ? 1 : 0, selectedoptions: data.selectedoptions ? data.selectedCategory : [], selectedCategory: data.selectedCategory ? data.selectedCategory : []})
          })
        }
        console.log(arrayItem)
        const result = await fetch(
          `${process.env.baseApiUrl}/api/add/to/cart`,
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  Accept: "application/json",
                  store_id: storeId,
                  Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(arrayItem)
          }
      );
      
      let response = await result.json();
      console.log(response)
      if (response.success) {
        setCartCount(response.count)
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        localStorage.removeItem("items")
        
    } else {
  
        return response;
    }
      
      } else {
        router.push(`/prepSteps/step-1/?item_id=${singleItemData.item_id}`)

      }

    }else {
      console.log(data)
      if(data.customize_status === 0) {
        if(localStorage.getItem("items")) {
          const items = JSON.parse(localStorage.getItem("items"))
          data.item['uniqueIndex'] = items[items.length -1].uniqueIndex + 1
          console.log(items)
          items.push(data.item)
          console.log(items)
          
          localStorage.setItem("items",JSON.stringify(items))
          
      }else {
          data.item["uniqueIndex"] = 1
          const array = [data.item]
          localStorage.setItem("items", JSON.stringify(array))
      }
      
      toast.success("1 Item Added In Cart", {
        position: toast.POSITION.TOP_RIGHT,
      });
      } else {
        router.push(`/prepSteps/step-1/?item_id=${singleItemData.item_id}`)

      }

    }
    
    
  }
  return (
    <React.Fragment>
      
      <div className="cardBlock">
        {rout[1] == "store" && (
          <Link href={props.cardItem}>
            <a className="card__link cardLink"></a>
          </Link>
        )}
        {/* {route == "submenu" && (
          <Link href="/prepSteps/step-1">
            <a className="card__link cardStepLink"></a>
          </Link>
        )} */}
  
        {/* <Link href={{
            pathname: "/prepSteps/step-1",
            query: singleItemData,
          }}> */}
        
        <div className="cardBlock__wrapper" >
          <div>
          {props.cardImg && (
            
            <div className="cardImg">
              
              <img
                src={props.cardImg}
                alt="Food Product Image"
                layout="fill"
                quality={100}
                style={{'cursor': 'pointer'}}
                onClick={() => directAddToCart(props)}
              />
              
            </div>
            
          )}
          {props.cardTitle && (
            <div className="card--img--detail">
              <div className="flexBlockTwo">
                {props.cardTitle && <h4 className="name">{props.cardTitle}</h4>}
                {props.cardPrice && (
                  <h4 className="price">{props.cardPrice}</h4>
                )}
              </div>
            </div>
          )}
          </div>
          
        </div>
        {/* </Link> */}
        
        {props.cardDesc && (
          <div className="card--img--desc">
            <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {props.cardDesc}
            </ReactReadMoreReadLess>
            {/* <ReadMoreReact
              text={props.cardDesc}
              min={50}
              ideal={100}
              max={200}
              readMoreText="Read more"
            /> */}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

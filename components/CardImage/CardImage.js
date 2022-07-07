import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

// import ReadMoreReact from "read-more-react";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function CardImage(props) {
  const router = useRouter();
  const slug_url = router.query.slug;

  // console.log( slug_url );
  // if(props.menu_id){
  //   localStorage.setItem("categoryId", props.menu_id)
  // }
  // const menu_id = props.menu_id;
  // console.log(menu_id);
  const rout = router.pathname.split("/");
  const route = rout[1];
  
  // const item_id = props.item_id
  const singleItemData = {
    item_id: props.item_id ? props.item_id : props.itemId,
  };
  //console.log(singleItemData)

  const directAddToCart = (data) => {
    //console.log(data)
      if(data.customize_status === 0) {
        if(localStorage.getItem("itemId")) {
          const items = localStorage.getItem("itemId");
          items = [items, singleItemData.item_id]
          
          localStorage.setItem("itemId", items)
          
      } else {
        localStorage.setItem("itemId", singleItemData.item_id)
      }
      toast.success("1 Item Added In Cart", {
        position: toast.POSITION.TOP_RIGHT,
      });
      } else {
        router.push(`/prepSteps/step-1/?item_id=${singleItemData.item_id}`)

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

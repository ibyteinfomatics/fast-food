import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CardImage(props) {
  const router = useRouter();
  const slug_url = router.query.slug;
  const rout = router.pathname.split("/");
  const route = rout[1];
  return (
    <React.Fragment>
      <div className="cardBlock">
        {rout[1] == "menu" && (
          <Link href={props.cardItem}>
            <a className="card__link cardLink"></a>
          </Link>
        )}
        {route == "submenu" && (
          <Link href="/prepSteps/step-1">
            <a className="card__link cardStepLink"></a>
          </Link>
        )}
        <div className="cardBlock__wrapper">
          {props.cardImg && (
            <div className="cardImg">
              <Image
                src={props.cardImg}
                alt="Food Product Image"
                layout="fill"
                quality={100}
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
        {props.cardDesc && (
          <div className="card--img--desc">
            <p className="mt-16">{props.cardDesc}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

import React, { useEffect, useState } from "react";
import CardImage from "../../components/CardImage/CardImage";
import Header from "../../components/Header/Header";
import Sitebanner from "../../components/Sitebanner/Sitebanner";
import { useRouter } from "next/router";

export default function PageFour() {
  const router = useRouter();
  const slug_url = router.query.slug;
  useEffect(() => {
    if (slug_url && slug_url !== "") {
      categoryList(slug_url);
    }
    document.body.classList.add("rest__pages");
    document.body.classList.remove("home__page");
    document.body.classList.remove("steps");
    document.body.classList.remove("login__form");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("checkout__page");
    document.body.classList.remove("profile__page");
    document.body.classList.remove("progress__page");
  }, [slug_url]);
  const [categoryData, setCategoryData] = useState([]);
  const categoryList = async (slug_url) => {
    const result = await fetch(
      `${process.env.baseApiUrl}/api/get/categories?store_url=${slug_url}`,
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
      setCategoryData(response.category_data);
    } else {
      return response;
    }
  };
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      {/* Top Banner */}
      <Sitebanner />

      <div className="siteWidth">
        {/* Product grids */}
        <div className="product__lists rest--pages__lists">
          {categoryData &&
            categoryData.length > 0 &&
            categoryData.map((catList) => {
              return (
                <CardImage
                  cardItem={`/submenu/${catList.slug}`}
                  cardImg={`${process.env.baseApiUrl}${catList.category_attachment.attachment_url}`}
                  // cardTitle="Burgers & Wraps"
                  key={catList.slug}
                />
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

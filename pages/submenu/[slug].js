import React, { useEffect, useState } from "react";
import CardImage from "../../components/CardImage/CardImage";
import Header from "../../components/Header/Header";
import { useRouter } from "next/router";

export default function BurgersWraps() {
  const router = useRouter();
  const slug_url = router.query.slug;
  useEffect(() => {
    if (slug_url && slug_url !== "") {
      subCategoryList(slug_url);
    }
    document.body.classList.add("rest__pages");
    document.body.classList.remove("home__page");
    document.body.classList.remove("steps");
    document.body.classList.remove("login__form");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("checkout__page");
    document.body.classList.remove("progress__page");
    document.body.classList.remove("profile__pages");
  }, [slug_url]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const subCategoryList = async (slug_url) => {
    const result = await fetch(
      `${process.env.baseApiUrl}/api/get/sub/categories?slug=${slug_url}`,
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
      setSubCategoryData(response.sub_category_data);
    } else {
      return response;
    }
  };
  console.log(subCategoryData, "SubcategoryData");
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      <div className="siteWidth">
        {/* Product grids */}
        {subCategoryData &&
          subCategoryData.length > 0 &&
          subCategoryData.map((subCatList) => {
            return (
              <div className="product__cate">
                <div className="prod_cate--name">
                  <h2 className="cateTitle">{`${subCatList.name}`}</h2>
                </div>
                <div className="product__lists prod__lists--content">
                  <CardImage
                    cardStepLink="yes"
                    cardImg="/images/bg.png"
                    cardTitle="Sunset Burgers"
                    cardPrice="$8.25"
                    cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                  />

                  <CardImage
                    cardStepLink="yes"
                    cardImg="/images/bg.png"
                    cardTitle="Starters"
                    cardPrice="$8.25"
                    cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                  />

                  <CardImage
                    cardStepLink="yes"
                    cardImg="/images/bg.png"
                    cardTitle="Chicken"
                    cardPrice="$8.25"
                    cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                  />

                  <CardImage
                    cardStepLink="yes"
                    cardImg="/images/bg.png"
                    cardTitle="Salads"
                    cardPrice="$8.25"
                    cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                  />
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

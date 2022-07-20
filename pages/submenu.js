import React, { useEffect, useState } from "react";
import CardImage from "../components/CardImage/CardImage";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";

export default function BurgersWraps() {
  const router = useRouter();
  const slug_url = router.query.slug;
  const [loading, setLoading] = useState(false);
  // console.log(  slug_url );
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
    setLoading(true);
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
      setLoading(false);
      // console.log( response );
      setSubCategoryData(response.sub_category_data);
    } else {
      return response;
    }
  };
  // console.log(subCategoryData, "Subcategory");
  return (
    <React.Fragment>
      <Header />
    {!loading && 
      <div className="siteWidth">
        
        {subCategoryData &&
          subCategoryData.length > 0 &&
          subCategoryData.map((subCatList) => {
            
            return (
              <div className="product__cate" key={subCatList.name}>
                <div className="prod_cate--name">
                  <h2 className="cateTitle">{`${subCatList.name}`}</h2>
                </div>
                <div className="product__lists prod__lists--content subMenu" >
                  {subCatList.item_data &&
                    subCatList.item_data.length > 0 &&
                    subCatList.item_data.map((itemList) => {
                      return (
                        <CardImage
                          cardStepLink="yes"
                          cardImg={`${process.env.baseApiUrl}${itemList?.item_attachment?.attachment_url}`}
                          cardTitle={itemList.name}
                          cardPrice={`$` + itemList.price}
                          cardDesc={itemList.description}
                          item_id={itemList.item_id}
                          item={itemList}
                          customize_status={itemList.customize_status}
                          key={itemList.item_id}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
}   {loading &&
  <>
  <div style={{ 'display': 'flex', 'justifyContent': 'center', marginTop: '15px' }}>
      <ClipLoader color='red' loading={loading} size={80} />
  </div>
</>
}
    </React.Fragment>
  );
}

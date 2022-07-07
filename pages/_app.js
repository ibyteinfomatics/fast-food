import "../styles/globals.css";


// import '../styles/responsive-styles.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "react-toastify/dist/ReactToastify.css";
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../store";
function MyApp({ Component, pageProps }) {
  return (
    <div className="site__wrapper">
      
       {/* <HashRouter> */}
       {/* <BrowserRouter > */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {/* </BrowserRouter> */}
      
      
      {/* </HashRouter> */}
    </div>
  );
}

export default MyApp;
// import Layout from "../components/layout";
// import Layout2 from "../components/layout2";
// import { useEffect, useState } from "react";

// function MyApp({ Component, pageProps }) {

//   const [theme, setTheme] = useState("")
//   useEffect(()=>{
//     setTheme(localStorage.getItem("theme"))
//   },[])

//     const getLayout = Component.pageLayout || ((page) => theme === "theme1"? <Layout>{page}</Layout>: <Layout2>{page}</Layout2> );

//     return getLayout(
//       <Provider store={store}>
//     <Component {...pageProps} />
//     </Provider>
//     );

// }

// export default MyApp;

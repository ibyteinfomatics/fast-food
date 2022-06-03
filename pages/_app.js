import "../styles/globals.css";
// import '../styles/responsive-styles.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="site__wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

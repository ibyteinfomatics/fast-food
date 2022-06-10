import "../styles/globals.css";
// import '../styles/responsive-styles.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store";
function MyApp({ Component, pageProps }) {
  return (
    <div className="site__wrapper">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;

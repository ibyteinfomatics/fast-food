
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header/Header'
// import "../components/layout.module.css"

export default function Layout2({ children }) {
    // console.log(children)
  return (
    <>
    <Provider store={store}>
        <div style={{backgroundColor: 'white'}}>
        {/* <Header /> */}
        <main >{children}</main>
        </div>
      
      </Provider>
    </>
  )
}

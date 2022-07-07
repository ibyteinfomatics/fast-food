
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header/Header'

export default function Layout({ children }) {
  return (
    <>
    <Provider store={store}>
        <div style={{backgroundColor: 'white', width: '100%', height: "100%"}}>
          <ul style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
            <li>hello </li>
            <li>hello 1</li>
            <li>hello 2</li>
            <li>hello 3</li>
            </ul>
        {/* <Header /> */}
        <main >{children}</main>
        </div>
      
      </Provider>
    </>
  )
}

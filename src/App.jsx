import { useState} from "react"; 
import './App.css'; 
import Navigation from "./components/Navigation"; 
import ImageMobile from "./components/ImageMobile";
import ProductText from "./components/ProductText";
import AddToCartBtn from "./components/AddToCartBtn";

function App() {
  const [isOverlay, setIsOverlay] = useState(false); 
  const [itemsInCart, setItemsInCart] = useState(0); 
  const [isLightbox, setIsLightbox] = useState(false); 

  const updateItemsInCart = (updatedNumber) => {
    setItemsInCart(updatedNumber)
  }

  const overlayOpenHandler = () => {
    setIsOverlay(true)
  }

  const overlayCloseHandler = () => {
    setIsOverlay(false); 
    setIsLightbox(false); 
  }

  const openLightboxHandler = () => {
    console.log("Clicked")
    if (window.innerWidth >= 1200) {
      setIsOverlay(true); 
      setIsLightbox(true); 
    }
  }

  return (
    <div className='app'>
      <Navigation isOverlay={isOverlay} overlayOpenHandler={overlayOpenHandler} overlayCloseHandler={overlayCloseHandler} updateItemsInCart={updateItemsInCart} itemsInCart={itemsInCart}/>
      <main>
        <ImageMobile isLightbox={false} overlayCloseHandler={overlayCloseHandler} openLightboxHandler={openLightboxHandler}/>
        <div className="app_text-and-cart-btn">
          <ProductText/>
          <AddToCartBtn updateItemsInCart={updateItemsInCart}/>
        </div>
      </main>
      {isOverlay && <div className='app_overlay' onClick={overlayCloseHandler}></div>}
      {isLightbox && <ImageMobile isLightbox={isLightbox} overlayCloseHandler={overlayCloseHandler} openLightboxHandler={openLightboxHandler}/>}
    </div>
  )
}

export default App

import { useState } from "react"; 
import "./Navigation.css"; 
import burger from "../assets/icon-menu.svg"; 
import logo from "../assets/logo.svg"; 
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import close from "../assets/icon-close.svg"; 
import productThumbnail from "../assets/image-product-1-thumbnail.jpg"; 
import iconDelete from "../assets/icon-delete.svg"

const Navigation = (props) => {
    const [checkoutShown, setCheckoutShown] = useState(false); 

    const showCheckoutHandler = () => {
        setCheckoutShown((prevState) => {return !prevState}) 
    }

    const deleteProductItems = () => {
        props.updateItemsInCart(0); 
    }

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav_logo-container">
                    <img role="button" tabIndex={0} className="nav_burger" src={burger} alt="Clickable burger menu to trigger mobile menu" onClick={props.overlayOpenHandler}/>
                    <img src={logo} alt="Sneakers company logo" />
                </div>
                <ul className="nav_link-container">
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="nav_cart-container">
                    <div className="nav_cart-icon-container" onClick={showCheckoutHandler}>
                        {props.itemsInCart > 0 && <div className="nav_items-in-cart">{props.itemsInCart}</div>}
                        <img src={cart} alt="Cart" role="button" tabIndex={0}/>
                    </div>
                    <img className="nav_avatar" src={avatar} alt="User avatar image" role="button" tabIndex={0}/>
                </div>
                <div className={`nav_checkout ${checkoutShown ? "nav_checkout--shown" : ""}`}>
                    <p className="nav_checkout-title">Cart</p>
                    <div className="nav_checkout-info">
                        {props.itemsInCart === 0 ?
                        <div className="nav_checkout-empty">Your cart is empty</div> : 
                        <div>
                            <div className="nav_checkout-description">
                                <img className="nav_checkout-img" src={productThumbnail}></img>
                                <p className="nav_checkout-text">Fall Limited Edition Sneakers <br></br>$125.00 x {props.itemsInCart} <span>${125 * props.itemsInCart}.00</span></p>
                                <img onClick={deleteProductItems} src={iconDelete} alt="" />
                            </div> 
                            <button className="nav_checkout-btn">Checkout</button>
                        </div> 
                        }
                    </div>
                </div>
            </nav>
            <nav className={`mobile-links ${props.isOverlay ? "shown" : ""}`}>
                <img src={close} alt="" onClick={props.overlayCloseHandler}/>
                <ul className="mobile-links_list-container">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation; 
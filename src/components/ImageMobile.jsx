import {useState} from "react"; 
import imgProduct1 from "../assets/image-product-1.jpg"; 
import imgProduct2 from "../assets/image-product-2.jpg"; 
import imgProduct3 from "../assets/image-product-3.jpg"; 
import imgProduct4 from "../assets/image-product-4.jpg"; 
import imgThumbnail1 from "../assets/image-product-1-thumbnail.jpg"; 
import imgThumbnail2 from "../assets/image-product-2-thumbnail.jpg"; 
import imgThumbnail3 from "../assets/image-product-3-thumbnail.jpg"; 
import imgThumbnail4 from "../assets/image-product-4-thumbnail.jpg"; 
import "./ImageMobile.css"; 

const ImageMobile = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    let images = [{
        src: imgProduct1, 
        alt: "Image of pair of shoes", 
    }, {
        src: imgProduct2, 
        alt: "Pair of shoes with stones and stick", 
    }, {
        src: imgProduct3, 
        alt: "A shoe on top of 2 stones", 
    }, {
        src: imgProduct4, 
        alt: "Shoe pointing left on the top of 2 stones", 
    }]; 

    const imgThumbnails = [imgThumbnail1, imgThumbnail2, imgThumbnail3, imgThumbnail4]

    const slideForwardHandler = () => {
        
        setCurrentIndex((prevState) => {
            console.log(prevState + 1)
            return prevState + 1 < images.length ? prevState + 1 : 0; ; 
        })
    }

    const slideBackwardHandler = () => {
        setCurrentIndex((prevState) => {
            console.log(prevState - 1)
            return prevState - 1 > -1 ? prevState - 1 : images.length - 1; 
        })
    }

    const carouselProperties = {
        display: "flex", 
        width: "100%", 
        position: "relative", 
        transform: `translateX(${-currentIndex * 100}%)`, 
        transition: "transform 0.2s ease-in"
    }

    return (
        <div className={`image-carousel_container ${props.isLightbox ? "lightbox" : ""}`}>
            <div className="image-mobile_container" >
                <svg role="button" tabIndex={0} onClick={props.overlayCloseHandler} className={`lightbox_close ${props.isLightbox ? "lightbox" : ""}`} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                <div role="button" tabIndex={0} className="image-mobile" onClick={props.openLightboxHandler}>
                    <div className="image-mobile_carousel-container" style={carouselProperties}>
                        {images.map((image, index) => {return <img key={index} src={image.src} className={image.className} alt={image.alt}></img>})}
                    </div>
                </div>
                <button className={`image-mobile_next-btn image-mobile_btn ${props.isLightbox ? "lightbox" : ""}`} onClick={slideForwardHandler}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></button>
                <button className={`image-mobile_prev-btn image-mobile_btn ${props.isLightbox ? "lightbox" : ""}`} onClick={slideBackwardHandler}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></button>
            </div>
            <div className="image-mobile_thumbnail-container">
                {imgThumbnails.map((image, index) => {return <div role="button" tabIndex={0} className={`image-mobile_thumbnail ${currentIndex === index ? "selected" : ""}`} onClick={() => {setCurrentIndex(index)}}> <div className="thumbnail_overlay"></div> <img key={index} src={image} alt={`image thumbnail #${index}`}></img> </div>})}
            </div>
        </div>
    )
}

export default ImageMobile; 
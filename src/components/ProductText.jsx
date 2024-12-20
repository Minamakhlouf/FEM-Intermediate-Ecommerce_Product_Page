import "./ProductText.css"; 

const ProductText = () => {
    return (
        <div className="product-text">
            <p className="product-text_company">Sneaker Company</p>
            <h1 className="product-text_heading">Fall Limited Edition Sneakers</h1>
            <p className="product-text_paragraph">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="product-text_prices">
                <div className="product-text_price-and-discount">
                    <div className="product-text_price-new">$125.00</div>
                    <div className="product-text_discount">50%</div>
                </div>
                <div className="product-text_price-old">$250</div>
            </div>
        </div>
    )
}

export default ProductText; 
import React from 'react'
import "./Product.css"
import StarRateIcon from '@material-ui/icons/StarRate';

function Product( {rating ,title,price} ) {
    return (
        <div className="product">
            <div className="product__info">
                <h3 className="Product__title">
                    {title}
                </h3>
                <p className="product_proce">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_)=>{
                    return  <StarRateIcon style={{color:"gold"}}/>
                    })}
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/71pPoxFzUSL._AC_UY218_.jpg" alt="Product" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product

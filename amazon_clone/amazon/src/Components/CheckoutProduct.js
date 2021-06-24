import React from 'react';
import "./CheckoutProduct.css";
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckoutProduct({rating ,title,price,img} ) {
    return (
        <div className="CheckoutProduct">
            <img src={img} className="CheckoutProduct__img" />
            <div className="product__info">
                <h3 className="Product__title">
                    {title}
                </h3>
                <p className="product_price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_)=>{
                    return  <StarRateIcon style={{color:"gold"}}/>
                    })}
                </div>
                <button className="CheckoutProduct__btn">remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

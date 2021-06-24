import React from 'react'
import "./Product.css"
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from "./StateProvider";

function Product( {rating ,title,price,img} ) {
    //basket is a state which is extracted from data layer 
    // dispatch is like a delivery boy which takes data to data layer
    const [{ basket },dispatch] = useStateValue();

    const basketchange=()=>{
        //add items to basket
        dispatch({
            type:"add_to_basket",
            items:{
                img:img,
                title:title,
                price:price,
                rating:rating
            }
        })
    }

    return (
        <div className="product">
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
            </div>
            <img src={img} alt="Product" />
            <button onClick={basketchange}>Add to basket</button>
        </div>
    )
}

export default Product

import React from 'react';
import  "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img src="https://www.lemonlight.com/app/uploads/2018/10/Your-Complete-Guide-to-Amazon-Advertising.png"
            alt="add" className="add__img" 
            style={{width:"100%",
            maxHeight:"200px",
            objectFit:"cover"}}/>
            {   basket?.length === 0 ? (
                    <div>
                        <h1>your shopping cart is empty</h1>
                        <h4>you have to add a items in basket for display items here.</h4>
                    </div>
            ):(
                    <div className="checkout__product"
                    style={{padding:"10px"}}>
                        <h1
                        style={{marginBottom:"10px"}}>Your shopping cart.</h1>
                        {
                            basket.map(item=>(
                                <CheckoutProduct 
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                img={item.img}/>
                            ))
                        }
                    </div>
            )}
        </div>
    )
}

export default Checkout

import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Sherni/Launch/1500x600_Hero-Tall_JPN._CB666415459_.jpg" alt="Banner" className="home__bgimg" />
            <div className="home__row">
                <Product title="CP3 Gaming Keyboard RGB Wired Keyboard Anti-ghosting 87 Key Mechanical Keyboard with Blue Switches for Laptop, Windows, PC Games and Work"
                price="20.00"
                rating={5}
                img="https://m.media-amazon.com/images/I/71pPoxFzUSL._AC_UY218_.jpg"/>
                <Product title="CP3 Gaming Keyboard RGB Wired Keyboard Anti-ghosting 87 Key Mechanical Keyboard with Blue Switches for Laptop, Windows, PC Games and Work"
                price="20.00"
                rating={5}
                img="https://m.media-amazon.com/images/I/71pPoxFzUSL._AC_UY218_.jpg"/>
                <Product title="CP3 Gaming Keyboard RGB Wired Keyboard Anti-ghosting 87 Key Mechanical Keyboard with Blue Switches for Laptop, Windows, PC Games and Work"
                price="20.00"
                rating={5}
                img="https://m.media-amazon.com/images/I/71pPoxFzUSL._AC_UY218_.jpg"/>
                
            </div>
            <div className="home__row">
            <Product title="CP3 Gaming Keyboard RGB Wired Keyboard Anti-ghosting 87 Key Mechanical Keyboard with Blue Switches for Laptop, Windows, PC Games and Work"
                price="20.00"
                rating={5}
                img="https://m.media-amazon.com/images/I/71pPoxFzUSL._AC_UY218_.jpg"/>
                <Product title="CP3 Gaming Keyboard RGB Wired Keyboard Anti-ghosting 87 Key Mechanical Keyboard with Blue Switches for Laptop, Windows, PC Games and Work"
                price="20.00"
                rating={5}
                img="https://m.media-amazon.com/images/I/71pPoxFzUSL._AC_UY218_.jpg"/>
            </div>
            <div className="home__row">
            <Product title="CP3 Gaming Keyboard RGB Wired Keyboard Anti-ghosting 87 Key Mechanical Keyboard with Blue Switches for Laptop, Windows, PC Games and Work"
                price="20.00"
                rating={5}
                img="https://m.media-amazon.com/images/I/71pPoxFzUSL._AC_UY218_.jpg"/>
            </div>
            
        </div>
    )
}

export default Home

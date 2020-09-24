import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://wallpapercave.com/wp/wp7513911.jpg" alt="" />

            <Product
                id="17"
                title="Top Smartphones for you"
                price={18500}
                rating={4.9}
                image="https://m.media-amazon.com/images/I/31p6xPC+3LL._AC_UY218_.jpg"
    
            />

        </div>
    )
}

export default Home;

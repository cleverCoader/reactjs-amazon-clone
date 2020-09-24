import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://wallpapercave.com/wp/wp7513911.jpg" alt="" />

            <div className="home__row">
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519751.jpg"
                />
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519611.jpg"
                />
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519749.jpg"
                />
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519749.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519751.jpg"
                />
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519746.jpg"
                />
                
            </div>

            <div className="home__row">
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519751.jpg"
                />        
            </div>

            <div className="home__row">
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519751.jpg"
                />
                <Product
                id="17"
                title="Top Smart TV's for you"
                price={18500}
                rating={4.9}
                image="https://wallpapercave.com/wp/wp7519611.jpg"
                />
                
            </div>


        </div>
    )
}

export default Home;

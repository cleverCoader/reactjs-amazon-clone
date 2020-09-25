import React from 'react';
import './Home.css';
import Product from './Product';
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards/Cards';


function Home() {
    return (
        <div className="home ">
            <div className="home_baground">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/GW_Hero/Main_Desktop_1500x600_DS._CB404300086_.jpg"
                    height="600px" width="1500px"
                    alt="" />
            </div>
            <div className="cards">
                <Cards />
            </div>
        </div>
    )
}

export default Home;

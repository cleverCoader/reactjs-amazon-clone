import React from 'react';
import Card from './Card';

function Cards() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <Card
                        heading="All-new Echo Dot"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/379x304_Desktop_Card_BE_01._SY304_CB404301999_.jpg"
                        description="powerful bass"
                        price="$64"
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <Card
                        heading="New Echo Dot with clock"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/06_379x304_Desktop_Card_GE._SY304_CB404302721_.jpg"
                        description="LED Display"
                        price="$80"
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
                    <Card
                        heading="Smartify your home"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/05_379X304_Desktop_Card_SH._SY304_CB404302803_.jpg"
                        description="experience the magic of Alexa"
                        price="$50"
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <Card
                        heading="All-new Fire TV stick"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/02_379x304_Desktop_Card_SP._SY304_CB404302689_.jpg"
                        description="experience the magic of fire Tv"
                        price="$50"
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <Card
                        heading="All-new Echo Dot"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/379x304_Desktop_Card_BE_01._SY304_CB404301999_.jpg"
                        description="powerful bass"
                        price="$64"
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <Card
                        heading="New Echo Dot with clock"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/06_379x304_Desktop_Card_GE._SY304_CB404302721_.jpg"
                        description="LED Display"
                        price="$80"
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
                    <Card
                        heading="Smartify your home"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/05_379X304_Desktop_Card_SH._SY304_CB404302803_.jpg"
                        description="experience the magic of Alexa"
                        price="$50"
                    />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <Card
                        heading="All-new Fire TV stick"
                        imgSrc="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/02_379x304_Desktop_Card_SP._SY304_CB404302689_.jpg"
                        description="experience the magic of fire Tv"
                        price="$50"
                    />
                </div>
            </div>
        </div>
    )
}

export default Cards

// App.jsx
import React from 'react';
import MapComponent from './store/Store1';
import Store2 from './store/Store2';
import Store3 from './store/Store3';
import Footer from './welcome/Footer';


const Store = () => {
    return (
        <html>
        <head>
        <title>Page Title</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
        // Add the new slick-theme.css if you want the default styling
        <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
        <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="slick/slick.min.js"></script>
        </head>
        <body>
            <Store2/>
            <MapComponent />
            <Store3/>
            <Footer/>
        </body>
      </html>
        
    );
};

export default Store;

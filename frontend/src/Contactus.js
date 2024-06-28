import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main4 from './welcome/Main4';
import Footer from './welcome/Footer';
import Contact1 from './contact/Contact1';
import Contact2 from './contact/Contact2';
import Contact3 from './contact/Contact3';



function Contactus() {
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
            <Contact1/>
            <Contact2/>
            <Contact3/>
            <Footer/>
        </body>
      </html>
    
  );
}

export default Contactus;

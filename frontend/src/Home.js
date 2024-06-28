import './App.css';
import Main1 from './welcome/Main1';
import Main2 from './welcome/Main2';
import Main3 from './welcome/Main3';
import Main4 from './welcome/Main4';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main5 from './welcome/Main5';
import Main6 from './welcome/Main6';
import Footer from './welcome/Footer';


function App() {
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
          <Main1/>
          <Main2/>
          <Main3/>
          <Main4/>
          <Main5/>
          <Main6/>
          <Footer/>
        </body>
      </html>
    
  );
}

export default App;

import './style.css';
import React from "react";
import image9 from './photos/img2.jpg';
import image10 from './photos/img3.jpg';
import image11 from './photos/img5.jpg';
import image12 from './photos/img9.jpg';
import image13 from './photos/img11.jpg';
import image14 from './photos/img12.jpg';
import image15 from './photos/img16.jpg';
import image16 from './photos/img17.jpg';
import image17 from './photos/img18.jpg';
import image18 from './photos/img20.jpg';
import image19 from './photos/img23.jpg';
import Slider from "react-slick";

function Main5(){
    var settings = {
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1199, // screen width between 481px and 768px
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480, // screen width below 480px
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return(
        <section className='main5_div'>
            <div className='container'>
                <div className='main5_head'>
                    <div className='row m-0'>
                        <div className='col-lg-4 p-0'>
                            <hr className='hori'/>
                        </div>
                        <div className='col-lg-4 p-0 text-center'>
                            <h2 className='main3_heading'> Our Partners</h2>
                        </div>
                        <div className='col-lg-4 p-0'>
                            <hr className='hori'/>
                        </div>
                    </div>
                </div>
            </div>
            <div  className='slide_main5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Slider {...settings}>
                            <div ><img src={image9} className='slide_img' alt='images'/></div>
                            <div ><img src={image10} className='slide_img' alt='images'/></div>
                            <div ><img src={image11} className='slide_img' alt='images'/></div>
                            <div ><img src={image12} className='slide_img' alt='images'/></div>
                            <div ><img src={image13} className='slide_img' alt='images'/></div>
                            <div ><img src={image14} className='slide_img' alt='images'/></div>
                            <div ><img src={image15} className='slide_img' alt='images'/></div>
                            <div ><img src={image16} className='slide_img' alt='images'/></div>
                            <div ><img src={image17} className='slide_img' alt='images'/></div>
                            <div ><img src={image18} className='slide_img' alt='images'/></div>
                            <div ><img src={image19} className='slide_img' alt='images'/></div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main5;
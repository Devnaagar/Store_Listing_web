import './style.css';
import React from "react";
// import image8 from './photos/bgfoodt.png';
import Slider from "react-slick";

function Main4(){
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1199, // screen width between 481px and 768px
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, // screen width below 480px
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    
    return(
        <section className='main4_back'>
            <div className='main4_div '>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div><h1 className='main4_head'>The foundation and pillars of our business </h1></div>
                    </div>
                    <div className='col-lg-9'>
                        <Slider {...settings}>
                            <div className='slide_box '><div className='slide_sub_box'><p>Enter a world of infinite possibilities with our wide range of products.</p></div> </div>
                            <div className='slide_box'><div className='slide_sub_box'><p>Enter a world of infinite possibilities with our wide range of products.</p></div> </div>
                            <div className='slide_box'><div className='slide_sub_box'><p>Enter a world of infinite possibilities with our wide range of products.</p></div> </div>
                            <div className='slide_box'><div className='slide_sub_box'><p>Enter a world of infinite possibilities with our wide range of products.</p></div> </div>
                            <div className='slide_box'><div className='slide_sub_box'><p>Enter a world of infinite possibilities with our wide range of products.</p></div> </div>
                            <div className='slide_box'><div className='slide_sub_box'><p>Enter a world of infinite possibilities with our wide range of products.</p></div> </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main4;


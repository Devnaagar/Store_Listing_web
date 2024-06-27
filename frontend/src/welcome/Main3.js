import './style.css';
import image5 from './photos/basket1.png';
import image6 from './photos/basket2.png';
import image7 from './photos/basket3.png';

function Main3(){
    return (
        <section className='main3_body'>
            <div className='main3_head'>
                <div className='row m-0'>
                    
                    <div className='col-lg-3 p-0'>
                        <hr className='hori'/>

                    </div>
                    <div className='col-lg-6 p-0 text-center'>
                        <h2 className='main3_heading'> Discover our range of products</h2>
                    </div>
                    <div className='col-lg-3 p-0'>
                        <hr className='hori'/>
                    </div>
                </div>
            </div>
            <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active slide_tab" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2" className='slide_tab'></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3" className='slide_tab'></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active h-50" data-bs-interval="1500">
                        <div className="container">
                            <div className='row'>
                                <div className='col-lg-7 d-flex justify-content-between sep_bg1'>
                                    <div className='col-lg-8 d-flex align-items-center'>
                                        <div className='main_sub_text1'>
                                            <p>"Freshness you can taste, health you can trust. Straight from the farm to your plate".</p>
                                            <a href='#' className='all_products d-flex justify-content-center'><h4>Know More</h4><span className='ms-2'><i class="fa-solid fa-share"></i></span></a>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'></div>
                                </div>
                                <div className='col-lg-5 d-flex justify-content-center align-items-center sep_bg2 '>
                                    <img src={image5} className="d-block w-75 image2" alt="..." />
                                    <div className='color_box'></div>
                                    <div className='col-lg-8'>
                                        <a href='#' className='all_products d-flex'><h4>See All Products</h4><span className='ms-2'><i class="fa-solid fa-share"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-50" data-bs-interval="1500">
                        <div className="container">
                            <div className='row'>
                                <div className='col-lg-7 d-flex justify-content-between sep_bg1'>
                                    <div className='col-lg-8 d-flex align-items-center'>
                                        <div className='main_sub_text1'>
                                            <p>"Freshness you can taste, health you can trust. Straight from the farm to your plate".</p>
                                            <a href='#' className='all_products d-flex justify-content-center'><h4>Know More</h4><span className='ms-2'><i class="fa-solid fa-share"></i></span></a>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'></div>
                                </div>
                                <div className='col-lg-5 d-flex justify-content-center align-items-center sep_bg2 '>
                                    <img src={image6} className="d-block w-75 image2" alt="..." />
                                    <div className='color_box'></div>
                                    <div className='col-lg-8'>
                                        <a href='#' className='all_products d-flex'><h4>See All Products</h4><span className='ms-2'><i class="fa-solid fa-share"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-50" data-bs-interval="1500">
                        <div className="container">
                            <div className='row'>
                                <div className='col-lg-7 d-flex justify-content-between sep_bg1'>
                                    <div className='col-lg-8 d-flex align-items-center'>
                                        <div className='main_sub_text1'>
                                            <p>"Freshness you can taste, health you can trust. Straight from the farm to your plate".</p>
                                            <a href='#' className='all_products d-flex justify-content-center'><h4>Know More</h4><span className='ms-2'><i class="fa-solid fa-share"></i></span></a>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'></div>
                                </div>
                                <div className='col-lg-5 d-flex justify-content-center align-items-center sep_bg2 '>
                                    <img src={image7} className="d-block w-75 image2" alt="..." />
                                    <div className='color_box'></div>
                                    <div className='col-lg-8'>
                                        <a href='#' className='all_products d-flex'><h4>See All Products</h4><span className='ms-2'><i class="fa-solid fa-share"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main3;
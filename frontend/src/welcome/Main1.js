// import image1 from './image1.jpg';
import image2 from './photos/image2.jpg';
import image3 from './photos/amzngo1.jpeg';
import image4 from './photos/amzngo1.jpeg';
import './style.css';



function Main1(){
    return(
        <section>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active slide_tab" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className='slide_tab'></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className='slide_tab'></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active h-75 " data-bs-interval="3000">
                        <img src={image2} className="d-block w-100 opacity-100 image" alt="..." />
                        <div className="carousel-caption d-md-block ">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h1 className='main_text'>"Welcome to Kin Marche! Where every aisle is an adventure waiting to happen "</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='container'> */}
                        <div className="carousel-item h-75" data-bs-interval="3000">
                            <img src={image3} className="d-block w-100 opacity-100 image" alt="..." />
                            <div className="carousel-caption d-md-block">
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <h1 className='main_text'>"Welcome to Kin Marche! Where every aisle is an adventure waiting to happen "</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    <div className="carousel-item h-75 " data-bs-interval="3000">
                        <img src={image4} className="d-block w-100 opacity-100 image" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h1 className='main_text'>"Welcome to Kin Marche! Where every aisle is an adventure waiting to happen "</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main1;
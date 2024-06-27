import './style.css';
import image4 from './photos/bagfood.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Main2(){
    return(
        <section className='main2_sect' >
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h1 className='main2_head'>WELCOME TO </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 '>
                        <img src={image4} alt='image4' className='w-100'/>
                    </div>
                    <div className='col-lg-6'>
                        <div className='row'><h1 className='main2_sub_head'>Kin Marche</h1></div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <p className='para_1'>From a modest start in 2004 with a single store, Kin Marché has, in the space of 19 years, gained a foothold in a number of towns in the DRC. Kin Marché has become an undisputed retail leader, with a presence in Kinshasa, Katanga, Kivu, Matadi and Boma. We strive to satisfy our customers not only by providing them with essential products for every household, but also by offering them an exceptional shopping experience through the best price, the best quality, a great variety of products and the best service.</p>
                            </div>
                        </div>
                        <div className='row'><a className='more_1 d-flex' ><p>Know More</p><span className='ms-3'><i class="fa-solid fa-share"></i></span></a></div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Main2;
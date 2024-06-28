import './style2.css';

function Contact2(){
    return(
        <section className='contact2_div py-5'>
            <div className='container py-3'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='contact_sub_div'>
                            <div className='row m-0'>
                                <div className='col-lg-2 d-flex justify-content-end align-items-center'>
                                    <a className='contact_icon'><i class="fa-solid fa-phone"></i></a>
                                </div>
                                <div className='col-lg-10'>
                                    <h5 className='text-danger'>CALL US 24/7</h5>
                                    <h4 className='text-dark contact_info'>+243 89 144 1111</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='contact_sub_div'>
                            <div className='row m-0'>
                                <div className='col-lg-2 d-flex justify-content-end align-items-center'>
                                    <a className='contact_icon'><i class="fa-solid fa-phone"></i></a>
                                </div>
                                <div className='col-lg-10'>
                                    <h5 className='text-danger'>MAKE A QUOTE</h5>
                                    <h4 className='text-dark contact_info'>info@kinmarche.com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='contact_sub_div p-3'>
                            <div className='row m-0'>
                                <div className='col-lg-2 d-flex justify-content-end align-items-center'>
                                    <a className='contact_icon'><i class="fa-solid fa-phone"></i></a>
                                </div>
                                <div className='col-lg-10'>
                                    <h5 className='text-danger'>SERVICE STATION
                                    </h5>
                                    <h4 className='text-dark contact_info'>KIN MARCHE Au Prix du Grand Marche</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact2;
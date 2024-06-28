import './style.css';

function Footer(){
    return (
        <section className='footer_div'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-6 col-md-5 col-sm-5 '>
                        <div className='footer_box'>
                            <h4 className='footer_sub_head'>Kinmarche</h4 >
                            <ul className='footer_list'>
                                <li className='list_item'><a className='footer_link' href='#'>Welcome</a></li>
                                <li className='list_item'><a className='footer_link' href='#'>About Us</a></li>
                                <li className='list_item'><a className='footer_link' href='#'>Store Location</a></li>
                                <li className='list_item'><a className='footer_link' href='#'>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="vr mb-3" style={{width:2 +'px',padding:0,height:320 + 'px'}}></div>
                    <div className='col-lg-2 col-5 col-md-5 col-sm-5 mb-3'>
                        <div className='footer_box'>
                            <h4 className='footer_sub_head'>Our Categories</h4 >
                            <ul className='footer_list'>
                                <li className='list_item'><a className='footer_link' href='#'>Fresh products</a></li>
                                <li className='list_item'><a className='footer_link' href='#'>Grocery store</a></li>
                                <li className='list_item'><a className='footer_link' href='#'>Drinks </a></li>
                                <li className='list_item'><a className='footer_link' href='#'>Health and beauty</a></li>
                                <li className='list_item'><a className='footer_link' href='#'>Non-food</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="vr mb-3" style={{width:2 +'px',padding:0,height:320 + 'px'}}></div>
                    <div className='col-lg-3 col-md-4 col-sm-4 col-10'>
                        <div className='footer_box'>
                            <h4 className='footer_sub_head'>Reach out to us</h4 >
                            <ul className='footer_list ps-2'>
                                <li className='list_item py-2'><a className='footer_link' href='#'><i class="fa-solid fa-location-dot"></i> KIN MARCHE Au Prix du Grand Marche</a></li>
                                <li className='list_item py-2'><a className='footer_link' href='#'> <i class="fa-solid fa-phone"></i> +243 89 144 1111</a></li>
                                <li className='list_item py-2'><a className='footer_link' href='#'> <i class="fa-solid fa-envelope"></i> info@kinmarche.com </a></li>
                                <li className='list_item py-2 d-flex'>
                                    <a className='footer_link1' href='#'><i class="fa-brands fa-facebook foot_icon"></i></a>
                                    <a className='footer_link1' href='#'><i class="fa-brands fa-instagram foot_icon"></i></a>
                                    <a className='footer_link1' href='#'><i class="fa-brands fa-youtube foot_icon"></i></a>
                                    <a className='footer_link1' href='#'><i class="fa-brands fa-linkedin foot_icon"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="vr" style={{width:2 +'px',padding:0,height:320 + 'px'}}></div>
                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                        <div className='App_form'>
                            <form>
                                <div className='row mb-2'><h3 className='form_head'>Application Form</h3></div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <div className='form-group'>
                                            <label for="name" className='form-label'>Name</label>
                                            <input className='form-control' name='name' id='name'/>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <div className='form-group'>
                                            <label for="Phone" className='form-label'>Phone</label>
                                            <input className='form-control' name='Phone' id='Phone'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'> 
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <div className='form-group'>
                                            <label for="email" className='form-label'>Email</label>
                                            <input className='form-control' name='email' id='email'/>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <div className='form-group'>
                                            <label for="description" className='form-label'>Description</label>
                                            <textarea className='form-control' name='description' id='description'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='btn_div'>
                                        <button className='btn btn-secondary'>Save</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;
import './style2.css';

function Contact3(){
    return(
        <section className='contact2_div'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='touch_box mb-4'>
                            <div className='row'><h5 className='text-center'>Get In Touch</h5></div>
                            <div className='row'><h1 className='text-center contact_info'>Needs Help? Let’s Get in Touch</h1></div>
                            <form>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='form-group p-4'>
                                            <label className='form-label' for="name"><h4>Name</h4></label>
                                            <input className='form-control' name='name' id='name'/>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group p-4'>
                                            <label className='form-label' for="phone"><h4>Phone</h4></label>
                                            <input className='form-control' name='phone' id='phone'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group p-4'>
                                            <label className='form-label' for="email"><h4>Email</h4></label>
                                            <input className='form-control' name='email' id='email'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group p-4'>
                                            <label className='form-label' for="desc"><h4>Description</h4></label>
                                            <textarea className='form-control' rows={10} name='desc' id='desc'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row my-3'>
                                    <div className='col-lg-12 d-flex justify-content-center mb-4'>
                                        <button className=' button_send'>Send</button>
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

export default Contact3;
import './style1.css';
import image20 from './photos/students.jpg'

function About6(){
    return(
        <section className='about2_div'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 me-5 d-flex align-items-center'>
                        <div className='vision_box'>
                            <div className='row'>
                                <h1 className='div_head'>Commitment</h1>
                            </div>
                            <div className='row'>
                                <div className='sub_para'>
                                    <p className='list_item_vision'>Serving our communities for a better life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <img src={image20} alt='images' className='about2_img w-100'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About6;
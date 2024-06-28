import './style1.css';
import image20 from './photos/students.jpg'

function About5(){
    return(
        <section className='about2_div'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={image20} alt='images' className='about2_img w-100'/>
                    </div>
                    <div className='col-lg-7 ms-5 d-flex align-items-center'>
                        <div className='vision_box'>
                            <div className='row'>
                                <h1 className='div_head'>Value</h1>
                            </div>
                            <div className='row'>
                                <div className='sub_para'>
                                    <p className='list_item_vision'>Ambitious, hardworking, resourceful, united, confident and courageous.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About5;
import './style1.css';
import image20 from './photos/students.jpg'

function About3(){
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
                                <h1 className='div_head'>Vision</h1>
                            </div>
                            <div className='row'>
                                <div className='sub_para'>
                                    <ul>
                                        <li className='list_item_vision'> To become the brand preferred by consumers.</li>
                                        <li className='list_item_vision'> To be a company that is loyal and fair to its partners, offering strong growth prospects.
                                        </li>
                                        <li className='list_item_vision'> Become the brand recognized for its standards of excellence and ethics.</li>
                                        <li className='list_item_vision'> To have professional, responsible, autonomous and respected employees.</li>
                                        <li className='list_item_vision'>To be a modern company integrating the best technologies.</li>
                                        <li className='list_item_vision'> To be a family business that respects its customers, partners and institutions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;
import './style3.css';
import Image3 from './photo/mission.jpg'

function Store3(){
    return(
        <section className='store3_div mb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={Image3} alt='image1' className='w-100'/>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <div className='store_info_div p-4'>
                            <div className='row'>
                                <h2 className='text-danger'>OUR STORES</h2>
                            </div>
                            <div className='row'>
                                <h3 className='store_sub_head'>Kin Marché currently operates in 41 locations in the Democratic Republic of Congo</h3>
                            </div>
                            <div className='row'>
                                <p>In Kinshasa, Boma, Matadi, Lubumbashi, Kolwezi, Likasi and Goma. Kin Marché plans to expand over the next five years, with the aim of becoming the leading Congolese supermarket chain in the DRC. The first store opened in Kinshasa in 2004, at 11 avenue de la presse on Boulevard du 30 juin.</p>
                            </div>
                        </div>
                    </div>
                    {/* <h1 className='text-center'>Contact Us</h1> */}
                </div>
            </div>
        </section>
    )
}

export default Store3;
import logo from './photos/hereisLOGO.png';
import './style.css';

function Navbar(){
    return (
            <div className="container fixed-top mt-2">
                <div className="row sticky-top">
                    <div className="col-lg-12 sticky-top">
                        <nav className="navbar navbar-expand-lg rounded-4 p-0">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
                                        <li className="nav-item d-flex align-items-center">
                                            <a className="nav-link d-flex align-items-center" aria-current="page" href="/"><b><h6 className='nav_change m-0'>WELCOME</h6></b></a>
                                        </li>
                                        <li className="nav-item d-flex align-items-center">
                                            <a className="nav-link d-flex align-items-center" href="/about"><b><h6 className='nav_change m-0'>ABOUT US</h6></b></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-0" href="/main">
                                                <img src={logo} alt='logo' className='nav_image'/>
                                            </a>
                                        </li>
                                        <li className="nav-item d-flex align-items-center">
                                            <a className="nav-link d-flex align-items-center" href="/stores"><b><h6 className='nav_change m-0'>STORE LOCATION</h6></b></a>
                                        </li>
                                        <li className="nav-item d-flex align-items-center">
                                            <a className="nav-link d-flex align-items-center" href="/main/contact"><b><h6 className='nav_change m-0'>CONTACT US</h6></b></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    )
}

export default Navbar;
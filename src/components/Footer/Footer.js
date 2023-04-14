import React from 'react'
import logo from '../../image/Group 9969.png'
import './Footer.css'
export default function Footer() {
    return (
        <div className='bg-dark'>
            <footer className='py-5'>
                <div className='container'>
                    <div className='row common'>
                        <div className='col-lg-4'>
                            <h3 className='text-white'>UnityHub</h3>
                            <p className='text-light'>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
                            <img src={logo} alt='UnityHub Logo' className='img-fluid mb-3' />
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Company</h6>
                            <p className='text-light'>About Us</p>
                            <p className='text-light'>Work</p>
                            <p className='text-light'>Latest News</p>
                            <p className='text-light'>Careers</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Product</h6>
                            <p className='text-light'>Prototype</p>
                            <p className='text-light'>Plans & Pricing</p>
                            <p className='text-light'>Customers</p>
                            <p className='text-light'>Integrations</p>
                            


                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Support</h6>
                            <p className='text-light'>Help Desk Us</p>
                            <p className='text-light'>Sales</p>
                            <p className='text-light'>Become a Partner</p>
                            <p className='text-light'>Developers</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Contact</h6>
                            <p className='text-light'> 524 Broadway , NYC Us</p>
                            <p className='text-light'>+1 777-978-5570</p>
                           
                        </div>
                    </div>
                    <hr className='hr' />
                    <div className='row'>
                        <div className='col-md-6 text-md-start text-center'>
                            <p className='text-light'>&copy; 2023 NikHub. All Rights Reserved</p>
                        </div>
                        <div className='col-md-6 text-md-end text-center'>
                            <p className='text-light'>Powered by NikHub</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

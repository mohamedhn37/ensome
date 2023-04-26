import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png'
import { FaBasketballBall, FaBehanceSquare, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
        <div className="container-fluid footer">
            <div className="row subscribe">
                <div className="col-md-6">
                    <h2 className='text-white'>Subscribe to our newsletter</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className="col-md-6 newsletter">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control bgForm" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn bg-white" type="button" id="button-addon2">Send</button>
                    </div>
                </div>
            </div>
            <div className="row QuickLinks">
                <div className="col-md-4 description">
                    <Image src={logo} alt="logo" width={141} height={46}/>
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>    
                    <Link href="#"><FaFacebook className='me-4 text-white fs-5'/></Link>
                    <Link href="#"><FaTwitter className='me-4 text-white fs-5'/></Link>
                    <Link href="#"><FaLinkedin className='me-4 text-white fs-5'/></Link>
                    <Link href="#"><FaYoutube className='me-4 text-white fs-5'/></Link>
                    <Link href="#"><FaBasketballBall className='me-4 text-white fs-5'/></Link>
                    <Link href="#"><FaBehanceSquare className='me-4 text-white fs-5'/></Link>
                </div>
                <div className="col-md-2 links">
                    <h4 className='text-white'>Quick link</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Home</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Solutions</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Blog</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Contacts</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Our team</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>About Us</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Services</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>FAQ</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="col-md-2 links">
                    <h4 className='text-white'>Service</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Pages</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Elements</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>FAQ</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Pricing</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>Site map</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 links">
                    <h4 className='text-white'>Contact infos</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>ensome@info.co.us</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>+1 601-201-5580</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/" className='text-decoration-none'>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="row copyright">
                <div className="col-md-6">
                    <p>&copy; Ensome. Design with &hearts; by MH-MOZART.</p>
                </div>
                <div className="col-md-6 privacy">
                    <p><Link href='#'>Privacy Policy</Link></p>
                    <p><Link href='#'>Terms of us Policy</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
import TitleHead from '@/components/TitleHead'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
    <div className="container-fluid contact" id='Contact'>
        <div className="row">
            <div className="col-md-6">
                <TitleHead title="Contact information" className='sectiontitle'/> 
                <p className='col-grey my-4'>Fill up the form and our Team will get back to you with 25 hours.</p>
                <ul className='list-unstyled'>
                        <li className='my-2'>
                            <FaEnvelope className='me-3 text-primary'/><Link href="/" className='text-decoration-none text-dark'>ensome@info.co.us</Link>
                        </li>
                        <li className='my-2'>
                            <FaPhoneAlt className='me-3 text-primary'/><Link href="/" className='text-decoration-none text-dark'>+1 601-201-5580</Link>
                        </li>
                        <li className='my-2'>
                            <FaMapMarkerAlt className='me-3 text-primary'/><Link href="/" className='text-decoration-none text-dark'>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</Link>
                        </li>
                </ul>
            </div>
            <div className="col-md-6">
                <form>
                    <div className='userInfo'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type="text" placeholder='Name'/>
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type="email" placeholder='Email'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Theme</label>
                        <input type="text" placeholder='Job'/>
                    </div>
                   <div className="form-group">
                        <label>Message</label>
                        <input type="text" placeholder='Your Message'/>
                   </div>
                    <button className="btn btn-primary px-5 float-end">SEND</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
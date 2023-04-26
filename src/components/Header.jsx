import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png'
import { FaRegPlayCircle } from 'react-icons/fa';


const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg header">
        <div className="container">
            <Link className="navbar-brand" href="/"><Image src={logo} width={141} height={46} alt='Company Name'/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" href="#Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Solutions</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#Contact">Contacts</Link>
                    </li>
                    <li className='ms-5'>
                         <button className="btn bg-white"> <FaRegPlayCircle height={24} width={24} className='fs-5'/> Watch the demo</button>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header
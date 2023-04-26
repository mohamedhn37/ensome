import Image from 'next/image'
import React from 'react'
import benifit from '../img/benifit.png'
import TitleHead from '@/components/TitleHead'
import { FaBrain, FaCompressArrowsAlt, FaKey } from 'react-icons/fa'


const Benifit = () => {
  return (
    <>
        <div className="container-fluid my-5 benefit">
            <div className="row align-items-center m-auto">
                <div className="col-md-6">
                    <Image src={benifit} alt="logo" width={540} height={358}/>
                </div>
                <div className="col-md-6">
                    <TitleHead title="The benefits of Ensome"/>
                    <div className="row">
                        <div className="col-md-12">
                            <h6><FaBrain className='me-3 text-primary'/>Machine learning</h6>
                            <p className='col-grey'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                        </div>
                        <div className="col-md-12">
                            <h6><FaCompressArrowsAlt className='me-3 text-primary'/>Embed analytics</h6>
                            <p className='col-grey'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                        </div>
                        <div className="col-md-12">
                            <h6><FaKey className='me-3 text-primary'/>Access control</h6>
                            <p className='col-grey'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Benifit
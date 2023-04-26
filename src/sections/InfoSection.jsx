import TitleHead from '@/components/titleHead'
import React from 'react'
import staff1 from '../img/equipe1.png' 
import staff2 from '../img/equipe2.png' 
import Image from 'next/image'

const InfoSection = () => {
  return (
    <>
    <div className="container-fluid bg-light p-5 mb-5">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
                <TitleHead title="The newest business analytics platform" className='sectiontitle' />
                <p className='col-grey'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button className='btn btn-primary shadow'>Learn more</button>
            </div>
            <div className="col-md-6">
                <Image src={staff1} alt="logo" width={540} height={358} />
            </div>
        </div>
        <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-6">
                <Image src={staff2} alt="logo" width={540} height={358} />
            </div>
            <div className="col-md-6">
                <TitleHead title="Radically new solutions for data" className='sectiontitle'/>
                <p className='col-grey'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button className='btn btn-primary shadow'>Learn more</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default InfoSection
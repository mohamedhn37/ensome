import TitleHead from '@/components/TitleHead'
import React from 'react'

const Statistique = () => {
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <TitleHead title="Ensome in numbers" className='sectiontitle'/>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className='col-grey'>Data analytics performed by Ensome's</p>
                        <span className='stat'>220</span>
                    </div>
                    <div className="col-md-3">
                        <p className='col-grey'>Data management performed by Ensome's</p>
                        <span className='stat'>390</span>
                    </div>
                    <div className="col-md-3">
                        <p className='col-grey'>Сustomers are satisfied with Ensome's work</p>
                        <span className='stat'>834+</span>
                    </div>
                    <div className="col-md-3">
                        <p className='col-grey me-4'>Projects implemented by Ensome</p>
                        <span className='stat'>1830+</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Statistique
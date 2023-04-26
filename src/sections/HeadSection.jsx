import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'

const HeadSection = () => {
  return (
    <>
    <div className="container-fluid sectionhead" id='Home'>
        <div className="row p-5">
            <div className="col-md-6">
                <h1 className='text-white'>Find true power in your data with Ensome</h1>
            </div>
            <div className="col-md-6">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                <button className="btn bg-white me-4">Learn More</button>
                <button className="btn text-white"><FaRegPlayCircle height={24} width={24} className='fs-5'/> Watch the demo</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeadSection
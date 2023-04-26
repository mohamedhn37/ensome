import TitleHead from '@/components/TitleHead'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                  <TitleHead title="Our pricing"/>
                  <div className='PricingShow'>
                        <button className='btn btn-primary rounded-pill'>Monthly</button>
                        <button className='btn btn-info rounded-pill'>Yearly</button>
                  </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card shadow bg-body-tertiary rounded CardPricing">
                        <div className="card-body">
                            <p className='fw-bold mb-3'>Starter</p>
                            <h4 className="card-title fw-bold mb-3">Free</h4>
                            <h6 className="card-text mb-4">Trial plan for starters.</h6>
                            <button href="#" className="btn btn-outline-primary mb-1 w-100">Get Started</button>
                            <ul className='list-unstyled mt-3'>
                                <li className='mb-3'><FaCheck className='text-primary'/> For small teams – 5 users</li>
                                <li className='mb-3'><FaCheck className='text-primary'/> Community support</li>
                                <li className='mb-3'><FaCheck className='text-primary'/> Individual data – 20GB</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow bg-body-tertiary rounded CardPricing">
                        <div className="card-body">
                            <p className='fw-bold mb-3'>Professional</p>
                            <h4 className="card-title fw-bold mb-3">$20 <span className='fw-normal'>per editor/month</span></h4>
                            <h6 className="card-text mb-4">For users who want more</h6>
                            <button href="#" className="btn btn-primary mb-1 w-100">Get Started</button>
                            <ul className='list-unstyled mt-3'>
                                <li className='mb-3'><FaCheck className='text-primary'/> For small teams – 15 users</li>
                                <li className='mb-3'><FaCheck className='text-primary'/> Individual support</li>
                                <li className='mb-3'><FaCheck className='text-primary'/> Individual data – 60GB</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow bg-body-tertiary rounded CardPricinglastOne">
                        <div className="card-body">
                            <p className='fw-bold mb-3'>Organization</p>
                            <h4 className="card-title fw-bold mb-3">$50 <span className='fw-normal'>per editor/month</span></h4>
                            <h6 className="card-text mb-4">The best solution for Pro</h6>
                            <button href="#" className="btn btn-primary mb-1 w-100">Get Started</button>
                            <ul className='list-unstyled mt-3'>
                                <li className='mb-3'><FaCheck className='text-primary'/> For big teams – unlimited</li>
                                <li className='mb-3'><FaCheck className='text-primary'/> Individual support</li>
                                <li className='mb-3'><FaCheck className='text-primary'/> Individual data – unlimited</li>
                                <li className='mb-3'><FaCheck className='text-primary'/> Data history</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Pricing
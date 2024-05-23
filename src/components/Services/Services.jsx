import React from 'react'
import './services.css'
import Services_Data from '../../assets/service_data'
import arrowicom from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Platform <span className='links'>Links</span> </h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index)=>{
            return <div key={index} className="services-format" onClick={() => window.open(service.s_link, '_blank')}>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                {/* <p>{service.s_desc}</p> */}
                <div className="services-readmore">
                    <p>See Platform</p>
                    <img src={arrowicom} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services

import React from 'react'
import './mywork.css'
import mywork_data from '../../assets/mywork_data.js'
import arrow from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div>
      <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>Projects</h1>     
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" onClick={() => window.open(work.w_link, '_blank')}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default MyWork

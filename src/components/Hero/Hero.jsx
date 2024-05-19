import React from 'react'
import './Hero.css'
import profilt_img from '../../assets/try.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profilt_img} alt="" style={{ width: '300px', height: 'auto', borderRadius: '50%',
          objectFit: 'cover'}} />
      <h1><span>Hello! I am Bhakti Bagadia,</span>Software Engineering Undergrad</h1>
      <p>I am a student with deep interest in Data Structures and Algorithms. I am from Nagpur, Maharashtra. I study in Shri Ramdeobaba College of Engineering and Management and I enjoy making Canvas Painting and wall painting.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">Resume</div>
      </div>
    </div>
  )
}

export default Hero

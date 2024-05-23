import React from 'react'
import './about.css'
import profileimg from '../../assets/try.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About <span className='me'>Me</span></h1>  
        <span></span>   
        <div className="about-sections">
            <div className="about-left">
            <img src={profileimg} alt="" style={{width:'300px', height:'auto', marginTop:'100px'}}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Computer Science major graduating in 2025. As the Creativity Lead for the GeeksforGeeks (GFG) RBU Chapter, I blend technical expertise with creative problem-solving to spearhead projects and organize events.</p>
                    <p>An active member of the Art Club at RBU, I combine my design skills with coding in frontend development to create engaging interfaces. I am also passionate about Data Structures and Algorithms (DSA), continuously honing my problem-solving skills.</p>
                    {/* <p>I am a Computer Science major and an undergraduate student expected to graduate in 2025. Currently, I hold the position of Creativity Lead for the GeeksforGeeks (GFG) RBU Chapter, where I blend my technical expertise with creative problem-solving. My role allows me to spearhead innovative projects, organize events, and foster a collaborative environment for budding developers.</p> */}
                    {/* <p>In addition to my technical pursuits, I am an active member of the Art Club at RBU, which further fuels my creative side. I have a keen interest in frontend development, where I combine my design skills with coding to create engaging user interfaces. Additionally, I am passionate about Data Structures and Algorithms (DSA), continuously honing my problem-solving skills to write efficient code.</p> */}
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Python</p><hr style={{width: '70%'}}/><hr/>
                    </div>
                    <div className="about-skill">
                        <p>HTML CSS JS</p><hr style={{width: '60%'}}/><hr/>
                    </div>
                    <div className="about-skill">
                        <p>ReactJS</p><hr style={{width: '50%'}}/><hr/>
                    </div>
                    <div className="about-skill">
                        <p>DSA</p><hr style={{width: '70%'}}/><hr/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <h3>250+</h3>
                    <p>QUESTIONS ON LEETCODE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h3>1575 (2⭐)</h3>
                    <p>ON CODECHEF</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h3>Postman API Fundamentals</h3>
                    <p>STUDENT EXPERT</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About

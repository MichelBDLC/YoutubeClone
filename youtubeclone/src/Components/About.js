import './About.css'
import AngelVilla from './Angel Villa.jpg'
import img from './IMG_9882.JPG';
import max from "./Max.jpg"

export default function About() {
    return (
        <div className='about-page'>
            <div className='project-info'>
                <h2> About Project </h2>
                <p>
                   This Project.....................................
                </p>
            </div>
          <div className='card'>
            <div className='about-angel'>
                <h2>Angel Villa</h2>
                <img src={AngelVilla} alt="Angel-img" width={150}></img>
                <div className='bio-card'>
                <p>
                   I am a future full stack software developer that resides in Queens, NY. I am currently studying at Pursuit, where I look forward to honing my skills.                 
                <a href='https://github.com/ajvee'>Github</a>
           
                </p>
                </div>
                </div>
            </div>
        <div className='card'>
             <div className='about-max'>
                <h2>Max Wattanachaiyot</h2>
                <img src={max} alt="Max-img" width={150}></img>
                <div className='bio-card'>
                <p>
                <a href="https://github.com/maxwattan"> Github </a>
                </p>
                </div>
                </div>
                </div>

        <div className='card'>
             <div className="about-Michel">
                <h2>Michel Batista</h2>
                <img src={img} alt="Michel-img" width={150}></img>
                <div className='bio-card'>
                <p>
                <a href='https://github.com/MichelBDLC'> Github </a>
                </p>
                </div>
                </div>
        </div>
        </div>
    )
}

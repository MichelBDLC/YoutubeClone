import './css/About.css'
import AngelVilla from './assets/Angel Villa.jpg'
import img from './assets/IMG_9882.JPG';
import max from "./assets/Max.jpg"

export default function About() {
    return (
        <div className='about-page'>
            <div className='project-info'>
                <h1>About Project</h1>
                <p>
                   This Youtube Clone Project was build by the following Developers, who through trial and error perservered on deploying this on time... 
                </p>
            </div>
          <div className='about-card'>
            <div className='about-angel'>
                <h2>Angel Villa</h2>
                <img src={AngelVilla} alt="Angel-img" width={150}></img>
                <div>
                <p>
                <a href='https://github.com/ajvee'>Github</a>
                   </p>               
                </div>
                </div>
                </div>
        <div className='about-card'>
             <div className='about-max'>
                <h2>Max Wattanachaiyot</h2>
                <img src={max} alt="Max-img" width={150}></img>
                <div>
                <p>
                <a href="https://github.com/maxwattan"> Github </a>
                </p>
                </div>
                </div>
                </div>

        <div className='about-card'>
             <div className="about-Michel">
                <h2>Michel Batista</h2>
                <img src={img} alt="Michel-img" width={150}></img>
                <div>
                <p>
                <a href='https://github.com/MichelBDLC'> Github </a>
                </p>
                </div>
                </div>
                </div>
        </div>
    )
}

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
                <p> Future FSWD hoping to help my fellow food service and retail industry workers by giving them a voice... </p>
                <a href='https://github.com/ajvee'>Github</a>               
                </div>
                </div>
                </div>
        <div className='about-card'>
             <div className='about-max'>
                <h2>Max Wattanachaiyot</h2>
                <img src={max} alt="Max-img" width={150}></img>
                <div>
                <p> I am pursuing software engineering because it is one of the industries that are constantly evolving that can make 
                    a huge impact on our daily lives through technology. Aside from my technical skills, I am reliable, and professional. 
                    I am passionate to help others connect with communities to improve themselves and the world. Outside of building javascript 
                    codes some of my hobbies include: cooking, baking, fishing, exercising and stretching. In my next career, I would like to have
                    a position which will allow me to apply and expand my skills while serving others and making this world a better place. 
                </p>
                <a href="https://github.com/maxwattan"> Github </a>
                </div>
                </div>
                </div>

        <div className='about-card'>
             <div className="about-Michel">
                <h2>Michel Batista</h2>
                <img src={img} alt="Michel-img" width={150}></img>
                <div>
                <p> Pursuing engineering for the love of technology & knowledge. Key strengths include creative problem-solving & 
                    leadership.
                </p>
                <a href='https://github.com/MichelBDLC'> Github </a>
                </div>
                </div>
                </div>
        </div>
    )
}

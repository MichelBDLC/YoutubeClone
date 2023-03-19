import './About.css'
import AngelVilla from './Angel Villa.jpg'

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
                </p>
                </div>
                </div>
            </div>
        <div className='card'>
             <div className='about-max'>
                <h2>Max</h2>
                {/* <img insert img of me here /> */}
                <div className='bio-card'>
                <p>
                    TESTING
                </p>
                </div>
                </div>
        </div>

        <div className='card'>
             <div className="about-Michel">
                <h2>Michel</h2>
                {/* <img insert img of me here /> */}
                <div className='bio-card'>
                <p>
                   TESTING
                </p>
                </div>
                </div>
        </div>
    </div>
    )
}

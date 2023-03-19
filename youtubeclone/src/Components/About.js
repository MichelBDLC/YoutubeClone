// import './About.css'
import img from './IMG_9882.JPG';

export default function About() {
    return (
        <div className='about-page'>
            <div className='project-info'>
                <h2> About Project </h2>
                <p>
                   {/* insert project description here
                   include Github link */}
                </p>
            </div>

            <div className='about-angel'>
                <h2> Student 2 </h2>
                {/* <img insert img of me here /> */}
                <p>
                    {/* insert small bio of me here
                    inlcude social media links (linkedin, github) */}
                </p>
            </div>

            <div className='about-max'>
                <h2> Student 2 </h2>
                {/* <img insert img of me here /> */}
                <p>
                    {/* insert small bio of me here
                    inlcude social media links (linkedin, github) */}
                </p>
            </div>

            <div className="about-Michel">
                <h2> Michel Batista </h2>
                <img src={img}/>
                <p>
                   {/* insert project description here
                   inlcude social media links (linkedin, github)*/}
                   <a href='https://github.com/MichelBDLC'> Github </a>
                </p>
            </div>
        </div>
    )
}

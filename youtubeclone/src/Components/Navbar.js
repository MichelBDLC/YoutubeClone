import { Link } from "react-router-dom"
import "./Navbar.css";
export default function Navbar() {

    return (
        <>
        {/* links to homepage & About page routing */}
        <header>
        <article>
                <h1>
                <Link to='/Home'>
      <img src={'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'} alt='YouTubeClone' height="75px"/>
      </Link>
                </h1>
            </article>
            <article>
                <h1>
                    <Link to="/">
                        <span>Youtube</span>
                    </Link>
                </h1>
            </article>
            <article>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    
                </ul>
            </article>
            <article>
                <ul>
                  
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                </ul>
            </article>
            
        </header>
         </>
    )
}
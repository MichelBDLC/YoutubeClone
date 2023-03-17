import { Link } from "react-router-dom"
import "./Navbar.css";
export default function Navbar() {

    return (
        <>
        {/* links to homepage & About page routing */}
        <header>
            <article>
                <h1>
                    <Link to="/">
                        <span styles="text-decoration-color: white">Youtube</span>
                    </Link>
                </h1>
            </article>
            <article>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                </ul>
            </article>
        </header>
         </>
    )
}
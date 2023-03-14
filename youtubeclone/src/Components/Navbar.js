import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <img src="/u2ube-logo.png" alt='YouTubeClone' />
      <article>
        <h1>
          <Link to='/'>
          <span>Youtube Clone</span>
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


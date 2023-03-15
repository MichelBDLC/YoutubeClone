import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <header>
      <img style={{width: 200, height: 200}} src={'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png'} alt='YouTubeClone' />
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

    return (
        <>
        {/* links to homepage & About page routing */}
        </>
    )
}
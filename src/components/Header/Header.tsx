import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-container'>
          <Link className='logo' to={'/'}>
            <img src='/icons/logo.svg' alt='Logo' />
          </Link>
          <nav className='navbar'>
            <Link className='navbar__item' to={'/movies'}>
              Movies
            </Link>
            <Link className='navbar__item' to={'/tv-shows'}>
              TV Shows
            </Link>
            <Link className='navbar__item suggest' to={'/suggest-me'}>
              Suggest me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

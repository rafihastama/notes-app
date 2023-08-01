import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdGTranslate } from 'react-icons/md'
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi'
import LocaleContext from '../contexts/LocaleContext'
import ThemeContext from '../contexts/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import PropTypes from 'prop-types'

function Navigation({ logout, name }) {
  const { locale, toggleLocale } = useContext(LocaleContext)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className='navigation'>
      <ul>
        <li>
          <button className='svg-theme' onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon size={25} /> : <FaSun size={25} />}
          </button>
        </li>
        <li>
          <button className='svg-translate' onClick={toggleLocale}>
            {locale === 'id' ? <MdGTranslate size={25} /> : <MdGTranslate size={25} />}
          </button>
        </li>
        <li>
          <Link to='/'>
            <FiHome className='svg-home' />
          </Link>
        </li>
        <li>
          <Link to='/add'>
            <FiPlusCircle className='svg-add' />
          </Link>
        </li>
        <li></li>
        <li>
          <button className='info-logged' onClick={logout}>
            {name}
            <FiLogOut size={25} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
    logout: PropTypes.func,
    name: PropTypes.string.isRequired
}

export default Navigation

import React, { useContext } from 'react'
import { MdGTranslate } from 'react-icons/md'
import LocaleContext from '../contexts/LocaleContext'
import ThemeContext from '../contexts/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

function NavigationStart() {
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
      </ul>
    </nav>
  );
}

export default NavigationStart

import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from '../pages/HomePage'
import AddPage from '../pages/AddPage'
import DetailPageWrapper from '../pages/DetailPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import { getUserLogged, putAccessToken } from '../utils/api'
import { LocaleProvider } from '../contexts/LocaleContext'
import NavigationStart from './NavigationStart'
import { ThemeProvider } from '../contexts/ThemeContext'

function useLocaleState() {
    const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'id')

    const toggleLocale = () => {
        const newLocale = locale === 'id' ? 'en' : 'id'
        setLocale(newLocale)
    }

    return {locale, toggleLocale}
}

function useThemeState() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return { theme, toggleTheme }
}

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null)
  const [initializing, setInitializing] = useState(true)
  const { locale, toggleLocale }  = useLocaleState()
  const { theme, toggleTheme } = useThemeState()

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data)
      setInitializing(false)
    })
  }, [])

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken)

    const { data } = await getUserLogged()
    setAuthedUser(data)
  }

  function onLogout() {
    setAuthedUser(null)
    putAccessToken('')
  }

  if (initializing) {
    return null
  }

  if (authedUser === null) {
    return (
        <ThemeProvider value={{ theme, toggleTheme }}>
            <LocaleProvider value={{ locale, toggleLocale }}>
            <div className='note-app'>
                <div className='note-app__header'>
                <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1>
                <NavigationStart />
                </div>
                <main>
                <Routes>
                    <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
                </main>
            </div>
        </LocaleProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
        <LocaleProvider value={{ locale, toggleLocale }}>
            <div className='note-app'>
            <div className='note-app__header'>
                <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1>
                <Navigation logout={onLogout} name={authedUser.name} />
            </div>
            <main>
                <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/add' element={<AddPage />} />
                <Route path='/notes/:id' element={<DetailPageWrapper />} />
                </Routes>
            </main>
            </div>
        </LocaleProvider>
    </ThemeProvider>
  );
}

export default NoteApp;

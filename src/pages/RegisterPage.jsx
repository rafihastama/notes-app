import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterInput from '../components/RegisterInput'
import { register } from '../utils/api'
import LocaleContext from '../contexts/LocaleContext'

function RegisterPage() {
    const { locale } = useContext(LocaleContext)

    const navigate = useNavigate()

    async function onRegisterHandler(user) {
        const { error } = await register(user)
        if (!error) {
            navigate('/')
        }
    }

    return (
        <section className='register-page'>
            <h2>{locale === 'id' ? 'Regist Data Kamu' : 'Regist Your Identity'}</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>{locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to='/'>{locale === 'id' ? 'Login disini' : 'Login here'}</Link></p>
        </section>
    )
}

export default RegisterPage
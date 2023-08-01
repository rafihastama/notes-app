import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import LocaleContext from '../contexts/LocaleContext'

function RegisterInput({ register }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { locale } = useContext(LocaleContext)

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        register({ name, email, password })
    }

    return (
            <form onSubmit={onSubmitHandler} className='register-input'>
                <input type="text" placeholder={locale === 'id' ? 'Nama' : 'Name'} value={name} onChange={onNameChange} />
                <input type="email" placeholder='Email' value={email} onChange={onEmailChange} />
                <input type="password" placeholder='Password' autoComplete='current-password' value={password} onChange={onPasswordChange} />
                <button>Register</button>
            </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired
}
 
export default RegisterInput

// class RegisterInput extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
//             email: '',
//             password: ''
//         }

//         autoBind(this)
//     }

//     onNameChange(event) {
//         this.setState({ name: event.target.value })
//     }

//     onEmailChange(event) {
//         this.setState({ email: event.target.value })
//     }

//     onPasswordChange(event) {
//         this.setState({ password: event.target.value })
//     }

//     onSubmitHandler(event) {
//         event.preventDefault()

//         this.props.register({
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password
//         })
//     }

//     render() { 
//         return (
            // <form onSubmit={this.onSubmitHandler} className='register-input'>
            //     <input type="text" placeholder='Nama' value={this.state.name} onChange={this.onNameChange} />
            //     <input type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChange} />
            //     <input type="password" placeholder='Password' autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} />
            //     <button>Register</button>
            // </form>
//         )
//     }
// }

// RegisterInput.propTypes = {
//     register: PropTypes.func.isRequired
// }
 
// export default RegisterInput
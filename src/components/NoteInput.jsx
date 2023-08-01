import React, { useState, useContext} from 'react'
import PropTypes from 'prop-types'
import LocaleContext from '../contexts/LocaleContext'

function NoteInput({ addNote }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const { locale } = useContext(LocaleContext)

    const remainingCharacters = 50 - title.length

    const onTitleChangeEventHandler = (event) => {
        setTitle(event.target.value)
    }

    const onBodyChangeEventHandler = (event) => {
        setBody(event.target.value)
    }

    const onSubmitEventHandler = (event) => {
        event.preventDefault()
        addNote({ title, body })
    }

    return (
            <form className='note-input' onSubmit={onSubmitEventHandler}>
                <p className='note-input__title__char-limit'>{locale === 'id' ? 'Sisa Karakter:' : 'Remaining Characters:'} {remainingCharacters}</p>
                <input type="text" placeholder={locale === 'id' ? 'Masukkan judul ...' : 'Enter your title ...'} value={title} onChange={onTitleChangeEventHandler} />
                <textarea type="text" placeholder={locale === 'id' ? 'Masukkan catatanmu ...' : 'Enter your note ...'} value={body} onChange={onBodyChangeEventHandler} />
                <button type='submit'>{locale === 'id' ? 'Buat' : 'Create'}</button>
            </form>
    )
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
}

 
export default NoteInput
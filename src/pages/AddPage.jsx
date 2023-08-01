import React, { useContext } from 'react'
import { addNote } from '../utils/api'
import NoteInput from '../components/NoteInput'
import { useNavigate } from 'react-router-dom'
import LocaleContext from '../contexts/LocaleContext'

function AddPage() {
    const navigate = useNavigate()

    const { locale } = useContext(LocaleContext)

    async function onAddNoteHandler(note) {
        await addNote(note)
        navigate('/')
    }

    return (
        <div className='note-app__body'>
            <h2>{locale === 'id' ? 'Buat Catatan' : 'Create Note'}</h2>
            <NoteInput addNote = {onAddNoteHandler}/>
        </div>
    )
}

export default AddPage

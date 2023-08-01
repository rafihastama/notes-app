import React, { useState, useEffect, useContext } from 'react'
import NotesList from '../components/NotesList'
import { useSearchParams } from 'react-router-dom'
import { getActiveNotes, deleteNote } from '../utils/api'
import SearchBar from '../components/SearchBar'
import LocaleContext from '../contexts/LocaleContext'

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [notes, setNotes] = useState([])
    const [initializing, setInitializing] = useState(true)
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    })
    const { locale } = useContext(LocaleContext)

    useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data)
            setInitializing(false)
        })
    }, [])

    async function onDeleteHandler(id) {
        await deleteNote(id)

        const { data } = await getActiveNotes()
        setNotes(data)
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword)
        setSearchParams({ keyword })
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        )
    })

    if (initializing) {
        return null
    }

    return (
        <div className='note-app__body'>
            <h2>{locale === 'id' ? 'Daftar Catatan' : 'Note List'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
                { filteredNotes.length === 0 ? (
                    <p className='no-notes'>{locale === 'id' ? 'Tidak ada catatan yang tersedia!' : 'No Notes Available!'}</p>
                ) : (
                    <NotesList notes={filteredNotes} onDelete = {onDeleteHandler} />
                )}
        </div>
    )
}

export default HomePage
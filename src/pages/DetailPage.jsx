import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NoteDetail from '../components/NoteDetail'
import { getNote } from '../utils/api'
import LocaleContext from '../contexts/LocaleContext'

function DetailPage() {
    const { id } = useParams()
    const [note, setNote] = useState(null)
    const [initializing, setInitializing] = useState(true)
    const {locale} = useContext(LocaleContext)

    useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data)
            setInitializing(false)
        }) 
    }, [id])

    if(initializing) {
        return null
    }

    if(!note) {
        return <p>{locale === 'id' ? 'Catatan tidak ditemukan!' : 'Note is not found!'}</p>
    }

    return (
        <div>
            <NoteDetail {...note}/>
        </div>
    )
}

export default DetailPage;
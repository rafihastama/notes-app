import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NoteItemContent ({ id, title, createdAt, body }) {
    return (
        <div className='note-item__content'>
            <h2 className='note-item__title'> <Link to={`/notes/${id}`}>{title}</Link></h2>  
            <p className='note-item__date'>{createdAt}</p>
            <p className='note-item__body'>{body}</p>
        </div>
    )
}

NoteItemContent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteItemContent
import React from 'react'
import PropTypes from 'prop-types'

function NoteDetail({ title, createdAt, body }) {
    return (
        <div>
            <h2 className='note-detail__title'>{title}</h2>
            <p className='note-detail__date'>{createdAt}</p>
            <p className='note-detail__body'>{body}</p>
        </div>
    )
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteDetail
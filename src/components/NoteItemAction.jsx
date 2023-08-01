import React from 'react'
import PropTypes from 'prop-types'

function NoteItemAction ({ id, onDelete }) {
    return <button className='note-item__delete-button' onClick={() => onDelete(id)}>Delete</button>
}

NoteItemAction.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NoteItemAction
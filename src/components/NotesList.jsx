import React from 'react'
import NoteItem from './NoteItem'
import PropTypes from 'prop-types'

function NotesList({ notes, onDelete }) {
    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    {...note}/>
                ))
            }
        </div>
    )
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NotesList
import React from 'react'
import NoteItemContent from './NoteItemContent'
import NoteItemAction from './NoteItemAction'
import PropTypes from 'prop-types'

function NoteItem({ title, createdAt, body, id, onDelete}) {
    return (
        <div className='note-item'>
            <NoteItemContent id={id} title={title} createdAt={createdAt} body={body}/>
            <NoteItemAction id={id} onDelete={onDelete}/>
        </div>
    )
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NoteItem
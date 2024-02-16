import React from 'react'
import { useDrop } from 'react-dnd'

export default function Droppable({ handleDrop, state, text, children }) {

    const [{ isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'card',
        collect: (monitor) => ({
            isOver: monitor.isOver() // Detect if the droppable component enter the draggable area
        }),
        drop: (item) => {
            handleDrop(item) // Receive droppable item id
        }
    }), [state, handleDrop]);

    return (
        <div className='drop' ref={drop}>
            {text}
            <br />
            {children}
        </div>
    )
}


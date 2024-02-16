import React from 'react'
import { useDrag } from 'react-dnd'

export default function Draggable({ id }) {
    
    const [{ isDragging }, drag] = useDrag(() => ({
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: 'card',
        item: { id },
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }));

    // if you are dragging, the original one will be empty, otherwise it is still there
    if (isDragging) {
        return <div className='isDraggingBlock' ref={drag}>{`Drag ${id}`}</div>
    }

    return (
        <div className='drag' ref={drag}>
            {/* The drag ref marks this node as being the "pick-up" node */}
            {`Drag ${id}`}
        </div>
    )
}

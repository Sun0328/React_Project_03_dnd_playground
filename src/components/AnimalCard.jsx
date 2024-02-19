import React from 'react'
import { useDrag } from 'react-dnd'

export default function AnimalCard({ id, name }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'zoo',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }));

    // if you are dragging, the original one will be empty, otherwise it is still there
    if (isDragging) {
        return <div className='isDraggingBlock' ref={drag}>{`${name}`}</div>
    }

    return (
        <div className='drag' ref={drag}>
            {/* The drag ref marks this node as being the "pick-up" node */}
            {`${name}`}
        </div>
    )
}

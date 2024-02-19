import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import AnimalCard from './AnimalCard';

export default function Droppable({ handleDrop, state, text, children }) {

    const [animal, setAnimal] = useState([
        {
            id: 1,
            name: "tiger"
        },
        {
            id: 2,
            name: "pig"
        },
        {
            id: 3,
            name: "rabbit"
        },
        {
            id: 4,
            name: "cat"
        }
    ]);

    const [basket, setBasket] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'zoo',
        drop: (item) => {
            // Update animal (remove) and basket (add)
            const newAnimals = animal.filter(animal => animal.id !== item.id);
            const draggedAnimal = animal.find(a => a.id === item.id);
            setAnimal(newAnimals);
            setBasket(prev => [...prev, draggedAnimal]);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver() // Detect if the droppable component enter the draggable area
        })
    }), [animal]);

    // Give finish hint if animal become empty
    const handleFinishDrag = () => {
        if (animal.length === 0) {
            return true
        }
    }

    return (
        <div>
            <div className='animals'>
                {animal.map(animal => <AnimalCard key={animal.id} id={animal.id} name={animal.name} />)}
            </div>
            <div className='drop zooBox' ref={drop}>
                Zoo
                <br />
                {basket.map(basket => <AnimalCard key={basket.id} id={basket.id} name={basket.name} />)}
                <br />
                {isOver && <div className='hint'>Drop Here!</div>}
                {handleFinishDrag() && <div className='hint'>Finished!</div>}
            </div>
        </div>
    )
}


import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './MySortableList.css'

export default function MySortableList() {
    const foodItem = [
        {
            id: "1",
            name: 'burger',
            price: 15
        },
        {
            id: "2",
            name: 'pizza',
            price: 20
        },
        {
            id: "3",
            name: 'fries',
            price: 8
        },
        {
            id: "4",
            name: 'wings',
            price: 12
        }
    ]

    const foodItem2 = []

    const [food, updateFood] = useState(foodItem)
    const [food2, updatedFood2] = useState(foodItem2)

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        console.log(result);
        // Copy List
        const List1 = [...food];
        const List2 = [...food2];

        if (result.destination.droppableId === "foodList") {

            if (result.source.droppableId === "foodList2") {
                const [draggedItem] = List2.splice(result.source.index, 1);
                List1.splice(result.destination.index, 0, draggedItem);
            } else {
                const [draggedItem] = List1.splice(result.source.index, 1);
                List1.splice(result.destination.index, 0, draggedItem);
            }
        }

        if (result.destination.droppableId === "foodList2") {

            if (result.source.droppableId === "foodList") {
                // Get the item you are dragging from list 1
                const [draggedItem] = List1.splice(result.source.index, 1);
                // Add the dragged item to the destination list 
                List2.splice(result.destination.index, 0, draggedItem);
            } else {
                // Get the item you are dragging from list 2
                const [draggedItem] = List2.splice(result.source.index, 1);
                // Reorder
                List2.splice(result.destination.index, 0, draggedItem);
            }
        }

        // Update the state with the modified lists
        updateFood(List1);
        updatedFood2(List2);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="foodList">
                {(provided) => (
                    <div className='listContainer' {...provided.droppableProps} ref={provided.innerRef}>
                        List 1
                        {food.map(({ id, name, price }, index) => {
                            return (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            className='foodCard'
                                        >
                                            {id}. {name} ${price}
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="foodList2">
                {(provided) => (
                    <div className='listContainer' {...provided.droppableProps} ref={provided.innerRef}>
                        List 2
                        {food2.map(({ id, name, price }, index) => {
                            return (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            className='foodCard'
                                        >
                                            {id}. {name} ${price}
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

# Getting Started with react-dnd and react-beautiful-dnd library

## Features
Example 1 and 2 use react-dnd, Example 3 uses react-beautiful-dnd

1. Example 1 -- Drag animal into the zoo box
2. Example 2 -- Drag between two boxes
3. Example 3 -- Drag list items and change their order

## Deployment
(https://react-project-03-dnd-playground.vercel.app/)

## Summary
1. 'react-dnd'
    a. 
    ### Wrap the area you want to realize drag and drop with 'DndProvider'
        
        import { DndProvider } from 'react-dnd';
        import { HTML5Backend } from 'react-dnd-html5-backend';
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
        ```

    b. 
    ### Add Drop feature to component

        import { useDrop } from 'react-dnd';
        const [{ isOver }, drop] = useDrop(() => ({
            accept: 'card',
            collect: (monitor) => ({
                isOver: monitor.isOver() // Detect if the droppable component enter the draggable area
            }),
            drop: (item) => {
                handleDrop(item) // Receive droppable item id
            }
        }), [handleDrop]);
        ```
    ### Add ref to div

        <div ref={drop}>
            ...
        </div>
        ```
    c. 
    ### Add drag feature to component

        import { useDrag } from 'react-dnd'
        const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
        }));
        ```
    ### Add ref to div
        <div ref={drag}>
            ...
        </div>
        ```

    ### Main hooks
        isOver
        isDragging
    
2. 'react-beautiful-dnd'
    a.
    ### Wrap the area you want to realize drag and drop with 'DndProvider'
        <DragDropContext onDragEnd={handleOnDragEnd}>
            ...
        </DragDropContext>

    b.
    ### Add droppable area
        <Droppable droppableId="type">
            {(provided) => (
                <div 
                    className='listContainer' 
                    {...provided.droppableProps} 
                    ref={provided.innerRef}
                >
                    ...
                </div>
            )}
            {provided.placeholder}
        </Droppable>

    c.
    ### Add draggable area
        <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
                <div
                    className='Card'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    ...
                </div>
            )}
        </Draggable>

    ### Main hooks
    For <DragDropContext>
    onDragStart = () => {
      /*...*/
    };
    onDragUpdate = () => {
      /*...*/
    }
    onDragEnd = () => {
      // the only one that is required
      // usually include reorder logic and something else
    };

    For <Droppable>
    Required: DroppableId

    For <Draggable>
    Required: key(if map something), draggableId, index

## Ref
1. (https://github.com/react-dnd/react-dnd)
2. (https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37)


import React from 'react'
import './App.css'
import Draggable from './components/Draggable'
import Droppable from './components/Droppable'
import Zoo from './components/Zoo'
import MySortableList from './components/MySortableList'

export default function App() {

  const [box1, setBox1] = React.useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    }
  ])

  const [box2, setBox2] = React.useState([
    {
      id: 4,
    },
    {
      id: 5,
    }
  ])

  // When something enter Box 1 , then it will trigger handleBox1 function
  const handleBox1 = (item) => {
    // Remove from box 2
    const updatedBox2 = box2.filter(each => each.id !== item.id);
    // Add to box 1
    setBox2(updatedBox2);
    setBox1(prev => {
      const filteredBox1 = prev.filter(each => each.id !== item.id); // Remove the item if it already exists
      return [...filteredBox1, item];
    });
  }

  const handleBox2 = (item) => {
    // Remove from box 1
    const updatedBox1 = box1.filter(each => each.id !== item.id);
    // Add to box 2
    setBox1(updatedBox1);
    setBox2(prev => {
      const filteredBox2 = prev.filter(each => each.id !== item.id); // Remove the item if it already exists
      return [...filteredBox2, item];
    });
  }

  return (
    <div className='container'>
      Example #1
      <Zoo />
      Example #2
      <Droppable text='Box 1' state={box1} handleDrop={handleBox1}>
        {box1.map(drag => <Draggable key={drag.id} id={drag.id} />)}
      </Droppable>
      <Droppable text='Box 2' state={box2} handleDrop={handleBox2}>
        {box2.map(drag => <Draggable key={drag.id} id={drag.id} />)}
      </Droppable>
      Example #3
      <MySortableList />
    </div>
  )
}

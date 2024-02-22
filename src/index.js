import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
The DndProvider component provides React-DnD capabilities to your application
This must be injected with a backend via the backend prop 

Props---
backend: Required. A React DnD backend. Unless you're writing a custom one, you probably want to use the HTML5 backend that ships with React DnD.
context: Optional. The backend context used to configure the backend. This is dependent on the backend implementation.
options: Optional. An options object used to configure the backend. This is dependent on the backend implementation.
*/

root.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
);


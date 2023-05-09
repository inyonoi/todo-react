import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [{id:"todo1",name:"Lunch",completed:false,date:"05/09/2023",time:"11:00"}];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tasks={DATA}/>);
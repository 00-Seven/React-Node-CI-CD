import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items,setItems] = useState([])

  useEffect(()=>{
    getNames();
  },[]);

  const getNames = async () => {
    const response = await axios.get("/items")    
    setItems([...response.data])
  }
  const listItems = items.map((item)=>{
    return <li>{item}</li>
  })
  return (
    <ul className="ItemList">
      {listItems}
    </ul>
  );
}

export default App;

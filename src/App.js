import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const Data = [{id:1, name: 'Obj1'},{id:2, name: 'Obj2'},{id:3, name: 'Obj3'},{id:4, name: 'Obj4'} ]
  const random =Math.floor(Math.random()*Data.length)
 const randomObj = Data[random]
  console.log(randomObj)
  
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

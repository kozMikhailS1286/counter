import React, { useEffect, useState } from 'react';
import Counter from './Counter'
import Input from './Input'
import './App.css';

export const getLocalstorage = (key: string, callBack: (value: number)=> void)=>{
  let startValueAssString = localStorage.getItem(key)
  if (startValueAssString) {
    let newValue = JSON.parse(startValueAssString)
    callBack(newValue)
  }
}


function App() {
  const [value, setValue] = useState<number>(0);

  useEffect(()=>{
    // let startValueAssString = localStorage.getItem('startValue')
    // if (startValueAssString) {
    //   let newValue = JSON.parse(startValueAssString)
    //   setValue(newValue)
    // }
    getLocalstorage('startValue', setValue)
  }, [])

  return (
    <div className="App">
        <h1> Счетчик </h1>
      <Counter 
        initValue={value}
        />
      <br/>
      <br/>
      <Input 
        value={value} 
        setValue={setValue} 
      />
    </div>
  )
}

export default App;
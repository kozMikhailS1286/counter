import React, { useEffect, useState, ChangeEvent } from 'react';
import { Button } from './Button'
import './App.css';


function Counter() {

  const [value, setValue] = useState<number>(0);
  
  useEffect( () => {
    let valueAssString = localStorage.getItem('counterValue')
      if (valueAssString) {
        let newValue = JSON.parse(valueAssString)
        setValue(newValue)
      }
  }, [])
  
  
  let[counter, setCounter] = useState(0)
  
  const counterInc = () => {
    setCounter(++counter)
    if (counter > 5) {
      setCounter(5);
      }
    }
  
  
  const counterReset = () => {
    setCounter(0)
  }
  
  return (
    <div>
      <div className="counter"> 
        <h2 className={counter > 4 ? "five" : ""}> {counter} </h2>
      </div>
  
  
      <div>
        <div className={counter < 5 ? "on" : "off"}>
          <Button 
            name={"inc"} 
            callBack={counterInc}
          />
        </div> 
        <div className={counter < 1 ? "off" : "on"}>
          <Button 
            name={"reset"} 
            callBack={counterReset}
          />
        </div>
      </div>
    </div>
  );
  }


  function Input() {
   
    const [maxValue, setValue1] = useState<number>(0);
    useEffect( () => {
      let valueAssString = localStorage.getItem('maxValue')
        if (valueAssString) {
          let newValue = JSON.parse(valueAssString)
          setValue1(newValue)
        }
    }, [])
    
    const [startValue, setValue2] = useState<number>(0);
    useEffect( () => {
      let valueAssString = localStorage.getItem('startValue')
        if (valueAssString) {
          let newValue = JSON.parse(valueAssString)
          setValue2(newValue)
        }
    }, []) 
    
    // Как используем useEffect? Т.К. не корректно работает.
    // Как передать ошибку как бы назад вместо отображения счетчика?
    
    
    const[error, setError] = useState<boolean>(false)
    
    const onChangeInputTitle1 = (e: ChangeEvent<HTMLInputElement>) => {
      setValue1(+e.currentTarget.value)
      if (startValue == maxValue) {
        setError(true)
      } else {
        setError(false)
      }
    }
    
    const onChangeInputTitle2 = (e: ChangeEvent<HTMLInputElement>) => {
      setValue2(+e.currentTarget.value)
      if (startValue < 0 || startValue === maxValue) {
        setError(true)
      } else {
        setError(false)
      }
    }
    
    const set = () => {
      localStorage.setItem('maxValue', JSON.stringify(maxValue) )
      localStorage.setItem('startValue', JSON.stringify(startValue) )
    }
    
    return (
      <div>
        max value <input className={error ? "error" : ""} onChange={onChangeInputTitle1} type="number" value={maxValue}/> 
        start value <input className={error ? "error" : ""} onChange={onChangeInputTitle2} type="number" value={startValue}/>  
        <Button
          name={"set"} 
          callBack={set}
          />
      </div>
    );
    }

function App() {
  return <div className="App">

    <Counter />
    <br/>
    <br/>
    <Input />
  </div>
}

export default App;
import React, { useEffect, useState } from 'react';
import { Button } from './Button'
import './App.css';


type CounterPropsType = {
    initValue: number
}

function Counter(props: CounterPropsType) {

    const [value, setValue] = useState<number>(0);
    
    useEffect(() => {
      setValue(props.initValue)
    }, [props.initValue])
  
    // useEffect( () => {
    //   let valueAssString = localStorage.getItem('counterValue')
    //     if (valueAssString) {
    //       let newValue = JSON.parse(valueAssString)
    //       setValue(newValue)
    //     }
    // }, [])
    
    
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
          <h2 className={counter > 4 ? "five" : ""}> {value} </h2>
        </div>
    
    
        <div>
          <div>
            <Button 
              name={"inc"}
              disabled={counter < 5}
              className={'button'}
              callBack={counterInc}
            />
          </div> 
          <div>
            <Button 
              name={"reset"} 
              disabled={counter < 1}
              className={'button'}
              callBack={counterReset}
            />
          </div>
        </div>
      </div>
    );
    }
  
    export default Counter;
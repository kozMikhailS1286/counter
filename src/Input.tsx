import React, { useEffect, useState, ChangeEvent } from 'react';
import { Button } from './Button'
import './App.css';


type InputPropsType = {
    value: number
    setValue: (startValue: number) => void
  }
  
    function Input({ value, setValue }: InputPropsType) {

    const [startValue, setStartValue] = useState<number>(0);
        
      const [maxValue, setMaxValue] = useState<number>(0);
      useEffect( () => {
        let valueAssString = localStorage.getItem('maxValue')
          if (valueAssString) {
            let newValue = JSON.parse(valueAssString)
            setMaxValue(newValue)
          }

          let startValueAssString = localStorage.getItem('startValue')
          if (startValueAssString) {
            let newValue = JSON.parse(startValueAssString)
            setStartValue(newValue)
          }
      }, [])
      
      //const [startValue, setValue2] = useState<number>(0);
      // useEffect( () => {
      //   let valueAssString = localStorage.getItem('startValue')
      //     if (valueAssString) {
      //       let newValue = JSON.parse(valueAssString)
      //       setValue2(newValue)
      //     }
      // }, []) 
      
      // Как используем useEffect? Т.К. не корректно работает.
      // Как передать ошибку как бы назад вместо отображения счетчика?
      
      
      const[error, setError] = useState<boolean>(false)
      
      const onChangeInputTitle1 = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        if (value == maxValue) {
          setError(true)
        } else {
          setError(false)
        }
      }
      
      const onChangeInputTitle2 = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        // setValue(+e.currentTarget.value)
        if (value < 0 || value === maxValue) {
          setError(true)
        } else {
          setError(false)
        }
      }
      
      const set = () => {
        setValue(startValue)
        localStorage.setItem('maxValue', JSON.stringify(maxValue) )
        localStorage.setItem('startValue', JSON.stringify(startValue) )
      }

      return (
        <div>
          max value <input className={error ? "error" : ""} onChange={onChangeInputTitle1} type="number" value={maxValue}/> 
          start value <input className={error ? "error" : ""} onChange={onChangeInputTitle2} type="number" value={startValue}/>  
          <Button
            name={"set"} 
            disabled={false}
            className={'button'}
            callBack={set}
            />
        </div>
      );
      }

      export default Input;
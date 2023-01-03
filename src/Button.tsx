import React from 'react';

type ButtonPropsType = {
    name: string
    disabled: boolean
    className: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

const{name, disabled, className, callBack} = props

const onClickHandler = () => {
    callBack()
}
    return (
        <button 
            onClick={onClickHandler}
            className={className} 
            disabled={disabled}
        >
            {name}
        </button>
    );
};
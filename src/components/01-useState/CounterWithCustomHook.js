import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {


    const {state, increment,decrement, reset} = useCounter(100);    


  return (

    <>
    <h1> Counter With Custom Hook:  {state} </h1>
    <hr />
    <button onClick={()=>increment(1)} className='btn btn-dark '>+1</button>
    <hr />
    <button onClick={()=>decrement(1)} className='btn btn-dark '>-1</button>
    <hr />
    <button onClick={reset} className='btn btn-dark '>RESET</button>

    </>
  )
}

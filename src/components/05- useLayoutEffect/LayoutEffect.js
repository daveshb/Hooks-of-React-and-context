import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {

  const {counter, increment} = useCounter(1);
  const { data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
  const {quote} = !!data && data[0];

    const [boxSize, setBoxSize] = useState({});

    const ptag = useRef();

  useLayoutEffect(() => {
    setBoxSize(ptag.current.getBoundingClientRect());
  }, [quote])

  return (
    <>
    <h1>LayoutEffect</h1>
    <hr />

   
        <blockquote className='blockquote text-right'>
          <p className='mb-0'
          ref={ptag}
         >{quote} </p>
        </blockquote>

        <pre>
          {JSON.stringify( boxSize, null , 3)}
        </pre>
      
    <button 
    className='btn btn-primary'
    onClick={increment} >
      Siguiente mensaje
    </button>

    </>
  )
}

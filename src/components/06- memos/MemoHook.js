

import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { procesoPesado } from '../helper/procesoPesado';

export const MemoHook = () => {


    const {counter, increment} =useCounter(5000);
    const [show, setShow] = useState(true);

    

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>

    <h1>MEMO HOOK</h1>

    <h3>
        Counter  : <small>{counter}</small>
        
    </h3>
    <button className='btn btn-primary'
            onClick={increment}>
        +1
    </button>

    <button className='btn btn-outline-primary ml-3'
            onClick={()=>{
                setShow(!show)
            }}>
        show/ Hide {JSON.stringify(show)}
    </button>

    <hr />
    <p>{memoProcesoPesado}</p>
        </>
  )
}

import React from 'react';
import ReactDOM from 'react-dom';
import { CounterAPP } from './components/01-useState/CounterAPP';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { HookApp } from './HookApp';





ReactDOM.render(
  
    <CounterWithCustomHook />,

  document.getElementById('root')
);



import {useState} from 'react'

export const useForm = (estadoInicial = {}) => {
  
  const [values, setValues] = useState(estadoInicial);
  
  const reset = ( )=> {
    setValues(estadoInicial)
  } 

  const handleImputChange = ({target}) =>{

  setValues({
    ...values,
    [target.name] : target.value
  });
  }

  return [values , handleImputChange, reset];

}





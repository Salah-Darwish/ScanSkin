
import React from 'react'
import { validate } from './Validate';
export default function useInput({initialInput,rules}) {
  const [input,changeInput]=React.useState({
  value:initialInput | '',
  isValid:false, 
}); 

const updateInput=inputVal=>{
  changeInput({
    value:inputVal,
    isValid:validate(inputVal,rules), 
  }); 
};
return [input,updateInput]
}


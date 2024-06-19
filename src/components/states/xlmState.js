import { useState } from 'react';

export function useXLMState() {
  const [deposit_xlm, setDepositXLM] = useState(null);
  const [openXLM, setOpenXLM] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeXLM = (event) => {
    const value = event.target.value;
    setDepositXLM(value);
  };

  function openXLMModal(){
    setOpenXLM(true)
  }
  function closeXLMModal(){
    setOpenXLM(false)
  }

  return {
    deposit_xlm,
    setDepositXLM,
    openXLM,
    setOpenXLM,
    handleChangeXLM,
    openXLMModal,
    closeXLMModal,
  };
}

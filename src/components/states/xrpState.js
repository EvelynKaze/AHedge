import { useState } from 'react';

export function useXRPState() {
  const [deposit_xrp, setDepositXRP] = useState(null);
  const [openXRP, setOpenXRP] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeXRP = (event) => {
    const value = event.target.value;
    setDepositXRP(value);
  };

  function openXRPModal(){
    setOpenXRP(true)
  }
  function closeXRPModal(){
    setOpenXRP(false)
  }

  return {
    deposit_xrp,
    setDepositXRP,
    openXRP,
    setOpenXRP,
    handleChangeXRP,
    openXRPModal,
    closeXRPModal,
  };
}

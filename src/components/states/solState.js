import { useState } from 'react';

export function useSOLState() {
  const [deposit_sol, setDepositSOL] = useState(null);
  const [openSOL, setOpenSOL] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSOL = (event) => {
    const value = event.target.value;
    setDepositSOL(value);
  };

  function openSOLModal(){
    setOpenSOL(true)
  }
  function closeSOLModal(){
    setOpenSOL(false)
  }

  return {
    deposit_sol,
    setDepositSOL,
    openSOL,
    setOpenSOL,
    handleChangeSOL,
    openSOLModal,
    closeSOLModal,
  };
}

import { useState } from 'react';

export function usePorkState() {
  const [deposit_pork, setDepositPork] = useState(null);
  const [openPork, setOpenPork] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangePork = (event) => {
    const value = event.target.value;
    setDepositPork(value);
  };

  function openPorkModal(){
    setOpenPork(true)
  }
  function closePorkModal(){
    setOpenPork(false)
  }

  return {
    deposit_pork,
    setDepositPork,
    openPork,
    setOpenPork,
    handleChangePork,
    openPorkModal,
    closePorkModal,
  };
}

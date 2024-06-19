import { useState } from 'react';

export function useMewState() {
  const [deposit_mew, setDepositMew] = useState(null);
  const [openMew, setOpenMew] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeMew = (event) => {
    const value = event.target.value;
    setDepositMew(value);
  };

  function openMewModal(){
    setOpenMew(true)
  }
  function closeMewModal(){
    setOpenMew(false)
  }

  return {
    deposit_mew,
    setDepositMew,
    openMew,
    setOpenMew,
    handleChangeMew,
    openMewModal,
    closeMewModal,
  };
}

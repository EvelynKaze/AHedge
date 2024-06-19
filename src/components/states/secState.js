import { useState } from 'react';

export function useSecState() {
  const [deposit_sec, setDepositSec] = useState(null);
  const [openSec, setOpenSec] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSec = (event) => {
    const value = event.target.value;
    setDepositSec(value);
  };

  function openSecModal(){
    setOpenSec(true)
  }
  function closeSecModal(){
    setOpenSec(false)
  }

  return {
    deposit_sec,
    setDepositSec,
    openSec,
    setOpenSec,
    handleChangeSec,
    openSecModal,
    closeSecModal,
  };
}

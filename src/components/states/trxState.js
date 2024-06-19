import { useState } from 'react';

export function useTRXState() {
  const [deposit_trx, setDepositTRX] = useState(null);
  const [openTRX, setOpenTRX] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeTRX = (event) => {
    const value = event.target.value;
    setDepositTRX(value);
  };

  function openTRXModal(){
    setOpenTRX(true)
  }
  function closeTRXModal(){
    setOpenTRX(false)
  }

  return {
    deposit_trx,
    setDepositTRX,
    openTRX,
    setOpenTRX,
    handleChangeTRX,
    openTRXModal,
    closeTRXModal,
  };
}

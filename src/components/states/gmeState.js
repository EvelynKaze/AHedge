import { useState } from 'react';

export function useGMEState() {
  const [deposit_gme, setDepositGME] = useState(null);
  const [openGME, setOpenGME] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeGME = (event) => {
    const value = event.target.value;
    setDepositGME(value);
  };

  function openGMEModal(){
    setOpenGME(true)
  }
  function closeGMEModal(){
    setOpenGME(false)
  }

  return {
    deposit_gme,
    setDepositGME,
    openGME,
    setOpenGME,
    handleChangeGME,
    openGMEModal,
    closeGMEModal,
  };
}

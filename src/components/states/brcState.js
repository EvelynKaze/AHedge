import { useState } from 'react';

export function useBRCState() {
  const [deposit_brc, setDepositBRC] = useState(null);
  const [openBRC, setOpenBRC] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeBRC = (event) => {
    const value = event.target.value;
    setDepositBRC(value);
  };

  function openBRCModal(){
    setOpenBRC(true)
  }
  function closeBRCModal(){
    setOpenBRC(false)
  }

  return {
    deposit_brc,
    setDepositBRC,
    openBRC,
    setOpenBRC,
    handleChangeBRC,
    openBRCModal,
    closeBRCModal,
  };
}

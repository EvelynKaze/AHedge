import { useState } from 'react';

export function useBNBState() {
  const [deposit_bnb, setDepositBNB] = useState(null);
  const [openBNB, setOpenBNB] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeBNB = (event) => {
    const value = event.target.value;
    setDepositBNB(value);
  };

  function openBNBModal(){
    setOpenBNB(true)
  }
  function closeBNBModal(){
    setOpenBNB(false)
  }

  return {
    deposit_bnb,
    setDepositBNB,
    openBNB,
    setOpenBNB,
    handleChangeBNB,
    openBNBModal,
    closeBNBModal,
  };
}

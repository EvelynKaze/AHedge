import { useState } from 'react';

export function useTrumpState() {
  const [deposit_trump, setDepositTrump] = useState(null);
  const [openTrump, setOpenTrump] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeTrump = (event) => {
    const value = event.target.value;
    setDepositTrump(value);
  };

  function openTrumpModal(){
    setOpenTrump(true)
  }
  function closeTrumpModal(){
    setOpenTrump(false)
  }

  return {
    deposit_trump,
    setDepositTrump,
    openTrump,
    setOpenTrump,
    handleChangeTrump,
    openTrumpModal,
    closeTrumpModal,
  };
}

import { useState } from 'react';

export function useBONKState() {
  const [deposit_bonk, setDepositBONK] = useState(null);
  const [openBONK, setOpenBONK] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeBONK = (event) => {
    const value = event.target.value;
    setDepositBONK(value);
  };

  function openBONKModal(){
    setOpenBONK(true)
  }
  function closeBONKModal(){
    setOpenBONK(false)
  }

  return {
    deposit_bonk,
    setDepositBONK,
    openBONK,
    setOpenBONK,
    handleChangeBONK,
    openBONKModal,
    closeBONKModal,
  };
}

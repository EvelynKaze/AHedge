import { useState } from 'react';

export function useNigiState() {
  const [deposit_nigi, setDepositNigi] = useState(null);
  const [openNigi, setOpenNigi] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeNigi = (event) => {
    const value = event.target.value;
    setDepositNigi(value);
  };

  function openNigiModal(){
    setOpenNigi(true)
  }
  function closeNigiModal(){
    setOpenNigi(false)
  }

  return {
    deposit_nigi,
    setDepositNigi,
    openNigi,
    setOpenNigi,
    handleChangeNigi,
    openNigiModal,
    closeNigiModal,
  };
}

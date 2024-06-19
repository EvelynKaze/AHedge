import { useState } from 'react';

export function useSelfieState() {
  const [deposit_selfie, setDepositSelfie] = useState(null);
  const [openSelfie, setOpenSelfie] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSelfie = (event) => {
    const value = event.target.value;
    setDepositSelfie(value);
  };

  function openSelfieModal(){
    setOpenSelfie(true)
  }
  function closeSelfieModal(){
    setOpenSelfie(false)
  }

  return {
    deposit_selfie,
    setDepositSelfie,
    openSelfie,
    setOpenSelfie,
    handleChangeSelfie,
    openSelfieModal,
    closeSelfieModal,
  };
}

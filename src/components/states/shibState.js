import { useState } from 'react';

export function useSHIBState() {
  const [deposit_shib, setDepositSHIB] = useState(null);
  const [openSHIB, setOpenSHIB] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSHIB = (event) => {
    const value = event.target.value;
    setDepositSHIB(value);
  };

  function openSHIBModal(){
    setOpenSHIB(true)
  }
  function closeSHIBModal(){
    setOpenSHIB(false)
  }

  return {
    deposit_shib,
    setDepositSHIB,
    openSHIB,
    setOpenSHIB,
    handleChangeSHIB,
    openSHIBModal,
    closeSHIBModal,
  };
}

import { useState } from 'react';

export function usePepeState() {
  const [deposit_pepe, setDepositPepe] = useState(null);
  const [openPepe, setOpenPepe] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangePepe = (event) => {
    const value = event.target.value;
    setDepositPepe(value);
  };

  function openPepeModal(){
    setOpenPepe(true)
  }
  function closePepeModal(){
    setOpenPepe(false)
  }

  return {
    deposit_pepe,
    setDepositPepe,
    openPepe,
    setOpenPepe,
    handleChangePepe,
    openPepeModal,
    closePepeModal,
  };
}

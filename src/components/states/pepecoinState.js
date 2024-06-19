import { useState } from 'react';

export function usePepeCoinState() {
  const [deposit_pepecoin, setDepositPepeCoin] = useState(null);
  const [openPepeCoin, setOpenPepeCoin] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangePepeCoin = (event) => {
    const value = event.target.value;
    setDepositPepeCoin(value);
  };

  function openPepeCoinModal(){
    setOpenPepeCoin(true)
  }
  function closePepeCoinModal(){
    setOpenPepeCoin(false)
  }

  return {
    deposit_pepecoin,
    setDepositPepeCoin,
    openPepeCoin,
    setOpenPepeCoin,
    handleChangePepeCoin,
    openPepeCoinModal,
    closePepeCoinModal,
  };
}

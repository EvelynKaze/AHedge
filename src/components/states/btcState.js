import { useState } from 'react';

export function useBTCState() {
  const [deposit_btc, setDepositBtc] = useState(null);
  const [openBTC, setOpenBTC] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeBTC = (event) => {
    const value = event.target.value;
    setDepositBtc(value);
  };

  function closeBTCModal() {
    setOpenBTC(false)
  }
  function openBTCModal() {
    setOpenBTC(true)
  }

  return {
    deposit_btc,
    setDepositBtc,
    openBTC,
    setOpenBTC,
    handleChangeBTC,
    openBTCModal,
    closeBTCModal,
  };
}

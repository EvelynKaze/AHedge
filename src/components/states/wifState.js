import { useState } from 'react';

export function useWifState() {
  const [deposit_wif, setDepositWif] = useState(null);
  const [openWif, setOpenWif] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeWif = (event) => {
    const value = event.target.value;
    setDepositWif(value);
  };

  function openWifModal(){
    setOpenWif(true)
  }
  function closeWifModal(){
    setOpenWif(false)
  }

  return {
    deposit_wif,
    setDepositWif,
    openWif,
    setOpenWif,
    handleChangeWif,
    openWifModal,
    closeWifModal,
  };
}

import { useState } from 'react';

export function useWolfState() {
  const [deposit_wolf, setDepositWolf] = useState(null);
  const [openWolf, setOpenWolf] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeWolf = (event) => {
    const value = event.target.value;
    setDepositWolf(value);
  };

  function openWolfModal(){
    setOpenWolf(true)
  }
  function closeWolfModal(){
    setOpenWolf(false)
  }

  return {
    deposit_wolf,
    setDepositWolf,
    openWolf,
    setOpenWolf,
    handleChangeWolf,
    openWolfModal,
    closeWolfModal,
  };
}

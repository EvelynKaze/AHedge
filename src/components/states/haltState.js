import { useState } from 'react';

export function useHaltState() {
  const [deposit_halt, setDepositHalt] = useState(null);
  const [openHalt, setOpenHalt] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeHalt = (event) => {
    const value = event.target.value;
    setDepositHalt(value);
  };

  function openHaltModal(){
    setOpenHalt(true)
  }
  function closeHaltModal(){
    setOpenHalt(false)
  }

  return {
    deposit_halt,
    setDepositHalt,
    openHalt,
    setOpenHalt,
    handleChangeHalt,
    openHaltModal,
    closeHaltModal,
  };
}

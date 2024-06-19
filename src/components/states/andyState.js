import { useState } from 'react';

export function useAndyState() {
  const [deposit_andy, setDepositAndy] = useState(null);
  const [openAndy, setOpenAndy] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeAndy = (event) => {
    const value = event.target.value;
    setDepositAndy(value);
  };

  function openAndyModal(){
    setOpenAndy(true)
  }
  function closeAndyModal(){
    setOpenAndy(false)
  }

  return {
    deposit_andy,
    setDepositAndy,
    openAndy,
    setOpenAndy,
    handleChangeAndy,
    openAndyModal,
    closeAndyModal,
  };
}

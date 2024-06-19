import { useState } from 'react';

export function useHughState() {
  const [deposit_hugh, setDepositHugh] = useState(null);
  const [openHugh, setOpenHugh] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeHugh = (event) => {
    const value = event.target.value;
    setDepositHugh(value);
  };

  function openHughModal(){
    setOpenHugh(true)
  }
  function closeHughModal(){
    setOpenHugh(false)
  }

  return {
    deposit_hugh,
    setDepositHugh,
    openHugh,
    setOpenHugh,
    handleChangeHugh,
    openHughModal,
    closeHughModal,
  };
}

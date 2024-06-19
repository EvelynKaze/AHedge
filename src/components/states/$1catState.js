import { useState } from 'react';

export function useOnecatState() {
  const [deposit_onecat, setDepositOnecat] = useState(null);
  const [openOnecat, setOpenOnecat] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeOnecat = (event) => {
    const value = event.target.value;
    setDepositOnecat(value);
  };

  function openOnecatModal(){
    setOpenOnecat(true)
  }
  function closeOnecatModal(){
    setOpenOnecat(false)
  }

  return {
    deposit_onecat,
    setDepositOnecat,
    openOnecat,
    setOpenOnecat,
    handleChangeOnecat,
    openOnecatModal,
    closeOnecatModal,
  };
}

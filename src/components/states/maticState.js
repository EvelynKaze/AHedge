import { useState } from 'react';

export function useMATICState() {
  const [deposit_matic, setDepositMATIC] = useState(null);
  const [openMATIC, setOpenMATIC] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeMATIC = (event) => {
    const value = event.target.value;
    setDepositMATIC(value);
  };

  function openMATICModal(){
    setOpenMATIC(true)
  }
  function closeMATICModal(){
    setOpenMATIC(false)
  }

  return {
    deposit_matic,
    setDepositMATIC,
    openMATIC,
    setOpenMATIC,
    handleChangeMATIC,
    openMATICModal,
    closeMATICModal,
  };
}

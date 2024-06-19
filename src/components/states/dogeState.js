import { useState } from 'react';

export function useDOGEState() {
  const [deposit_doge, setDepositDOGE] = useState(null);
  const [openDOGE, setOpenDOGE] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDOGE = (event) => {
    const value = event.target.value;
    setDepositDOGE(value);
  };

  function openDOGEModal(){
    setOpenDOGE(true)
  }
  function closeDOGEModal(){
    setOpenDOGE(false)
  }

  return {
    deposit_doge,
    setDepositDOGE,
    openDOGE,
    setOpenDOGE,
    handleChangeDOGE,
    openDOGEModal,
    closeDOGEModal,
  };
}

import { useState } from 'react';

export function useMiniState() {
  const [deposit_mini, setDepositMini] = useState(null);
  const [openMini, setOpenMini] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeMini = (event) => {
    const value = event.target.value;
    setDepositMini(value);
  };

  function openMiniModal(){
    setOpenMini(true)
  }
  function closeMiniModal(){
    setOpenMini(false)
  }

  return {
    deposit_mini,
    setDepositMini,
    openMini,
    setOpenMini,
    handleChangeMini,
    openMiniModal,
    closeMiniModal,
  };
}

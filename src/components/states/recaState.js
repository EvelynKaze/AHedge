import { useState } from 'react';

export function useRecaState() {
  const [deposit_reca, setDepositReca] = useState(null);
  const [openReca, setOpenReca] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeReca = (event) => {
    const value = event.target.value;
    setDepositReca(value);
  };

  function openRecaModal(){
    setOpenReca(true)
  }
  function closeRecaModal(){
    setOpenReca(false)
  }

  return {
    deposit_reca,
    setDepositReca,
    openReca,
    setOpenReca,
    handleChangeReca,
    openRecaModal,
    closeRecaModal,
  };
}

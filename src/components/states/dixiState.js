import { useState } from 'react';

export function useDixiState() {
  const [deposit_dixi, setDepositDixi] = useState(null);
  const [openDixi, setOpenDixi] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDixi = (event) => {
    const value = event.target.value;
    setDepositDixi(value);
  };

  function openDixiModal(){
    setOpenDixi(true)
  }
  function closeDixiModal(){
    setOpenDixi(false)
  }

  return {
    deposit_dixi,
    setDepositDixi,
    openDixi,
    setOpenDixi,
    handleChangeDixi,
    openDixiModal,
    closeDixiModal,
  };
}

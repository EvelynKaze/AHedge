import { useState } from 'react';

export function useENJState() {
  const [deposit_enj, setDepositENJ] = useState(null);
  const [openENJ, setOpenENJ] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeENJ = (event) => {
    const value = event.target.value;
    setDepositENJ(value);
  };

  function openENJModal(){
    setOpenENJ(true)
  }
  function closeENJModal(){
    setOpenENJ(false)
  }

  return {
    deposit_enj,
    setDepositENJ,
    openENJ,
    setOpenENJ,
    handleChangeENJ,
    openENJModal,
    closeENJModal,
  };
}

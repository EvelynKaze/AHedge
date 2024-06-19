import { useState } from 'react';

export function useINJState() {
  const [deposit_inj, setDepositINJ] = useState(null);
  const [openINJ, setOpenINJ] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeINJ = (event) => {
    const value = event.target.value;
    setDepositINJ(value);
  };

  function openINJModal(){
    setOpenINJ(true)
  }
  function closeINJModal(){
    setOpenINJ(false)
  }

  return {
    deposit_inj,
    setDepositINJ,
    openINJ,
    setOpenINJ,
    handleChangeINJ,
    openINJModal,
    closeINJModal,
  };
}

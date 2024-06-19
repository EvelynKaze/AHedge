import { useState } from 'react';

export function useTnsrState() {
  const [deposit_tnsr, setDepositTnsr] = useState(null);
  const [openTnsr, setOpenTnsr] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeTnsr = (event) => {
    const value = event.target.value;
    setDepositTnsr(value);
  };

  function openTnsrModal(){
    setOpenTnsr(true)
  }
  function closeTnsrModal(){
    setOpenTnsr(false)
  }

  return {
    deposit_tnsr,
    setDepositTnsr,
    openTnsr,
    setOpenTnsr,
    handleChangeTnsr,
    openTnsrModal,
    closeTnsrModal,
  };
}

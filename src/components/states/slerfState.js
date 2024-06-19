import { useState } from 'react';

export function useSlerfState() {
  const [deposit_slerf, setDepositSlerf] = useState(null);
  const [openSlerf, setOpenSlerf] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSlerf = (event) => {
    const value = event.target.value;
    setDepositSlerf(value);
  };

  function openSlerfModal(){
    setOpenSlerf(true)
  }
  function closeSlerfModal(){
    setOpenSlerf(false)
  }

  return {
    deposit_slerf,
    setDepositSlerf,
    openSlerf,
    setOpenSlerf,
    handleChangeSlerf,
    openSlerfModal,
    closeSlerfModal,
  };
}

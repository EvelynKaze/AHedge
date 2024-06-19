import { useState } from 'react';

export function useBrettState() {
  const [deposit_brett, setDepositBrett] = useState(null);
  const [openBrett, setOpenBrett] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeBrett = (event) => {
    const value = event.target.value;
    setDepositBrett(value);
  };

  function openBrettModal(){
    setOpenBrett(true)
  }
  function closeBrettModal(){
    setOpenBrett(false)
  }

  return {
    deposit_brett,
    setDepositBrett,
    openBrett,
    setOpenBrett,
    handleChangeBrett,
    openBrettModal,
    closeBrettModal,
  };
}

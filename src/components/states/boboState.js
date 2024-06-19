import { useState } from 'react';

export function useBoboState() {
  const [deposit_bobo, setDepositBobo] = useState(null);
  const [openBobo, setOpenBobo] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeBobo = (event) => {
    const value = event.target.value;
    setDepositBobo(value);
  };

  function openBoboModal(){
    setOpenBobo(true)
  }
  function closeBoboModal(){
    setOpenBobo(false)
  }

  return {
    deposit_bobo,
    setDepositBobo,
    openBobo,
    setOpenBobo,
    handleChangeBobo,
    openBoboModal,
    closeBoboModal,
  };
}

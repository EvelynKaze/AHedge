import { useState } from 'react';

export function useKikiState() {
  const [deposit_kiki, setDepositKiki] = useState(null);
  const [openKiki, setOpenKiki] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeKiki = (event) => {
    const value = event.target.value;
    setDepositKiki(value);
  };

  function openKikiModal(){
    setOpenKiki(true)
  }
  function closeKikiModal(){
    setOpenKiki(false)
  }

  return {
    deposit_kiki,
    setDepositKiki,
    openKiki,
    setOpenKiki,
    handleChangeKiki,
    openKikiModal,
    closeKikiModal,
  };
}

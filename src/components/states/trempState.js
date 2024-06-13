import { useState } from 'react';

export function useTrempState() {
  const [deposit_tremp, setDepositTremp] = useState(null);
  const [openTremp, setOpenTremp] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeTremp = (event) => {
    const value = event.target.value;
    setDepositTremp(value);
  };

  function openTrempModal(){
    setOpenTremp(true)
  }
  function closeTrempModal(){
    setOpenTremp(false)
  }

  return {
    deposit_tremp,
    setDepositTremp,
    openTremp,
    setOpenTremp,
    handleChangeTremp,
    openTrempModal,
    closeTrempModal,
  };
}

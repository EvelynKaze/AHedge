import { useState } from 'react';

export function useMichiState() {
  const [deposit_michi, setDepositMichi] = useState(null);
  const [openMichi, setOpenMichi] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeMichi = (event) => {
    const value = event.target.value;
    setDepositMichi(value);
  };

  function openMichiModal(){
    setOpenMichi(true)
  }
  function closeMichiModal(){
    setOpenMichi(false)
  }

  return {
    deposit_michi,
    setDepositMichi,
    openMichi,
    setOpenMichi,
    handleChangeMichi,
    openMichiModal,
    closeMichiModal,
  };
}

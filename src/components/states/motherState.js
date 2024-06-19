import { useState } from 'react';

export function useMotherState() {
  const [deposit_mother, setDepositMother] = useState(null);
  const [openMother, setOpenMother] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeMother = (event) => {
    const value = event.target.value;
    setDepositMother(value);
  };

  function openMotherModal(){
    setOpenMother(true)
  }
  function closeMotherModal(){
    setOpenMother(false)
  }

  return {
    deposit_mother,
    setDepositMother,
    openMother,
    setOpenMother,
    handleChangeMother,
    openMotherModal,
    closeMotherModal,
  };
}

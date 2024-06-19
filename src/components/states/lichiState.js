import { useState } from 'react';

export function useLichiState() {
  const [deposit_lichi, setDepositLichi] = useState(null);
  const [openLichi, setOpenLichi] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeLichi = (event) => {
    const value = event.target.value;
    setDepositLichi(value);
  };

  function openLichiModal(){
    setOpenLichi(true)
  }
  function closeLichiModal(){
    setOpenLichi(false)
  }

  return {
    deposit_lichi,
    setDepositLichi,
    openLichi,
    setOpenLichi,
    handleChangeLichi,
    openLichiModal,
    closeLichiModal,
  };
}

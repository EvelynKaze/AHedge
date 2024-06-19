import { useState } from 'react';

export function useApeState() {
  const [deposit_ape, setDepositApe] = useState(null);
  const [openApe, setOpenApe] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeApe = (event) => {
    const value = event.target.value;
    setDepositApe(value);
  };

  function openApeModal(){
    setOpenApe(true)
  }
  function closeApeModal(){
    setOpenApe(false)
  }

  return {
    deposit_ape,
    setDepositApe,
    openApe,
    setOpenApe,
    handleChangeApe,
    openApeModal,
    closeApeModal,
  };
}

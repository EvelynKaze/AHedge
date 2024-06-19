import { useState } from 'react';

export function useADAState() {
  const [deposit_ada, setDepositADA] = useState(null);
  const [openADA, setOpenADA] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeADA = (event) => {
    const value = event.target.value;
    setDepositADA(value);
  };

  function openADAModal(){
    setOpenADA(true)
  }
  function closeADAModal(){
    setOpenADA(false)
  }

  return {
    deposit_ada,
    setDepositADA,
    openADA,
    setOpenADA,
    handleChangeADA,
    openADAModal,
    closeADAModal,
  };
}

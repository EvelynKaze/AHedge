import { useState } from 'react';

export function useCrodieState() {
  const [deposit_crodie, setDepositCrodie] = useState(null);
  const [openCrodie, setOpenCrodie] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeCrodie = (event) => {
    const value = event.target.value;
    setDepositCrodie(value);
  };

  function openCrodieModal(){
    setOpenCrodie(true)
  }
  function closeCrodieModal(){
    setOpenCrodie(false)
  }

  return {
    deposit_crodie,
    setDepositCrodie,
    openCrodie,
    setOpenCrodie,
    handleChangeCrodie,
    openCrodieModal,
    closeCrodieModal,
  };
}

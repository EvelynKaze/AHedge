import { useState } from 'react';

export function useTobiState() {
  const [deposit_tobi, setDepositTobi] = useState(null);
  const [openTobi, setOpenTobi] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeTobi = (event) => {
    const value = event.target.value;
    setDepositTobi(value);
  };

  function openTobiModal(){
    setOpenTobi(true)
  }
  function closeTobiModal(){
    setOpenTobi(false)
  }

  return {
    deposit_tobi,
    setDepositTobi,
    openTobi,
    setOpenTobi,
    handleChangeTobi,
    openTobiModal,
    closeTobiModal,
  };
}

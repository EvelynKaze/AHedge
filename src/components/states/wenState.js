import { useState } from 'react';

export function useWENState() {
  const [deposit_wen, setDepositWEN] = useState(null);
  const [openWEN, setOpenWEN] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeWEN = (event) => {
    const value = event.target.value;
    setDepositWEN(value);
  };

  function openWENModal(){
    setOpenWEN(true)
  }
  function closeWENModal(){
    setOpenWEN(false)
  }

  return {
    deposit_wen,
    setDepositWEN,
    openWEN,
    setOpenWEN,
    handleChangeWEN,
    openWENModal,
    closeWENModal,
  };
}

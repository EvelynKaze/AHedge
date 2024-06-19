import { useState } from 'react';

export function useWebState() {
  const [deposit_web, setDepositWeb] = useState(null);
  const [openWeb, setOpenWeb] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeWeb = (event) => {
    const value = event.target.value;
    setDepositWeb(value);
  };

  function openWebModal(){
    setOpenWeb(true)
  }
  function closeWebModal(){
    setOpenWeb(false)
  }

  return {
    deposit_web,
    setDepositWeb,
    openWeb,
    setOpenWeb,
    handleChangeWeb,
    openWebModal,
    closeWebModal,
  };
}

import { useState } from 'react';

export function useJUPState() {
  const [deposit_jup, setDepositJUP] = useState(null);
  const [openJUP, setOpenJUP] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeJUP = (event) => {
    const value = event.target.value;
    setDepositJUP(value);
  };

  function openJUPModal(){
    setOpenJUP(true)
  }
  function closeJUPModal(){
    setOpenJUP(false)
  }

  return {
    deposit_jup,
    setDepositJUP,
    openJUP,
    setOpenJUP,
    handleChangeJUP,
    openJUPModal,
    closeJUPModal,
  };
}

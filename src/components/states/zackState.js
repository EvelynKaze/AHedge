import { useState } from 'react';

export function useZackState() {
  const [deposit_zack, setDepositZack] = useState(null);
  const [openZack, setOpenZack] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeZack = (event) => {
    const value = event.target.value;
    setDepositZack(value);
  };

  function openZackModal(){
    setOpenZack(true)
  }
  function closeZackModal(){
    setOpenZack(false)
  }

  return {
    deposit_zack,
    setDepositZack,
    openZack,
    setOpenZack,
    handleChangeZack,
    openZackModal,
    closeZackModal,
  };
}

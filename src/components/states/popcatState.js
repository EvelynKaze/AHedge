import { useState } from 'react';

export function usePopcatState() {
  const [deposit_popcat, setDepositPopcat] = useState(null);
  const [openPopcat, setOpenPopcat] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangePopcat = (event) => {
    const value = event.target.value;
    setDepositPopcat(value);
  };

  function openPopcatModal(){
    setOpenPopcat(true)
  }
  function closePopcatModal(){
    setOpenPopcat(false)
  }

  return {
    deposit_popcat,
    setDepositPopcat,
    openPopcat,
    setOpenPopcat,
    handleChangePopcat,
    openPopcatModal,
    closePopcatModal,
  };
}

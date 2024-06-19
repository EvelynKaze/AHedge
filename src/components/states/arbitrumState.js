import { useState } from 'react';

export function useARBITRUMState() {
  const [deposit_arbitrum, setDepositARBITRUM] = useState(null);
  const [openARBITRUM, setOpenARBITRUM] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeARBITRUM = (event) => {
    const value = event.target.value;
    setDepositARBITRUM(value);
  };

  function openARBITRUMModal(){
    setOpenARBITRUM(true)
  }
  function closeARBITRUMModal(){
    setOpenARBITRUM(false)
  }

  return {
    deposit_arbitrum,
    setDepositARBITRUM,
    openARBITRUM,
    setOpenARBITRUM,
    handleChangeARBITRUM,
    openARBITRUMModal,
    closeARBITRUMModal,
  };
}

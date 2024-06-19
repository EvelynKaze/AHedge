import { useState } from 'react';

export function useHEXState() {
  const [deposit_hex, setDepositHEX] = useState(null);
  const [openHEX, setOpenHEX] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeHEX = (event) => {
    const value = event.target.value;
    setDepositHEX(value);
  };

  function openHEXModal(){
    setOpenHEX(true)
  }
  function closeHEXModal(){
    setOpenHEX(false)
  }

  return {
    deposit_hex,
    setDepositHEX,
    openHEX,
    setOpenHEX,
    handleChangeHEX,
    openHEXModal,
    closeHEXModal,
  };
}

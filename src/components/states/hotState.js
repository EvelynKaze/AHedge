import { useState } from 'react';

export function useHotState() {
  const [deposit_hot, setDepositHot] = useState(null);
  const [openHot, setOpenHot] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeHot = (event) => {
    const value = event.target.value;
    setDepositHot(value);
  };

  function openHotModal(){
    setOpenHot(true)
  }
  function closeHotModal(){
    setOpenHot(false)
  }

  return {
    deposit_hot,
    setDepositHot,
    openHot,
    setOpenHot,
    handleChangeHot,
    openHotModal,
    closeHotModal,
  };
}

import { useState } from 'react';

export function useDotState() {
  const [deposit_dot, setDepositDot] = useState(null);
  const [openDot, setOpenDot] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDot = (event) => {
    const value = event.target.value;
    setDepositDot(value);
  };

  function openDotModal(){
    setOpenDot(true)
  }
  function closeDotModal(){
    setOpenDot(false)
  }

  return {
    deposit_dot,
    setDepositDot,
    openDot,
    setOpenDot,
    handleChangeDot,
    openDotModal,
    closeDotModal,
  };
}

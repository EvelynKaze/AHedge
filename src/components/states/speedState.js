import { useState } from 'react';

export function useSpeedState() {
  const [deposit_speed, setDepositSpeed] = useState(null);
  const [openSpeed, setOpenSpeed] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSpeed = (event) => {
    const value = event.target.value;
    setDepositSpeed(value);
  };

  function openSpeedModal(){
    setOpenSpeed(true)
  }
  function closeSpeedModal(){
    setOpenSpeed(false)
  }

  return {
    deposit_speed,
    setDepositSpeed,
    openSpeed,
    setOpenSpeed,
    handleChangeSpeed,
    openSpeedModal,
    closeSpeedModal,
  };
}

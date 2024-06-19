import { useState } from 'react';

export function useDogState() {
  const [deposit_dog, setDepositDog] = useState(null);
  const [openDog, setOpenDog] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDog = (event) => {
    const value = event.target.value;
    setDepositDog(value);
  };

  function openDogModal(){
    setOpenDog(true)
  }
  function closeDogModal(){
    setOpenDog(false)
  }

  return {
    deposit_dog,
    setDepositDog,
    openDog,
    setOpenDog,
    handleChangeDog,
    openDogModal,
    closeDogModal,
  };
}

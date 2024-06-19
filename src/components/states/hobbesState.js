import { useState } from 'react';

export function useHobbesState() {
  const [deposit_hobbes, setDepositHobbes] = useState(null);
  const [openHobbes, setOpenHobbes] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeHobbes = (event) => {
    const value = event.target.value;
    setDepositHobbes(value);
  };

  function openHobbesModal(){
    setOpenHobbes(true)
  }
  function closeHobbesModal(){
    setOpenHobbes(false)
  }

  return {
    deposit_hobbes,
    setDepositHobbes,
    openHobbes,
    setOpenHobbes,
    handleChangeHobbes,
    openHobbesModal,
    closeHobbesModal,
  };
}

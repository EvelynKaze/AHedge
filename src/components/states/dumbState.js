import { useState } from 'react';

export function useDumbState() {
  const [deposit_dumb, setDepositDumb] = useState(null);
  const [openDumb, setOpenDumb] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDumb = (event) => {
    const value = event.target.value;
    setDepositDumb(value);
  };

  function openDumbModal(){
    setOpenDumb(true)
  }
  function closeDumbModal(){
    setOpenDumb(false)
  }

  return {
    deposit_dumb,
    setDepositDumb,
    openDumb,
    setOpenDumb,
    handleChangeDumb,
    openDumbModal,
    closeDumbModal,
  };
}

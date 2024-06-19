import { useState } from 'react';

export function useRedoState() {
  const [deposit_redo, setDepositRedo] = useState(null);
  const [openRedo, setOpenRedo] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeRedo = (event) => {
    const value = event.target.value;
    setDepositRedo(value);
  };

  function openRedoModal(){
    setOpenRedo(true)
  }
  function closeRedoModal(){
    setOpenRedo(false)
  }

  return {
    deposit_redo,
    setDepositRedo,
    openRedo,
    setOpenRedo,
    handleChangeRedo,
    openRedoModal,
    closeRedoModal,
  };
}

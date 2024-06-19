import { useState } from 'react';

export function useDukoState() {
  const [deposit_duko, setDepositDuko] = useState(null);
  const [openDuko, setOpenDuko] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDuko = (event) => {
    const value = event.target.value;
    setDepositDuko(value);
  };

  function openDukoModal(){
    setOpenDuko(true)
  }
  function closeDukoModal(){
    setOpenDuko(false)
  }

  return {
    deposit_duko,
    setDepositDuko,
    openDuko,
    setOpenDuko,
    handleChangeDuko,
    openDukoModal,
    closeDukoModal,
  };
}

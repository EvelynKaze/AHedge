import { useState } from 'react';

export function useStacheState() {
  const [deposit_stache, setDepositStache] = useState(null);
  const [openStache, setOpenStache] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeStache = (event) => {
    const value = event.target.value;
    setDepositStache(value);
  };

  function openStacheModal(){
    setOpenStache(true)
  }
  function closeStacheModal(){
    setOpenStache(false)
  }

  return {
    deposit_stache,
    setDepositStache,
    openStache,
    setOpenStache,
    handleChangeStache,
    openStacheModal,
    closeStacheModal,
  };
}

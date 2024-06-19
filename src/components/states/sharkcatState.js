import { useState } from 'react';

export function useSharkcatState() {
  const [deposit_sharkcat, setDepositSharkcat] = useState(null);
  const [openSharkcat, setOpenSharkcat] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSharkcat = (event) => {
    const value = event.target.value;
    setDepositSharkcat(value);
  };

  function openSharkcatModal(){
    setOpenSharkcat(true)
  }
  function closeSharkcatModal(){
    setOpenSharkcat(false)
  }

  return {
    deposit_sharkcat,
    setDepositSharkcat,
    openSharkcat,
    setOpenSharkcat,
    handleChangeSharkcat,
    openSharkcatModal,
    closeSharkcatModal,
  };
}

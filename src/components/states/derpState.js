import { useState } from 'react';

export function useDerpState() {
  const [deposit_derp, setDepositDerp] = useState(null);
  const [openDerp, setOpenDerp] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDerp = (event) => {
    const value = event.target.value;
    setDepositDerp(value);
  };

  function openDerpModal(){
    setOpenDerp(true)
  }
  function closeDerpModal(){
    setOpenDerp(false)
  }

  return {
    deposit_derp,
    setDepositDerp,
    openDerp,
    setOpenDerp,
    handleChangeDerp,
    openDerpModal,
    closeDerpModal,
  };
}

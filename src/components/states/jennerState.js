import { useState } from 'react';

export function useJennerState() {
  const [deposit_jenner, setDepositJenner] = useState(null);
  const [openJenner, setOpenJenner] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeJenner = (event) => {
    const value = event.target.value;
    setDepositJenner(value);
  };

  function openJennerModal(){
    setOpenJenner(true)
  }
  function closeJennerModal(){
    setOpenJenner(false)
  }

  return {
    deposit_jenner,
    setDepositJenner,
    openJenner,
    setOpenJenner,
    handleChangeJenner,
    openJennerModal,
    closeJennerModal,
  };
}

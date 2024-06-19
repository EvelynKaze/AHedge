import { useState } from 'react';

export function useAmcState() {
  const [deposit_amc, setDepositAmc] = useState(null);
  const [openAmc, setOpenAmc] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeAmc = (event) => {
    const value = event.target.value;
    setDepositAmc(value);
  };

  function openAmcModal(){
    setOpenAmc(true)
  }
  function closeAmcModal(){
    setOpenAmc(false)
  }

  return {
    deposit_amc,
    setDepositAmc,
    openAmc,
    setOpenAmc,
    handleChangeAmc,
    openAmcModal,
    closeAmcModal,
  };
}

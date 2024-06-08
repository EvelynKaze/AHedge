import { useState } from 'react';

export function useUSDTState() {
  const [deposit_usdt, setDepositUsdt] = useState(null);
  const [openUSDT, setOpenUSDT] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeUSDT = (event) => {
    const value = event.target.value;
    setDepositUsdt(value);
  };

  function openUSDTModal(){
    setOpenUSDT(true)
  }
  function closeUSDTModal(){
    setOpenUSDT(false)
  }

  return {
    deposit_usdt,
    setDepositUsdt,
    openUSDT,
    setOpenUSDT,
    handleChangeUSDT,
    openUSDTModal,
    closeUSDTModal,
  };
}

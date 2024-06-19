import { useState } from 'react';

export function useUSDCState() {
  const [deposit_usdc, setDepositUSDC] = useState(null);
  const [openUSDC, setOpenUSDC] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeUSDC = (event) => {
    const value = event.target.value;
    setDepositUSDC(value);
  };

  function openUSDCModal(){
    setOpenUSDC(true)
  }
  function closeUSDCModal(){
    setOpenUSDC(false)
  }

  return {
    deposit_usdc,
    setDepositUSDC,
    openUSDC,
    setOpenUSDC,
    handleChangeUSDC,
    openUSDCModal,
    closeUSDCModal,
  };
}

import { useState } from 'react';

export function useEthState() {
  const [deposit_eth, setDepositEth] = useState(null);
  const [openETH, setOpenETH] = useState(false);
  // const [inputValue, setInputValue] = useState('');


  const handleChangeETH = (event) => {
    const value = event.target.value;
    setDepositEth(value);
  };

  const openETHModal = () => {
    setOpenETH(true);
  };

  const closeETHModal = () => {
    setOpenETH(false);
  };

  return {
    deposit_eth,
    setDepositEth,
    openETH,
    setOpenETH,
    handleChangeETH,
    openETHModal,
    closeETHModal,
  };
}

import { useState } from 'react';

export function useGigaState() {
  const [deposit_giga, setDepositGiga] = useState(null);
  const [openGiga, setOpenGiga] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeGiga = (event) => {
    const value = event.target.value;
    setDepositGiga(value);
  };

  function openGigaModal(){
    setOpenGiga(true)
  }
  function closeGigaModal(){
    setOpenGiga(false)
  }

  return {
    deposit_giga,
    setDepositGiga,
    openGiga,
    setOpenGiga,
    handleChangeGiga,
    openGigaModal,
    closeGigaModal,
  };
}

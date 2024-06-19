import { useState } from 'react';

export function useFagcatState() {
  const [deposit_fagcat, setDepositFagcat] = useState(null);
  const [openFagcat, setOpenFagcat] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeFagcat = (event) => {
    const value = event.target.value;
    setDepositFagcat(value);
  };

  function openFagcatModal(){
    setOpenFagcat(true)
  }
  function closeFagcatModal(){
    setOpenFagcat(false)
  }

  return {
    deposit_fagcat,
    setDepositFagcat,
    openFagcat,
    setOpenFagcat,
    handleChangeFagcat,
    openFagcatModal,
    closeFagcatModal,
  };
}

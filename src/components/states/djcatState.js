import { useState } from 'react';

export function useDjcatState() {
  const [deposit_djcat, setDepositDjcat] = useState(null);
  const [openDjcat, setOpenDjcat] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeDjcat = (event) => {
    const value = event.target.value;
    setDepositDjcat(value);
  };

  function openDjcatModal(){
    setOpenDjcat(true)
  }
  function closeDjcatModal(){
    setOpenDjcat(false)
  }

  return {
    deposit_djcat,
    setDepositDjcat,
    openDjcat,
    setOpenDjcat,
    handleChangeDjcat,
    openDjcatModal,
    closeDjcatModal,
  };
}

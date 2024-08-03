import { useState } from 'react';

export function useBaseMemesState() {
  const [deposit_baseMemes, setDepositBaseMemes] = useState(null);
  const [openBaseMemes, setOpenBaseMemes] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeBaseMemes = (event) => {
    const value = event.target.value;
    setDepositBaseMemes(value);
  };

  function openBaseMemesModal(){
    setOpenBaseMemes(true)
  }
  function closeBaseMemesModal(){
    setOpenBaseMemes(false)
  }

  return {
    deposit_baseMemes,
    setDepositBaseMemes,
    openBaseMemes,
    setOpenBaseMemes,
    handleChangeBaseMemes,
    openBaseMemesModal,
    closeBaseMemesModal,
  };
}

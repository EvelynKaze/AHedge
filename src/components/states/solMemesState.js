import { useState } from 'react';

export function useSolMemesState() {
  const [deposit_solMemes, setDepositSolMemes] = useState(null);
  const [openSolMemes, setOpenSolMemes] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeSolMemes = (event) => {
    const value = event.target.value;
    setDepositSolMemes(value);
  };

  function openSolMemesModal(){
    setOpenSolMemes(true)
  }
  function closeSolMemesModal(){
    setOpenSolMemes(false)
  }

  return {
    deposit_solMemes,
    setDepositSolMemes,
    openSolMemes,
    setOpenSolMemes,
    handleChangeSolMemes,
    openSolMemesModal,
    closeSolMemesModal,
  };
}

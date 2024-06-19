import { useState } from 'react';

export function use$1catState() {
  const [deposit_$1cat, setDeposit$1cat] = useState(null);
  const [open$1cat, setOpen$1cat] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChange$1cat = (event) => {
    const value = event.target.value;
    setDeposit$1cat(value);
  };

  function open$1catModal(){
    setOpen$1cat(true)
  }
  function close$1catModal(){
    setOpen$1cat(false)
  }

  return {
    deposit_$1cat,
    setDeposit$1cat,
    open$1cat,
    setOpen$1cat,
    handleChange$1cat,
    open$1catModal,
    close$1catModal,
  };
}

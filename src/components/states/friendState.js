import { useState } from 'react';

export function useFriendState() {
  const [deposit_friend, setDepositFriend] = useState(null);
  const [openFriend, setOpenFriend] = useState(false)
  // const [inputValue, setInputValue] = useState('');


  const handleChangeFriend = (event) => {
    const value = event.target.value;
    setDepositFriend(value);
  };

  function openFriendModal(){
    setOpenFriend(true)
  }
  function closeFriendModal(){
    setOpenFriend(false)
  }

  return {
    deposit_friend,
    setDepositFriend,
    openFriend,
    setOpenFriend,
    handleChangeFriend,
    openFriendModal,
    closeFriendModal,
  };
}

import { Fragment, useState, useEffect, useContext } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from '../../components/Header.jsx'
// import { useSidebarContext, SidebarContext } from './../../context/SidebarContext'
import BaseLayout from '../../components/BaseLayout.js';
import { Dialog, Transition } from '@headlessui/react'
import { FaBitcoin, FaWallet } from "react-icons/fa"
// import { BsWallet } from "react-icons/bs"
import { FiCopy } from "react-icons/fi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';

export default function Deposit({ session }){
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [full_name, setFullName] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();
//////////////////////////// BTC ///////////////////////////////
const [withdraw_btc, setWithdrawBtc] = useState(null)
const [btcWalletAddress, setBTCWalletAddress] = useState('');

const handleChangeBTC = (event) => {
  const value = event.target.value;
  setWithdrawBtc(value);
  setInputValue(value);
};

const handleChangeBTCWalletAddress = (event) => {
  setBTCWalletAddress(event.target.value);
};


let [openBTC, setOpenBTC] = useState(false)
function closeBTCModal() {
  setOpenBTC(false)
}
function openBTCModal() {
  setOpenBTC(true)
}

async function withdrawBTC() {
  try {
    setLoading(true);

    const updates = {
      id: user.id,
      withdraw_btc,
      withdraw_btc_address: btcWalletAddress, // Add the wallet address here
      updated_at: new Date().toISOString(),
    };
    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    setOpenBTC(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
};
    ///////////////////////////////////////////////////////
    const [withdraw_eth, setWithdrawEth] = useState(null)
    const [ethWalletAddress, setETHWalletAddress] = useState('');

    
    const handleChangeETH = (event) => {
      const value = event.target.value;
      setWithdrawEth(value);
      setInputValue(value);
    };

    const handleChangeETHWalletAddress = (event) => {
      setETHWalletAddress(event.target.value);
    };

    let [openETH, setOpenETH] = useState(false)
    function openETHModal(){
      setOpenETH(true)
    }
    function closeETHModal(){
      setOpenETH(false)
    }
    async function withdrawETH() {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          withdraw_eth,
          withdraw_eth_address: ethWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenETH(false)
          toast.success("Transaction Order placed. Awaiting Approval.")
        } catch (error) {
          alert('Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };
////////////////////////// USDT /////////////////////////////////
const [withdraw_usdt, setWithdrawUsdt] = useState(null)
const [usdtWalletAddress, setUSDTWalletAddress] = useState('');


const handleChangeUSDT = (event) => {
  const value = event.target.value;
  setWithdrawUsdt(value);
  setInputValue(value);
};

const handleChangeUSDTWalletAddress = (event) => {
  setUSDTWalletAddress(event.target.value);
};

let [openUSDT, setOpenUSDT] = useState(false)
function openUSDTModal(){
  setOpenUSDT(true)
}
function closeUSDTModal(){
  setOpenUSDT(false)
}

async function withdrawUSDT() {
  try {
    setLoading(true)

    const updates = {
      id: user.id,
      withdraw_usdt,
      withdraw_usdt_address: usdtWalletAddress, // Add the wallet address here
      updated_at: new Date().toISOString(),
    }
    let { error } = await supabase.from('profiles').upsert(updates)
    if (error) throw error
      setOpenUSDT(false)
      toast.success("Transaction Order placed. Awaiting Approval.")
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
};
////////////////////////////////////////////////////////////////////
////////////////////////// XRP /////////////////////////////////
const [xrpWalletAddress, setXRPWalletAddress] = useState('');
const [withdraw_xrp, setWithdrawXRP] = useState(null)

const handleChangeXRP = (event) => {
  const value = event.target.value;
  setWithdrawXRP(value);
  setInputValue(value);
};

const handleChangeXRPWalletAddress = (event) => {
  setXRPWalletAddress(event.target.value);
};


let [openXRP, setOpenXRP] = useState(false)
function openXRPModal(){
  setOpenXRP(true)
}
function closeXRPModal(){
  setOpenXRP(false)
}

async function withdrawXRP() {
  try {
    setLoading(true)

    const updates = {
      id: user.id,
      withdraw_xrp,
      withdraw_xrp_address: xrpWalletAddress, // Add the wallet address here
      updated_at: new Date().toISOString(),
    }
    let { error } = await supabase.from('profiles').upsert(updates)
    if (error) throw error
      setOpenXRP(false)
      toast.success("Staking Order placed. Awaiting Approval.")
    } catch (error) {
      alert('internal Server Error: Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
};
///////////////////////// ADA //////////////////////////////////
  const [adaWalletAddress, setADAWalletAddress] = useState('');
  const [withdraw_ada, setWithdrawADA] = useState(null)
  
  const handleChangeADA = (event) => {
    const value = event.target.value;
    setWithdrawADA(value);
    setInputValue(value);
  };

  const handleChangeADAWalletAddress = (event) => {
    setADAWalletAddress(event.target.value);
  };

  let [openADA, setOpenADA] = useState(false)
  function openADAModal(){
    setOpenADA(true)
  }
  function closeADAModal(){
    setOpenADA(false)
  }

  async function withdrawADA() {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        withdraw_ada,
        withdraw_ada_address: adaWalletAddress, // Add the wallet address here
        updated_at: new Date().toISOString(),
      }
      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
        setOpenADA(false)
        toast.success("Staking Order placed. Awaiting Approval.")
      } catch (error) {
        alert('internal Server Error: Error updating the data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
  };

////////////////////////// XLM /////////////////////////////////
    const [xlmWalletAddress, setXLMWalletAddress] = useState('');
    const [withdraw_xlm, setWithdrawXLM] = useState(null)
    
    const handleChangeXLM = (event) => {
      const value = event.target.value;
      setWithdrawXLM(value);
      setInputValue(value);
    };

    const handleChangeXLMWalletAddress = (event) => {
      setXLMWalletAddress(event.target.value);
    };

    let [openXLM, setOpenXLM] = useState(false)
    function openXLMModal(){
      setOpenXLM(true)
    }
    function closeXLMModal(){
      setOpenXLM(false)
    }

    async function withdrawXLM() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_xlm,
          withdraw_xlm_address: xlmWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenXLM(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

///////////////////////// HEX //////////////////////////////////
    const [hexWalletAddress, setHEXWalletAddress] = useState('');
    const [withdraw_hex, setWithdrawHEX] = useState(null)
    
    const handleChangeHEX = (event) => {
      const value = event.target.value;
      setWithdrawHEX(value);
      setInputValue(value);
    };

    const handleChangeHEXWalletAddress = (event) => {
      setHEXWalletAddress(event.target.value);
    };

    let [openHEX, setOpenHEX] = useState(false)
    function openHEXModal(){
      setOpenHEX(true)
    }
    function closeHEXModal(){
      setOpenHEX(false)
    }

    async function withdrawHEX() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_hex,
          withdraw_hex_address: hexWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenHEX(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

///////////////////////// BNB //////////////////////////////////
    const [bnbWalletAddress, setBNBWalletAddress] = useState('');
    const [withdraw_bnb, setWithdrawBNB] = useState(null)
   
    const handleChangeBNB = (event) => {
      const value = event.target.value;
      setWithdrawBNB(value);
      setInputValue(value);
    };

    const handleChangeBNBWalletAddress = (event) => {
      setBNBWalletAddress(event.target.value);
    };

    let [openBNB, setOpenBNB] = useState(false)
    function openBNBModal(){
      setOpenBNB(true)
    }
    function closeBNBModal(){
      setOpenBNB(false)
    }

    async function withdrawBNB() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_bnb,
          withdraw_bnb_address: bnbWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenBNB(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

////////////////////// SOL /////////////////////////////////////
    const [solWalletAddress, setSOLWalletAddress] = useState('');
    const [withdraw_sol, setWithdrawSOL] = useState(null)
    
    const handleChangeSOL = (event) => {
      const value = event.target.value;
      setWithdrawSOL(value);
      setInputValue(value);
    };

    const handleChangeSOLWalletAddress = (event) => {
      setSOLWalletAddress(event.target.value);
    };

    let [openSOL, setOpenSOL] = useState(false)
    function openSOLModal(){
      setOpenSOL(true)
    }
    function closeSOLModal(){
      setOpenSOL(false)
    }

    async function withdrawSOL() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_sol,
          withdraw_sol_address: solWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenSOL(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

////////////////////////// TRX /////////////////////////////////
    const [trxWalletAddress, setTRXWalletAddress] = useState('');
    const [withdraw_trx, setWithdrawTRX] = useState(null)
   
    const handleChangeTRX = (event) => {
      const value = event.target.value;
      setWithdrawTRX(value);
      setInputValue(value);
    };

    const handleChangeTRXWalletAddress = (event) => {
      setTRXWalletAddress(event.target.value);
    };

    let [openTRX, setOpenTRX] = useState(false)
    function openTRXModal(){
      setOpenTRX(true)
    }
    function closeTRXModal(){
      setOpenTRX(false)
    }

    async function withdrawTRX() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_trx,
          withdraw_trx_address: trxWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenTRX(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

////////////////////////// USDC /////////////////////////////////
    const [usdcWalletAddress, setUSDCWalletAddress] = useState('');
    const [withdraw_usdc, setWithdrawUSDC] = useState(null)
    
    const handleChangeUSDC = (event) => {
      const value = event.target.value;
      setWithdrawUSDC(value);
      setInputValue(value);
    };

    const handleChangeUSDCWalletAddress = (event) => {
      setUSDCWalletAddress(event.target.value);
    };

    let [openUSDC, setOpenUSDC] = useState(false)
    function openUSDCModal(){
      setOpenUSDC(true)
    }
    function closeUSDCModal(){
      setOpenUSDC(false)
    }

    async function withdrawUSDC({ withdraw_usdc }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_usdc,
          withdraw_usdc_address: usdcWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenUSDC(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

//////////////////////////// INJ ///////////////////////////////
    const [injWalletAddress, setINJWalletAddress] = useState('');
    const [withdraw_inj, setWithdrawINJ] = useState(null)
    
    const handleChangeINJ = (event) => {
      const value = event.target.value;
      setWithdrawINJ(value);
      setInputValue(value);
    };

    const handleChangeINJWalletAddress = (event) => {
      setINJWalletAddress(event.target.value);
    };

    let [openINJ, setOpenINJ] = useState(false)
    function openINJModal(){
      setOpenINJ(true)
    }
    function closeINJModal(){
      setOpenINJ(false)
    }

    async function withdrawINJ() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_inj,
          withdraw_inj_address: injWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenINJ(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

//////////////////////////// SHIB ///////////////////////////////
    const [shibWalletAddress, setSHIBWalletAddress] = useState('');
    const [withdraw_shib, setWithdrawSHIB] = useState(null)
    
    const handleChangeSHIB = (event) => {
      const value = event.target.value;
      setWithdrawSHIB(value);
      setInputValue(value);
    };

    const handleChangeSHIBWalletAddress = (event) => {
      setSHIBWalletAddress(event.target.value);
    };

    let [openSHIB, setOpenSHIB] = useState(false)
    function openSHIBModal(){
      setOpenSHIB(true)
    }
    function closeSHIBModal(){
      setOpenSHIB(false)
    }

    async function withdrawSHIB() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_shib,
          withdraw_shib_address: shibWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenSHIB(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };
    
//////////////////////////// MATIC ///////////////////////////////
    const [maticWalletAddress, setMATICWalletAddress] = useState('');
    const [withdraw_matic, setWithdrawMATIC] = useState(null)
    
    const handleChangeMATIC = (event) => {
      const value = event.target.value;
      setWithdrawMATIC(value);
      setInputValue(value);
    };

    const handleChangeMATICWalletAddress = (event) => {
      setMATICWalletAddress(event.target.value);
    };

    let [openMATIC, setOpenMATIC] = useState(false)
    function openMATICModal(){
      setOpenMATIC(true)
    }
    function closeMATICModal(){
      setOpenMATIC(false)
    }

    async function withdrawMATIC() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_matic,
          withdraw_matic_address: maticWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenMATIC(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

//////////////////////////// BONK ///////////////////////////////
    const [bonkWalletAddress, setBONKWalletAddress] = useState('');
    const [withdraw_bonk, setWithdrawBONK] = useState(null)
   
    const handleChangeBONK = (event) => {
      const value = event.target.value;
      setWithdrawBONK(value);
      setInputValue(value);
    };

    const handleChangeBONKWalletAddress = (event) => {
      setBONKWalletAddress(event.target.value);
    };

    let [openBONK, setOpenBONK] = useState(false)
    function openBONKModal(){
      setOpenBONK(true)
    }
    function closeBONKModal(){
      setOpenBONK(false)
    }

    async function withdrawBONK() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_bonk,
          withdraw_bonk_address: bonkWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenBONK(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };

//////////////////////////// DOGE ///////////////////////////////
    const [dogeWalletAddress, setDOGEWalletAddress] = useState('');
    const [withdraw_doge, setWithdrawDOGE] = useState(null)
    
    const handleChangeDOGE = (event) => {
      const value = event.target.value;
      setWithdrawDOGE(value);
      setInputValue(value);
    };

    const handleChangeDOGEWalletAddress = (event) => {
      setDOGEWalletAddress(event.target.value);
    };

    let [openDOGE, setOpenDOGE] = useState(false)
    function openDOGEModal(){
      setOpenDOGE(true)
    }
    function closeDOGEModal(){
      setOpenDOGE(false)
    }

    async function withdrawDOGE() {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_doge,
          withdraw_doge_address: dogeWalletAddress, // Add the wallet address here
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenDOGE(false)
          toast.success("Staking Order placed. Awaiting Approval.")
        } catch (error) {
          alert('internal Server Error: Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };
        //////////////////////////// ARBITRUM ///////////////////////////////
        const [arbitrumWalletAddress, setARBITRUMWalletAddress] = useState('');
        const [withdraw_arbitrum, setWithdrawARBITRUM] = useState(null)
        
        const handleChangeARBITRUM = (event) => {
          const value = event.target.value;
          setWithdrawARBITRUM(value);
          setInputValue(value);
        };

        const handleChangeARBITRUMWalletAddress = (event) => {
          setARBITRUMWalletAddress(event.target.value);
        };

        let [openARBITRUM, setOpenARBITRUM] = useState(false)
        function openARBITRUMModal(){
          setOpenARBITRUM(true)
        }
        function closeARBITRUMModal(){
          setOpenARBITRUM(false)
        }

        async function withdrawARBITRUM() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_arbitrum,
              withdraw_arbitrum_address: arbitrumWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenARBITRUM(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// ENJ ///////////////////////////////
        const [enjWalletAddress, setENJWalletAddress] = useState('');
        const [withdraw_enj, setWithdrawENJ] = useState(null)
        
        const handleChangeENJ = (event) => {
          const value = event.target.value;
          setWithdrawENJ(value);
          setInputValue(value);
        };

        const handleChangeENJWalletAddress = (event) => {
          setENJWalletAddress(event.target.value);
        };

        let [openENJ, setOpenENJ] = useState(false)
        function openENJModal(){
          setOpenENJ(true)
        }
        function closeENJModal(){
          setOpenENJ(false)
        }

        async function withdrawENJ() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_enj,
              withdraw_enj_address: enjWalletAddress,
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenENJ(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// BRC20 ///////////////////////////////
        const [brcWalletAddress, setBRCWalletAddress] = useState('');
        const [withdraw_brc, setWithdrawBRC] = useState(null)
        
        const handleChangeBRC = (event) => {
          const value = event.target.value;
          setWithdrawBRC(value);
          setInputValue(value);
        };

        const handleChangeBRCWalletAddress = (event) => {
          setBRCWalletAddress(event.target.value);
        };

        let [openBRC, setOpenBRC] = useState(false)
        function openBRCModal(){
          setOpenBRC(true)
        }
        function closeBRCModal(){
          setOpenBRC(false)
        }

        async function withdrawBRC() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_brc,
              withdraw_brc_address: brcWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenBRC(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// JUP ///////////////////////////////
        const [jupWalletAddress, setJUPWalletAddress] = useState('');
        const [withdraw_jup, setWithdrawJUP] = useState(null)
        
        const handleChangeJUP = (event) => {
          const value = event.target.value;
          setWithdrawJUP(value);
          setInputValue(value);
        };

        const handleChangeJUPWalletAddress = (event) => {
          setJUPWalletAddress(event.target.value);
        };

        let [openJUP, setOpenJUP] = useState(false)
        function openJUPModal(){
          setOpenJUP(true)
        }
        function closeJUPModal(){
          setOpenJUP(false)
        }

        async function withdrawJUP() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_jup,
              withdraw_jup_address: jupWalletAddress,
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenJUP(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// WEN ///////////////////////////////
        const [wenWalletAddress, setWENWalletAddress] = useState('');
        const [withdraw_wen, setWithdrawWEN] = useState(null)
        
        const handleChangeWEN = (event) => {
          const value = event.target.value;
          setWithdrawWEN(value);
          setInputValue(value);
        };

        const handleChangeWENWalletAddress = (event) => {
          setWENWalletAddress(event.target.value);
        };

        let [openWEN, setOpenWEN] = useState(false)
        function openWENModal(){
          setOpenWEN(true)
        }
        function closeWENModal(){
          setOpenWEN(false)
        }

        async function withdrawWEN() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_wen,
              withdraw_wen_address: wenWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenWEN(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };

        //////////////////////////// Michi ///////////////////////////////
        const [michiWalletAddress, setMichiWalletAddress] = useState('');
        const [withdraw_michi, setWithdrawMichi] = useState(null)
        
        const handleChangeMichi = (event) => {
          const value = event.target.value;
          setWithdrawMichi(value);
          setInputValue(value);
        };

        const handleChangeMichiWalletAddress = (event) => {
          setMichiWalletAddress(event.target.value);
        };

        let [openMichi, setOpenMichi] = useState(false)
        function openMichiModal(){
          setOpenMichi(true)
        }
        function closeMichiModal(){
          setOpenMichi(false)
        }

        async function withdrawMichi() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_michi,
              withdraw_michi_address: michiWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenMichi(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// Wif ///////////////////////////////
        const [wifWalletAddress, setWifWalletAddress] = useState('');
        const [withdraw_wif, setWithdrawWif] = useState(null)
        
        const handleChangeWif = (event) => {
          const value = event.target.value;
          setWithdrawWif(value);
          setInputValue(value);
        };

        const handleChangeWifWalletAddress = (event) => {
          setWifWalletAddress(event.target.value);
        };

        let [openWif, setOpenWif] = useState(false)
        function openWifModal(){
          setOpenWif(true)
        }
        function closeWifModal(){
          setOpenWif(false)
        }

        async function withdrawWif() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_wif,
              withdraw_wif_address: wifWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenWif(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// $brett ///////////////////////////////
        const [brettWalletAddress, setBrettWalletAddress] = useState('');
        const [withdraw_brett, setWithdrawBrett] = useState(null)
        
        const handleChangeBrett = (event) => {
          const value = event.target.value;
          setWithdrawBrett(value);
          setInputValue(value);
        };

        const handleChangeBrettWalletAddress = (event) => {
          setBrettWalletAddress(event.target.value);
        };

        let [openBrett, setOpenBrett] = useState(false)
        function openBrettModal(){
          setOpenBrett(true)
        }
        function closeBrettModal(){
          setOpenBrett(false)
        }

        async function withdrawBrett() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_brett,
              withdraw_brett_address: brettWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenBrett(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// $friend ///////////////////////////////
        const [friendWalletAddress, setFriendWalletAddress] = useState('');
        const [withdraw_friend, setWithdrawFriend] = useState(null)
        
        const handleChangeFriend = (event) => {
          const value = event.target.value;
          setWithdrawFriend(value);
          setInputValue(value);
        };

        const handleChangeFriendWalletAddress = (event) => {
          setFriendWalletAddress(event.target.value);
        };

        let [openFriend, setOpenFriend] = useState(false)
        function openFriendModal(){
          setOpenFriend(true)
        }
        function closeFriendModal(){
          setOpenFriend(false)
        }

        async function withdrawFriend() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_friend,
              withdraw_friend_address: friendWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenFriend(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
        //////////////////////////// $tnsr ///////////////////////////////
        const [tnsrWalletAddress, setTnsrWalletAddress] = useState('');
        const [withdraw_tnsr, setWithdrawTnsr] = useState(null)
        
        const handleChangeTnsr = (event) => {
          const value = event.target.value;
          setWithdrawTnsr(value);
          setInputValue(value);
        };

        const handleChangeTnsrWalletAddress = (event) => {
          setTnsrWalletAddress(event.target.value);
        };

        let [openTnsr, setOpenTnsr] = useState(false)
        function openTnsrModal(){
          setOpenTnsr(true)
        }
        function closeTnsrModal(){
          setOpenTnsr(false)
        }

        async function withdrawTnsr() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_tnsr,
              withdraw_tnsr_address: tnsrWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenTnsr(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $hobbes ///////////////////////////////
        const [hobbesWalletAddress, setHobbesWalletAddress] = useState('');
        const [withdraw_hobbes, setWithdrawHobbes] = useState(null)
        
        const handleChangeHobbes = (event) => {
          const value = event.target.value;
          setWithdrawHobbes(value);
          setInputValue(value);
        };

        const handleChangeHobbesWalletAddress = (event) => {
          setHobbesWalletAddress(event.target.value);
        };

        let [openHobbes, setOpenHobbes] = useState(false)
        function openHobbesModal(){
          setOpenHobbes(true)
        }
        function closeHobbesModal(){
          setOpenHobbes(false)
        }

        async function withdrawHobbes() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_hobbes,
              withdraw_hobbes_address: hobbesWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenHobbes(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $mew ///////////////////////////////
        const [mewWalletAddress, setMewWalletAddress] = useState('');
        const [withdraw_mew, setWithdrawMew] = useState(null)
        
        const handleChangeMew = (event) => {
          const value = event.target.value;
          setWithdrawMew(value);
          setInputValue(value);
        };

        const handleChangeMewWalletAddress = (event) => {
          setMewWalletAddress(event.target.value);
        };

        let [openMew, setOpenMew] = useState(false)
        function openMewModal(){
          setOpenMew(true)
        }
        function closeMewModal(){
          setOpenMew(false)
        }

        async function withdrawMew() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_mew,
              withdraw_mew_address: mewWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenMew(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $popcat ///////////////////////////////
        const [popcatWalletAddress, setPopcatWalletAddress] = useState('');
        const [withdraw_popcat, setWithdrawPopcat] = useState(null)
        
        const handleChangePopcat = (event) => {
          const value = event.target.value;
          setWithdrawPopcat(value);
          setInputValue(value);
        };

        const handleChangePopcatWalletAddress = (event) => {
          setPopcatWalletAddress(event.target.value);
        };

        let [openPopcat, setOpenPopcat] = useState(false)
        function openPopcatModal(){
          setOpenPopcat(true)
        }
        function closePopcatModal(){
          setOpenPopcat(false)
        }

        async function withdrawPopcat() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_popcat,
              withdraw_popcat_address: popcatWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenPopcat(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $sharkcat ///////////////////////////////
        const [sharkcatWalletAddress, setSharkcatWalletAddress] = useState('');
        const [withdraw_sharkcat, setWithdrawSharkcat] = useState(null)
        
        const handleChangeSharkcat = (event) => {
          const value = event.target.value;
          setWithdrawSharkcat(value);
          setInputValue(value);
        };

        const handleChangeSharkcatWalletAddress = (event) => {
          setSharkcatWalletAddress(event.target.value);
        };

        let [openSharkcat, setOpenSharkcat] = useState(false)
        function openSharkcatModal(){
          setOpenSharkcat(true)
        }
        function closeSharkcatModal(){
          setOpenSharkcat(false)
        }

        async function withdrawSharkcat() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_sharkcat,
              withdraw_sharkcat_address: sharkcatWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenSharkcat(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $crodie ///////////////////////////////
        const [crodieWalletAddress, setCrodieWalletAddress] = useState('');
        const [withdraw_crodie, setWithdrawCrodie] = useState(null)
        
        const handleChangeCrodie = (event) => {
          const value = event.target.value;
          setWithdrawCrodie(value);
          setInputValue(value);
        };

        const handleChangeCrodieWalletAddress = (event) => {
          setCrodieWalletAddress(event.target.value);
        };

        let [openCrodie, setOpenCrodie] = useState(false)
        function openCrodieModal(){
          setOpenCrodie(true)
        }
        function closeCrodieModal(){
          setOpenCrodie(false)
        }

        async function withdrawCrodie() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_crodie,
              withdraw_crodie_address: crodieWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenCrodie(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $bobo ///////////////////////////////
        const [boboWalletAddress, setBoboWalletAddress] = useState('');
        const [withdraw_bobo, setWithdrawBobo] = useState(null)
        
        const handleChangeBobo = (event) => {
          const value = event.target.value;
          setWithdrawBobo(value);
          setInputValue(value);
        };

        const handleChangeBoboWalletAddress = (event) => {
          setBoboWalletAddress(event.target.value);
        };

        let [openBobo, setOpenBobo] = useState(false)
        function openBoboModal(){
          setOpenBobo(true)
        }
        function closeBoboModal(){
          setOpenBobo(false)
        }

        async function withdrawBobo() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_bobo,
              withdraw_bobo_address: boboWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenBobo(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $pork ///////////////////////////////
        const [porkWalletAddress, setPorkWalletAddress] = useState('');
        const [withdraw_pork, setWithdrawPork] = useState(null)
        
        const handleChangePork = (event) => {
          const value = event.target.value;
          setWithdrawPork(value);
          setInputValue(value);
        };

        const handleChangePorkWalletAddress = (event) => {
          setPorkWalletAddress(event.target.value);
        };

        let [openPork, setOpenPork] = useState(false)
        function openPorkModal(){
          setOpenPork(true)
        }
        function closePorkModal(){
          setOpenPork(false)
        }

        async function withdrawPork() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_pork,
              withdraw_pork_address: porkWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenPork(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $wolf ///////////////////////////////
        const [wolfWalletAddress, setWolfWalletAddress] = useState('');
        const [withdraw_wolf, setWithdrawWolf] = useState(null)
        
        const handleChangeWolf = (event) => {
          const value = event.target.value;
          setWithdrawWolf(value);
          setInputValue(value);
        };

        const handleChangeWolfWalletAddress = (event) => {
          setWolfWalletAddress(event.target.value);
        };

        let [openWolf, setOpenWolf] = useState(false)
        function openWolfModal(){
          setOpenWolf(true)
        }
        function closeWolfModal(){
          setOpenWolf(false)
        }

        async function withdrawWolf() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_wolf,
              withdraw_wolf_address: wolfWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenWolf(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
        //////////////////////////// $andy ///////////////////////////////
        const [andyWalletAddress, setAndyWalletAddress] = useState('');
        const [withdraw_andy, setWithdrawAndy] = useState(null)
        
        const handleChangeAndy = (event) => {
          const value = event.target.value;
          setWithdrawAndy(value);
          setInputValue(value);
        };

        const handleChangeAndyWalletAddress = (event) => {
          setAndyWalletAddress(event.target.value);
        };

        let [openAndy, setOpenAndy] = useState(false)
        function openAndyModal(){
          setOpenAndy(true)
        }
        function closeAndyModal(){
          setOpenAndy(false)
        }

        async function withdrawAndy() {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              withdraw_andy,
              withdraw_andy_address: andyWalletAddress, // Add the wallet address here
              updated_at: new Date().toISOString(),
            }
            let { error } = await supabase.from('profiles').upsert(updates)
            if (error) throw error
              setOpenAndy(false)
              toast.success("Staking Order placed. Awaiting Approval.")
            } catch (error) {
              alert('internal Server Error: Error updating the data!')
              console.log(error)
            } finally {
              setLoading(false)
            }
        };
    
////////////////////////////////////////////////////////////////////

   

    useEffect(() => {
      getProfile()
    }, [session])

    async function getProfile() {
      try {
        setLoading(true)
  
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`full_name, avatar_url`)
          .eq('id', user.id)
          .single()
  
        if (error && status !== 406) {
          throw error
        }
  
        if (data && data.full_name) {
          setFullName(data.full_name)
          setAvatarUrl(data.avatar_url)
        }
      } catch (error) {
        console.log('Error loading user data!'),
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    const handleDeposit = async () =>{
      router.push('/dashboard/deposit')
    }

  return (
    <div className="bg-gray-100 h-screen">
      <BaseLayout>
        <Header />
        <div className="w-full px-4 lg:-mt-16 py-16 lg:py-0">
          <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          <div className="space-y-2 mb-4 text-center">
            <h2 className="font-bold text-3xl bg-cyan-500 w-20 h-20 m-auto flex justify-center items-center rounded-full text-white">
                <FaWallet />
            </h2>
            <h2 className="font-bold text-xl lg:text-2xl text-gray-700">You&#39;re almost ready to withdraw!</h2>
            <h4 className="lg:font-semibold">To make a withdraw, please select a cryptocurrency, add a withdraw wallet,  <br />and specify amount.</h4>
            <p className="text-xs font-light">Send your funds directly to your wallet</p>
          </div>
        
          <div className="mx-auto w-full max-w-2xl gap-x-4 gap-y-1 grid grid-cols-2">
            <div onClick={openBTCModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300
            cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">BTC</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openETHModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
            cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">ETH</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openUSDTModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">USDT</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openXRPModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">XRP</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openADAModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">ADA</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openXLMModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">XLM</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openHEXModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">HEX</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openBNBModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">BNB</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openSOLModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">SOL</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openTRXModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">TRX</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openUSDCModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">USDC</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openINJModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">INJ</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openSHIBModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">SHIB</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openMATICModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">MATIC</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openBONKModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">BONK</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openDOGEModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">DOGE</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openARBITRUMModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">ARBITRUM</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openENJModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">ENJ</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openBRCModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">BRC20</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openJUPModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">JUP</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openWENModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">WEN</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openMichiModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$michi</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openWifModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$wif</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openBrettModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$brett</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openFriendModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$friend</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openTnsrModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$tnsr</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openHobbesModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$hobbes</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openMewModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$mew</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openPopcatModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$popcat</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openSharkcatModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$sharkcat</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openCrodieModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$crodie</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openBoboModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$bobo</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openPorkModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className=" font-medium ">$pork</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openWolfModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className="font-medium">$wolf</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
            <div onClick={openAndyModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
              cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <p className="font-medium">$andy</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        {/* BTC */}
        <Transition appear show={openBTC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBTCModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send Bitcoin
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Bitcoin Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={btcWalletAddress}
                        onChange={handleChangeBTCWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_btc || inputValue}
                        onChange={handleChangeBTC}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawBTC()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeBTCModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                        <div className="text-red-600 font-semibold flex space-x-2">
                            <AiOutlineInfoCircle className="animate-bounce" />
                            <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                        </div>
                        <div className="flex space-x-2 text-gray-500">
                            <AiOutlineInfoCircle />
                            <p className='text-xs'>Account will be credited once we received your payment.</p>
                        </div>
                        </div> */}
                    </form>

                    
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ETH */}
        <Transition appear show={openETH} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeETHModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send ETH
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">ETH Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={ethWalletAddress}
                        onChange={handleChangeETHWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_eth || inputValue}
                        onChange={handleChangeETH}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawETH()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeETHModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                        <div className="text-red-600 font-semibold flex space-x-2">
                            <AiOutlineInfoCircle className="animate-bounce" />
                            <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                        </div>
                        <div className="flex space-x-2 text-gray-500">
                            <AiOutlineInfoCircle />
                            <p className='text-xs'>Account will be credited once we received your payment.</p>
                        </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* USDT */}
        <Transition appear show={openUSDT} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeUSDTModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send USDT
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">USDT Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={usdtWalletAddress}
                        onChange={handleChangeUSDTWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_usdt || inputValue}
                        onChange={handleChangeUSDT}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawUSDT()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeUSDTModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* XRP */}
        <Transition appear show={openXRP} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeXRPModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send XRP
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">XRP Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={xrpWalletAddress}
                        onChange={handleChangeXRPWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_xrp || inputValue}
                        onChange={handleChangeXRP}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawXRP()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeXRPModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ADA */}
        <Transition appear show={openADA} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeADAModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send ADA
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">ADA Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={adaWalletAddress}
                        onChange={handleChangeADAWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_ada || inputValue}
                        onChange={handleChangeADA}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawADA()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeXRPModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* XLM */}
        <Transition appear show={openXLM} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeXLMModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send XLM
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">XLM Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={xlmWalletAddress}
                        onChange={handleChangeXLMWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_xlm || inputValue}
                        onChange={handleChangeXLM}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawXLM()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeXLMModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* HEX */}
        <Transition appear show={openHEX} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeHEXModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send HEX
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">HEX Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={hexWalletAddress}
                        onChange={handleChangeHEXWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_hex || inputValue}
                        onChange={handleChangeHEX}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawHEX()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeHEXModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* BNB */}
        <Transition appear show={openBNB} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBNBModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send BNB
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">BNB Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={bnbWalletAddress}
                        onChange={handleChangeBNBWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_bnb || inputValue}
                        onChange={handleChangeBNB}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawBNB()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeBNBModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* SOL */}
        <Transition appear show={openSOL} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSOLModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send SOL
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">SOL Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={solWalletAddress}
                        onChange={handleChangeSOLWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_sol || inputValue}
                        onChange={handleChangeSOL}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawSOL()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeSOLModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* TRX */}
        <Transition appear show={openTRX} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeTRXModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send TRX
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">TRX Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={trxWalletAddress}
                        onChange={handleChangeTRXWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_trx || inputValue}
                        onChange={handleChangeTRX}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawTRX()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeTRXModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* USDC */}
        <Transition appear show={openUSDC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeUSDCModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send USDC
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">USDC Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={usdcWalletAddress}
                        onChange={handleChangeUSDCWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_usdc || inputValue}
                        onChange={handleChangeUSDC}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawUSDC()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeUSDCModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* INJ */}
        <Transition appear show={openINJ} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeINJModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send INJ
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">INJ Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={injWalletAddress}
                        onChange={handleChangeINJWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_inj || inputValue}
                        onChange={handleChangeINJ}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawINJ()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeINJModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* SHIB */}
        <Transition appear show={openSHIB} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSHIBModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send SHIB
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">SHIB Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={shibWalletAddress}
                        onChange={handleChangeSHIBWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_shib || inputValue}
                        onChange={handleChangeSHIB}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawSHIB()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeSHIBModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* MATIC */}
        <Transition appear show={openMATIC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMATICModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send MATIC
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">MATIC Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={maticWalletAddress}
                        onChange={handleChangeMATICWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_matic || inputValue}
                        onChange={handleChangeMATIC}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawMATIC()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeMATICModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* BONK */}
        <Transition appear show={openBONK} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBONKModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send BONK
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">BONK Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={bonkWalletAddress}
                        onChange={handleChangeBONKWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_bonk || inputValue}
                        onChange={handleChangeBONK}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawBONK()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeBONKModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* DOGE */}
        <Transition appear show={openDOGE} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDOGEModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send DOGE
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">DOGE Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={dogeWalletAddress}
                        onChange={handleChangeDOGEWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_doge || inputValue}
                        onChange={handleChangeDOGE}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawDOGE()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeDOGEModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ARBITRUM */}
        <Transition appear show={openARBITRUM} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeARBITRUMModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send ARBITRUM
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">ARBITRUM Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={arbitrumWalletAddress}
                        onChange={handleChangeARBITRUMWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_arbitrum || inputValue}
                        onChange={handleChangeARBITRUM}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawARBITRUM()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeARBITRUMModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ENJ */}
        <Transition appear show={openENJ} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeENJModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send ENJ
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">ENJ Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={enjWalletAddress}
                        onChange={handleChangeENJWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_enj || inputValue}
                        onChange={handleChangeENJ}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawENJ()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeENJModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* BRC20 */}
        <Transition appear show={openBRC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBRCModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send BRC
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">BRC Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={brcWalletAddress}
                        onChange={handleChangeBRCWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_brc || inputValue}
                        onChange={handleChangeBRC}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawBRC()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeBRCModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* JUP */}
        <Transition appear show={openJUP} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeJUPModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send JUP
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">JUP Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={jupWalletAddress}
                        onChange={handleChangeJUPWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_jup || inputValue}
                        onChange={handleChangeJUP}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawJUP()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeJUPModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* WEN */}
        <Transition appear show={openWEN} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWENModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send WEN
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">WEN Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={wenWalletAddress}
                        onChange={handleChangeWENWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_wen || inputValue}
                        onChange={handleChangeWEN}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawWEN()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeWENModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Michi */}
        <Transition appear show={openMichi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMichiModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $michi
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$michi Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={michiWalletAddress}
                        onChange={handleChangeMichiWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_michi || inputValue}
                        onChange={handleChangeMichi}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawMichi()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeMichiModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Wif */}
        <Transition appear show={openWif} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWifModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $wif
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$wif Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={wifWalletAddress}
                        onChange={handleChangeWifWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_wif || inputValue}
                        onChange={handleChangeWif}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawWif()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeWifModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* brett */}
        <Transition appear show={openBrett} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBrettModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $brett
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$brett Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={brettWalletAddress}
                        onChange={handleChangeBrettWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_brett || inputValue}
                        onChange={handleChangeBrett}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawBrett()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeBrettModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* friend */}
        <Transition appear show={openFriend} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeFriendModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $friend
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$friend Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={friendWalletAddress}
                        onChange={handleChangeFriendWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_friend || inputValue}
                        onChange={handleChangeFriend}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawFriend()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeFriendModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* tnsr */}
        <Transition appear show={openTnsr} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeTnsrModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $tnsr
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$tnsr Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={tnsrWalletAddress}
                        onChange={handleChangeTnsrWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_tnsr || inputValue}
                        onChange={handleChangeTnsr}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawTnsr()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeTnsrModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* hobbes */}
        <Transition appear show={openHobbes} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeHobbesModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $hobbes
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$hobbes Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={hobbesWalletAddress}
                        onChange={handleChangeHobbesWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_hobbes || inputValue}
                        onChange={handleChangeHobbes}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawHobbes()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeHobbesModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* mew */}
        <Transition appear show={openMew} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMewModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $mew
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$mew Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={mewWalletAddress}
                        onChange={handleChangeMewWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_mew || inputValue}
                        onChange={handleChangeMew}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawMew()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeMewModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* popcat */}
        <Transition appear show={openPopcat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePopcatModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $popcat
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$popcat Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={popcatWalletAddress}
                        onChange={handleChangePopcatWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_popcat || inputValue}
                        onChange={handleChangePopcat}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawPopcat()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closePopcatModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* sharkcat */}
        <Transition appear show={openSharkcat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSharkcatModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $sharkcat
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$sharkcat Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={sharkcatWalletAddress}
                        onChange={handleChangeSharkcatWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_sharkcat || inputValue}
                        onChange={handleChangeSharkcat}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawSharkcat()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeSharkcatModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* crodie */}
        <Transition appear show={openCrodie} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeCrodieModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $crodie
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$crodie Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={crodieWalletAddress}
                        onChange={handleChangeCrodieWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_crodie || inputValue}
                        onChange={handleChangeCrodie}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawCrodie()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeCrodieModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* bobo */}
        <Transition appear show={openBobo} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBoboModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $bobo
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$bobo Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={boboWalletAddress}
                        onChange={handleChangeBoboWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_bobo || inputValue}
                        onChange={handleChangeBobo}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawBobo()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeBoboModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* pork */}
        <Transition appear show={openPork} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePorkModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $pork
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$pork Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={porkWalletAddress}
                        onChange={handleChangePorkWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_pork || inputValue}
                        onChange={handleChangePork}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawPork()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closePorkModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* wolf */}
        <Transition appear show={openWolf} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWolfModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $wolf
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$wolf Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={wolfWalletAddress}
                        onChange={handleChangeWolfWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_wolf || inputValue}
                        onChange={handleChangeWolf}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawWolf()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeWolfModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* andy */}
        <Transition appear show={openAndy} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeAndyModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-left font-bold leading-6 text-gray-600"
                    >
                      Send $andy
                    </Dialog.Title>
                    <form className="mt-2">
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">$andy Address <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3"
                        value={andyWalletAddress}
                        onChange={handleChangeAndyWalletAddress}
                        required
                      />
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input
                        type="number"
                        id="withdrawBtc"
                        name="withdrawBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={withdraw_andy || inputValue}
                        onChange={handleChangeAndy}
                        required
                      />

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            onClick={() => withdrawAndy()}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeAndyModal}
                        >
                            Close
                        </button>
                        </div>

                        {/* INFO */}
                        {/* <div className="mt-3">
                          <div className="text-red-600 font-semibold flex space-x-2">
                              <AiOutlineInfoCircle className="animate-bounce" />
                              <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                          </div>
                          <div className="flex space-x-2 text-gray-500">
                              <AiOutlineInfoCircle />
                              <p className='text-xs'>Account will be credited once we received your payment.</p>
                          </div>
                        </div> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </BaseLayout>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
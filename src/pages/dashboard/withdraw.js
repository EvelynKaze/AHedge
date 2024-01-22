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
///////////////////////////////////////////////////////////
    const [withdraw_btc, setWithdrawBtc] = useState(null)

    const handleChangeBTC = (event) => {
      const value = event.target.value;
      setWithdrawBtc(value);
      setInputValue(value);
    };

    let [openBTC, setOpenBTC] = useState(false)
    function closeBTCModal() {
      setOpenBTC(false)
    }
    function openBTCModal() {
      setOpenBTC(true)
    }
    const bitcoin = "bc1qkk9tf9c72kv7hlaf6cjazq2an9sstvnsawst33"
    
    const clipboardBTC = () => {
      navigator.clipboard.writeText(bitcoin)
      toast.info("Copied to Clipboard");
    };

    async function withdrawBTC({ withdraw_btc }) {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          withdraw_btc,
          updated_at: new Date().toISOString(),
        }
        let { error } = await supabase.from('profiles').upsert(updates)
        if (error) throw error
          setOpenBTC(false)
          toast.success("Transaction Order placed. Awaiting Approval.")
        } catch (error) {
          alert('Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    };
    ///////////////////////////////////////////////////////
    const [withdraw_eth, setWithdrawEth] = useState(null)
    const eth = "0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03"
    const clipboardETH = () => {
      navigator.clipboard.writeText(eth)
      toast.info("Copied to Clipboard");
    };
    const handleChangeETH = (event) => {
      const value = event.target.value;
      setWithdrawEth(value);
      setInputValue(value);
    };
    let [openETH, setOpenETH] = useState(false)
    function openETHModal(){
      setOpenETH(true)
    }
    function closeETHModal(){
      setOpenETH(false)
    }
    async function withdrawETH({ withdraw_eth }) {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          withdraw_eth,
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
///////////////////////////////////////////////////////////
    const usdt = "0x11f38b2Ca413457Ce7f964ad1633Bd6aFe11B213"
    const [withdraw_usdt, setWithdrawUsdt] = useState(null)
    const clipboardUSDT = () => {
      navigator.clipboard.writeText(usdt)
      toast.info("Copied to Clipboard");
    };
    const handleChangeUSDT = (event) => {
      const value = event.target.value;
      setWithdrawUsdt(value);
      setInputValue(value);
    };
    let [openUSDT, setOpenUSDT] = useState(false)
    function openUSDTModal(){
      setOpenUSDT(true)
    }
    function closeUSDTModal(){
      setOpenUSDT(false)
    }

    async function withdrawUSDT({ withdraw_usdt }) {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          withdraw_usdt,
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
const xrp = "rG3cdRNzZ1k83uFrzxMmpekkifKBYcv1dv"
const [withdraw_xrp, setWithdrawXRP] = useState(null)
const clipboardXRP = () => {
  navigator.clipboard.writeText(xrp)
  toast.info("Copied to Clipboard");
};
const handleChangeXRP = (event) => {
  const value = event.target.value;
  setWithdrawXrp(value);
  setInputValue(value);
};
let [openXRP, setOpenXRP] = useState(false)
function openXRPModal(){
  setOpenXRP(true)
}
function closeXRPModal(){
  setOpenXRP(false)
}

async function withdrawXRP({ withdraw_xrp }) {
  try {
    setLoading(true)

    const updates = {
      id: user.id,
      withdraw_xrp,
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
  const ada = "addr1q98ae09zhyjda27zjkv0mf7mxszkpygxqgl7m5ceyxtrqr8ky7rryg9x5dduzrc9g700hmtl8yw6p60xqgqnhdzhd8psz9tnjn"
  const [withdraw_ada, setWithdrawADA] = useState(null)
  const clipboardADA = () => {
    navigator.clipboard.writeText(ada)
    toast.info("Copied to Clipboard");
  };
  const handleChangeADA = (event) => {
    const value = event.target.value;
    setWithdrawADA(value);
    setInputValue(value);
  };
  let [openADA, setOpenADA] = useState(false)
  function openADAModal(){
    setOpenADA(true)
  }
  function closeADAModal(){
    setOpenADA(false)
  }

  async function withdrawADA({ withdraw_ada }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        withdraw_ada,
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
    const xlm = "GAAZHEFRKMW6EIU2DB6XZ5Q4GNXPPEIGBQ44HBPJJTJNCRRAZSR5BRHJ"
    const [withdraw_xlm, setWithdrawXLM] = useState(null)
    const clipboardXLM = () => {
      navigator.clipboard.writeText(xlm)
      toast.info("Copied to Clipboard");
    };
    const handleChangeXLM = (event) => {
      const value = event.target.value;
      setWithdrawXLM(value);
      setInputValue(value);
    };
    let [openXLM, setOpenXLM] = useState(false)
    function openXLMModal(){
      setOpenXLM(true)
    }
    function closeXLMModal(){
      setOpenXLM(false)
    }

    async function withdrawXLM({ withdraw_xlm }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_xlm,
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
    const hex = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const [withdraw_hex, setWithdrawHEX] = useState(null)
    const clipboardHEX = () => {
      navigator.clipboard.writeText(xlm)
      toast.info("Copied to Clipboard");
    };
    const handleChangeHEX = (event) => {
      const value = event.target.value;
      setWithdrawHEX(value);
      setInputValue(value);
    };
    let [openHEX, setOpenHEX] = useState(false)
    function openHEXModal(){
      setOpenHEX(true)
    }
    function closeHEXModal(){
      setOpenHEX(false)
    }

    async function withdrawHEX({ withdraw_hex }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_hex,
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
    const bnb = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const [withdraw_bnb, setWithdrawBNB] = useState(null)
    const clipboardBNB = () => {
      navigator.clipboard.writeText(bnb)
      toast.info("Copied to Clipboard");
    };
    const handleChangeBNB = (event) => {
      const value = event.target.value;
      setWithdrawBNB(value);
      setInputValue(value);
    };
    let [openBNB, setOpenBNB] = useState(false)
    function openBNBModal(){
      setOpenBNB(true)
    }
    function closeBNBModal(){
      setOpenBNB(false)
    }

    async function withdrawBNB({ withdraw_bnb }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_bnb,
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
    const sol = "7rk2qUYSbgHhRCdqEFw7LmAWiPyW1Ws4fYfvYJXDkw6n"
    const [withdraw_sol, setWithdrawSOL] = useState(null)
    const clipboardSOL = () => {
      navigator.clipboard.writeText(sol)
      toast.info("Copied to Clipboard");
    };
    const handleChangeSOL = (event) => {
      const value = event.target.value;
      setWithdrawSOL(value);
      setInputValue(value);
    };
    let [openSOL, setOpenSOL] = useState(false)
    function openSOLModal(){
      setOpenSOL(true)
    }
    function closeSOLModal(){
      setOpenSOL(false)
    }

    async function withdrawSOL({ withdraw_sol }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_sol,
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
    const trx = "TNW1zeNt9hMvXPfT6JEBeAhfGAsbqgCNWX"
    const [withdraw_trx, setWithdrawTRX] = useState(null)
    const clipboardTRX = () => {
      navigator.clipboard.writeText(trx)
      toast.info("Copied to Clipboard");
    };
    const handleChangeTRX = (event) => {
      const value = event.target.value;
      setWithdrawTRX(value);
      setInputValue(value);
    };
    let [openTRX, setOpenTRX] = useState(false)
    function openTRXModal(){
      setOpenTRX(true)
    }
    function closeTRXModal(){
      setOpenTRX(false)
    }

    async function withdrawTRX({ withdraw_trx }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_trx,
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
    const usdc = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const [withdraw_usdc, setWithdrawUSDC] = useState(null)
    const clipboardUSDC = () => {
      navigator.clipboard.writeText(usdc)
      toast.info("Copied to Clipboard");
    };
    const handleChangeUSDC = (event) => {
      const value = event.target.value;
      setWithdrawUSDC(value);
      setInputValue(value);
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
    const inj = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const [withdraw_inj, setWithdrawINJ] = useState(null)
    const clipboardINJ = () => {
      navigator.clipboard.writeText(inj)
      toast.info("Copied to Clipboard");
    };
    const handleChangeINJ = (event) => {
      const value = event.target.value;
      setWithdrawINJ(value);
      setInputValue(value);
    };
    let [openINJ, setOpenINJ] = useState(false)
    function openINJModal(){
      setOpenINJ(true)
    }
    function closeINJModal(){
      setOpenINJ(false)
    }

    async function withdrawINJ({ withdraw_inj }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_inj,
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
    const shib = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const [withdraw_shib, setWithdrawSHIB] = useState(null)
    const clipboardSHIB = () => {
      navigator.clipboard.writeText(shib)
      toast.info("Copied to Clipboard");
    };
    const handleChangeSHIB = (event) => {
      const value = event.target.value;
      setWithdrawSHIB(value);
      setInputValue(value);
    };
    let [openSHIB, setOpenSHIB] = useState(false)
    function openSHIBModal(){
      setOpenSHIB(true)
    }
    function closeSHIBModal(){
      setOpenSHIB(false)
    }

    async function withdrawSHIB({ withdraw_shib }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_shib,
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
    const matic = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const [withdraw_matic, setWithdrawMATIC] = useState(null)
    const clipboardMATIC = () => {
      navigator.clipboard.writeText(matic)
      toast.info("Copied to Clipboard");
    };
    const handleChangeMATIC = (event) => {
      const value = event.target.value;
      setWithdrawMATIC(value);
      setInputValue(value);
    };
    let [openMATIC, setOpenMATIC] = useState(false)
    function openMATICModal(){
      setOpenMATIC(true)
    }
    function closeMATICModal(){
      setOpenMATIC(false)
    }

    async function withdrawMATIC({ withdraw_matic }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_matic,
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
    const bonk = "7rk2qUYSbgHhRCdqEFw7LmAWiPyW1Ws4fYfvYJXDkw6n"
    const [withdraw_bonk, setWithdrawBONK] = useState(null)
    const clipboardBONK = () => {
      navigator.clipboard.writeText(bonk)
      toast.info("Copied to Clipboard");
    };
    const handleChangeBONK = (event) => {
      const value = event.target.value;
      setWithdrawBONK(value);
      setInputValue(value);
    };
    let [openBONK, setOpenBONK] = useState(false)
    function openBONKModal(){
      setOpenBONK(true)
    }
    function closeBONKModal(){
      setOpenBONK(false)
    }

    async function withdrawBONK({ withdraw_bonk }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_bonk,
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
    const doge = "DGmRUnfhrAb4bQY8LPFSNYxgqPaT5SbbaN"
    const [withdraw_doge, setWithdrawDOGE] = useState(null)
    const clipboardDOGE = () => {
      navigator.clipboard.writeText(doge)
      toast.info("Copied to Clipboard");
    };
    const handleChangeDOGE = (event) => {
      const value = event.target.value;
      setWithdrawDOGE(value);
      setInputValue(value);
    };
    let [openDOGE, setOpenDOGE] = useState(false)
    function openDOGEModal(){
      setOpenDOGE(true)
    }
    function closeDOGEModal(){
      setOpenDOGE(false)
    }

    async function withdrawDOGE({ withdraw_doge }) {
      try {
        setLoading(true)

        const updates = {
          id: user.id,
          withdraw_doge,
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
          <p className=" font-medium ">SHIB</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openBONKModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className=" font-medium ">SHIB</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openDOGEModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className=" font-medium ">SHIB</p>
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
                            onClick={() => withdrawBTC({ withdraw_btc })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawETH({ withdraw_eth })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawUSDT({ withdraw_usdt })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawXRP({ withdraw_xrp })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawADA({ withdraw_ada })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawXLM({ withdraw_xlm })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawHEX({ withdraw_hex })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawBNB({ withdraw_bnb })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawSOL({ withdraw_sol })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawTRX({ withdraw_trx })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawUSDC({ withdraw_usdc })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawINJ({ withdraw_inj })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawSHIB({ withdraw_shib })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawMATIC({ withdraw_matic })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawBONK({ withdraw_bonk })}
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
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
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
                            onClick={() => withdrawDOGE({ withdraw_doge })}
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
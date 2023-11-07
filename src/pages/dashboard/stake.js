import { Fragment, useState, useEffect, useContext } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from '../../components/Header.jsx'
import Image from "next/image"
import Layout from '../../components/BaseLayout.js';
import { Dialog, Transition } from '@headlessui/react'
import { FaBitcoin } from "react-icons/fa"
import { SiXrp } from "react-icons/si"
import { FiCopy } from "react-icons/fi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Deposit({ session }){
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [full_name, setFullName] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [inputValue, setInputValue] = useState('');
//////////////////////// BTC ///////////////////////////////////
    const [deposit_btc, setDepositBtc] = useState(null)

    const handleChangeBTC = (event) => {
      const value = event.target.value;
      setDepositBtc(value);
      setInputValue(value);
    };

    let [openBTC, setOpenBTC] = useState(false)
    function closeBTCModal() {
      setOpenBTC(false)
    }
    function openBTCModal() {
      setOpenBTC(true)
    }
    const bitcoin = "bc1qcukc3j8qtw65jh0zxt6cqprhjcux4l3049usw4"
    
    const clipboardBTC = () => {
      navigator.clipboard.writeText(bitcoin)
      toast.info("Copied to Clipboard");
    };

    async function depositBTC({ deposit_btc }) {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          deposit_btc,
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
    /////////////////////// ETH ////////////////////////////////
    const [deposit_eth, setDepositEth] = useState(null)
    const eth = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const clipboardETH = () => {
      navigator.clipboard.writeText(eth)
      toast.info("Copied to Clipboard");
    };
    const handleChangeETH = (event) => {
      const value = event.target.value;
      setDepositEth(value);
      setInputValue(value);
    };
    let [openETH, setOpenETH] = useState(false)
    function openETHModal(){
      setOpenETH(true)
    }
    function closeETHModal(){
      setOpenETH(false)
    }
    async function depositETH({ deposit_eth }) {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          deposit_eth,
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
    const usdt = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
    const [deposit_usdt, setDepositUsdt] = useState(null)
    const clipboardUSDT = () => {
      navigator.clipboard.writeText(usdt)
      toast.info("Copied to Clipboard");
    };
    const handleChangeUSDT = (event) => {
      const value = event.target.value;
      setDepositUsdt(value);
      setInputValue(value);
    };
    let [openUSDT, setOpenUSDT] = useState(false)
    function openUSDTModal(){
      setOpenUSDT(true)
    }
    function closeUSDTModal(){
      setOpenUSDT(false)
    }

    async function depositUSDT({ deposit_usdt }) {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          deposit_usdt,
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
////////////////////////// XRP /////////////////////////////////
    const xrp = "rG3cdRNzZ1k83uFrzxMmpekkifKBYcv1dv"
    const [deposit_xrp, setDepositXRP] = useState(null)
    const clipboardXRP = () => {
      navigator.clipboard.writeText(xrp)
      toast.info("Copied to Clipboard");
    };
    const handleChangeXRP = (event) => {
      const value = event.target.value;
      setDepositXrp(value);
      setInputValue(value);
    };
    let [openXRP, setOpenXRP] = useState(false)
    function openXRPModal(){
      setOpenXRP(true)
    }
    function closeXRPModal(){
      setOpenXRP(false)
    }

    async function depositXRP({ deposit_xrp }) {
      try {
        setLoading(true)
  
        const updates = {
          id: user.id,
          deposit_xrp,
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
      const [deposit_ada, setDepositADA] = useState(null)
      const clipboardADA = () => {
        navigator.clipboard.writeText(ada)
        toast.info("Copied to Clipboard");
      };
      const handleChangeADA = (event) => {
        const value = event.target.value;
        setDepositADA(value);
        setInputValue(value);
      };
      let [openADA, setOpenADA] = useState(false)
      function openADAModal(){
        setOpenADA(true)
      }
      function closeADAModal(){
        setOpenADA(false)
      }

      async function depositADA({ deposit_ada }) {
        try {
          setLoading(true)

          const updates = {
            id: user.id,
            deposit_ada,
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
        const [deposit_xlm, setDepositXLM] = useState(null)
        const clipboardXLM = () => {
          navigator.clipboard.writeText(xlm)
          toast.info("Copied to Clipboard");
        };
        const handleChangeXLM = (event) => {
          const value = event.target.value;
          setDepositXLM(value);
          setInputValue(value);
        };
        let [openXLM, setOpenXLM] = useState(false)
        function openXLMModal(){
          setOpenXLM(true)
        }
        function closeXLMModal(){
          setOpenXLM(false)
        }

        async function depositXLM({ deposit_xlm }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_xlm,
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
        const [deposit_hex, setDepositHEX] = useState(null)
        const clipboardHEX = () => {
          navigator.clipboard.writeText(xlm)
          toast.info("Copied to Clipboard");
        };
        const handleChangeHEX = (event) => {
          const value = event.target.value;
          setDepositHEX(value);
          setInputValue(value);
        };
        let [openHEX, setOpenHEX] = useState(false)
        function openHEXModal(){
          setOpenHEX(true)
        }
        function closeHEXModal(){
          setOpenHEX(false)
        }

        async function depositHEX({ deposit_hex }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_hex,
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
        const [deposit_bnb, setDepositBNB] = useState(null)
        const clipboardBNB = () => {
          navigator.clipboard.writeText(bnb)
          toast.info("Copied to Clipboard");
        };
        const handleChangeBNB = (event) => {
          const value = event.target.value;
          setDepositBNB(value);
          setInputValue(value);
        };
        let [openBNB, setOpenBNB] = useState(false)
        function openBNBModal(){
          setOpenBNB(true)
        }
        function closeBNBModal(){
          setOpenBNB(false)
        }

        async function depositBNB({ deposit_bnb }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_bnb,
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
        const [deposit_sol, setDepositSOL] = useState(null)
        const clipboardSOL = () => {
          navigator.clipboard.writeText(sol)
          toast.info("Copied to Clipboard");
        };
        const handleChangeSOL = (event) => {
          const value = event.target.value;
          setDepositSOL(value);
          setInputValue(value);
        };
        let [openSOL, setOpenSOL] = useState(false)
        function openSOLModal(){
          setOpenSOL(true)
        }
        function closeSOLModal(){
          setOpenSOL(false)
        }

        async function depositSOL({ deposit_sol }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_sol,
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
        const [deposit_trx, setDepositTRX] = useState(null)
        const clipboardTRX = () => {
          navigator.clipboard.writeText(trx)
          toast.info("Copied to Clipboard");
        };
        const handleChangeTRX = (event) => {
          const value = event.target.value;
          setDepositTRX(value);
          setInputValue(value);
        };
        let [openTRX, setOpenTRX] = useState(false)
        function openTRXModal(){
          setOpenTRX(true)
        }
        function closeTRXModal(){
          setOpenTRX(false)
        }

        async function depositTRX({ deposit_trx }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_trx,
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
        const [deposit_usdc, setDepositUSDC] = useState(null)
        const clipboardUSDC = () => {
          navigator.clipboard.writeText(usdc)
          toast.info("Copied to Clipboard");
        };
        const handleChangeUSDC = (event) => {
          const value = event.target.value;
          setDepositUSDC(value);
          setInputValue(value);
        };
        let [openUSDC, setOpenUSDC] = useState(false)
        function openUSDCModal(){
          setOpenUSDC(true)
        }
        function closeUSDCModal(){
          setOpenUSDC(false)
        }

        async function depositUSDC({ deposit_usdc }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_usdc,
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
        const [deposit_inj, setDepositINJ] = useState(null)
        const clipboardINJ = () => {
          navigator.clipboard.writeText(inj)
          toast.info("Copied to Clipboard");
        };
        const handleChangeINJ = (event) => {
          const value = event.target.value;
          setDepositINJ(value);
          setInputValue(value);
        };
        let [openINJ, setOpenINJ] = useState(false)
        function openINJModal(){
          setOpenINJ(true)
        }
        function closeINJModal(){
          setOpenINJ(false)
        }

        async function depositINJ({ deposit_inj }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_inj,
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
        const [deposit_shib, setDepositSHIB] = useState(null)
        const clipboardSHIB = () => {
          navigator.clipboard.writeText(shib)
          toast.info("Copied to Clipboard");
        };
        const handleChangeSHIB = (event) => {
          const value = event.target.value;
          setDepositSHIB(value);
          setInputValue(value);
        };
        let [openSHIB, setOpenSHIB] = useState(false)
        function openSHIBModal(){
          setOpenSHIB(true)
        }
        function closeSHIBModal(){
          setOpenSHIB(false)
        }

        async function depositSHIB({ deposit_shib }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_shib,
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

  return (
    <div className="bg-gray-100 overflow-hidden">
      <Layout>
        <Header />
        <div className="w-full px-4 py-16">
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
            <h2 className="font-bold text-2xl">Deposit Funds</h2>
            <h4>via <span className="font-semibold">Crypto Wallet</span></h4>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BTC</span> to the address below</p>
                      <img
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/btc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2J0Yy5wbmciLCJpYXQiOjE2ODY1MDUwMTUsImV4cCI6MTcxODA0MTAxNX0.94s3OmMWL2nc_AvjaRjto7UmVV3wUm2VJQdzigfa-X4&t=2023-06-11T17%3A36%3A54.349Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">Bitcoin Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bitcoin}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBTC}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_btc || inputValue}
                          onChange={handleChangeBTC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBTC({ deposit_btc })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay Bitcoin'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBTCModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BTC amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}XRP</span> to the address below</p>
                      <img
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/btc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2J0Yy5wbmciLCJpYXQiOjE2ODY1MDUwMTUsImV4cCI6MTcxODA0MTAxNX0.94s3OmMWL2nc_AvjaRjto7UmVV3wUm2VJQdzigfa-X4&t=2023-06-11T17%3A36%3A54.349Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">Xrp Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <SiXrp className='mt-1' />
                          <p>{xrp}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardXRP}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_xrp || inputValue}
                          onChange={handleChangeXRP}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositXRP({ deposit_xrp })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay XRP'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeXRPModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other XRP amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}ETH</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/eth.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2V0aC5wbmciLCJpYXQiOjE2ODY1NzQ5OTYsImV4cCI6MTcxODExMDk5Nn0.0WDT7NmyBmGCzz3DWwdsGbeClV9kAxiJYmnZu2dZU1c&t=2023-06-12T13%3A03%3A15.330Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ETH Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{eth}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardETH}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_eth || inputValue}
                          onChange={handleChangeETH}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositETH({ deposit_eth })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ETH'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeETHModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ETH amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}ADA</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/eth.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2V0aC5wbmciLCJpYXQiOjE2ODY1NzQ5OTYsImV4cCI6MTcxODExMDk5Nn0.0WDT7NmyBmGCzz3DWwdsGbeClV9kAxiJYmnZu2dZU1c&t=2023-06-12T13%3A03%3A15.330Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ADA Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{ada}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardADA}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_ada || inputValue}
                          onChange={handleChangeADA}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositADA({ deposit_ada })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ADA'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeADAModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ADA amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}USDT</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">USDT Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{usdt}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardUSDT}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_usdt || inputValue}
                          onChange={handleChangeUSDT}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositUSDT({ deposit_usdt })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay USDT'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeUSDTModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other USDT amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}XLM</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">XLM Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{xlm}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardXLM}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_xlm || inputValue}
                          onChange={handleChangeXLM}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositXLM({ deposit_xlm })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay XLM'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeXLMModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other XLM amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}HEX</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">HEX Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{hex}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardHEX}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_hex || inputValue}
                          onChange={handleChangeHEX}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositHEX({ deposit_hex })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay HEX'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeHEXModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other HEX amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BNB</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">BNB Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bnb}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBNB}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_bnb || inputValue}
                          onChange={handleChangeBNB}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBNB({ deposit_bnb })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay BNB'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBNBModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BNB amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}SOL</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">SOL Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{sol}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSOL}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_sol || inputValue}
                          onChange={handleChangeSOL}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSOL({ deposit_sol })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay SOL'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSOLModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other SOL amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}TRX</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">TRX Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{trx}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardTRX}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_trx || inputValue}
                          onChange={handleChangeTRX}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositTRX({ deposit_trx })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay TRX'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeTRXModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other TRX amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}USDC</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">USDC Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{usdc}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardUSDC}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_usdc || inputValue}
                          onChange={handleChangeUSDC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositUSDC({ deposit_usdc })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay USDC'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeUSDCModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other USDC amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}INJ</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">INJ Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{inj}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardINJ}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_inj || inputValue}
                          onChange={handleChangeINJ}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositINJ({ deposit_inj })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay INJ'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeINJModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other INJ amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}SHIB</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">SHIB Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{shib}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSHIB}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_shib || inputValue}
                          onChange={handleChangeSHIB}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSHIB({ deposit_shib })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay SHIB'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSHIBModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other SHIB amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </Layout>
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
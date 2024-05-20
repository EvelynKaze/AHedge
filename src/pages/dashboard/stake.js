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

//////////////////////////// MATIC ///////////////////////////////
        const matic = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
        const [deposit_matic, setDepositMATIC] = useState(null)
        const clipboardMATIC = () => {
          navigator.clipboard.writeText(matic)
          toast.info("Copied to Clipboard");
        };
        const handleChangeMATIC = (event) => {
          const value = event.target.value;
          setDepositMATIC(value);
          setInputValue(value);
        };
        let [openMATIC, setOpenMATIC] = useState(false)
        function openMATICModal(){
          setOpenMATIC(true)
        }
        function closeMATICModal(){
          setOpenMATIC(false)
        }

        async function depositMATIC({ deposit_matic }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_matic,
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
        const [deposit_bonk, setDepositBONK] = useState(null)
        const clipboardBONK = () => {
          navigator.clipboard.writeText(bonk)
          toast.info("Copied to Clipboard");
        };
        const handleChangeBONK = (event) => {
          const value = event.target.value;
          setDepositBONK(value);
          setInputValue(value);
        };
        let [openBONK, setOpenBONK] = useState(false)
        function openBONKModal(){
          setOpenBONK(true)
        }
        function closeBONKModal(){
          setOpenBONK(false)
        }

        async function depositBONK({ deposit_bonk }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_bonk,
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
        const [deposit_doge, setDepositDOGE] = useState(null)
        const clipboardDOGE = () => {
          navigator.clipboard.writeText(doge)
          toast.info("Copied to Clipboard");
        };
        const handleChangeDOGE = (event) => {
          const value = event.target.value;
          setDepositDOGE(value);
          setInputValue(value);
        };
        let [openDOGE, setOpenDOGE] = useState(false)
        function openDOGEModal(){
          setOpenDOGE(true)
        }
        function closeDOGEModal(){
          setOpenDOGE(false)
        }

        async function depositDOGE({ deposit_doge }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_doge,
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
        const arbitrum = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
        const [deposit_arbitrum, setDepositARBITRUM] = useState(null)
        const clipboardARBITRUM = () => {
          navigator.clipboard.writeText(arbitrum)
          toast.info("Copied to Clipboard");
        };
        const handleChangeARBITRUM = (event) => {
          const value = event.target.value;
          setDepositARBITRUM(value);
          setInputValue(value);
        };
        let [openARBITRUM, setOpenARBITRUM] = useState(false)
        function openARBITRUMModal(){
          setOpenARBITRUM(true)
        }
        function closeARBITRUMModal(){
          setOpenARBITRUM(false)
        }

        async function depositARBITRUM({ deposit_arbitrum }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_arbitrum,
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
        const enj = "0xD72eF06415D0E523D57a86f787cE93b74A978b62"
        const [deposit_enj, setDepositENJ] = useState(null)
        const clipboardENJ = () => {
          navigator.clipboard.writeText(enj)
          toast.info("Copied to Clipboard");
        };
        const handleChangeENJ = (event) => {
          const value = event.target.value;
          setDepositENJ(value);
          setInputValue(value);
        };
        let [openENJ, setOpenENJ] = useState(false)
        function openENJModal(){
          setOpenENJ(true)
        }
        function closeENJModal(){
          setOpenENJ(false)
        }

        async function depositENJ({ deposit_enj }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_enj,
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
        const brc20 = "bc1p2sqyg89zhk8z69854xs56ezkdnlan37tmngs8z89thswj7tpzjksnpsk4x"
        const [deposit_brc, setDepositBRC] = useState(null)
        const clipboardBRC = () => {
          navigator.clipboard.writeText(brc20)
          toast.info("Copied to Clipboard");
        };
        const handleChangeBRC = (event) => {
          const value = event.target.value;
          setDepositBRC(value);
          setInputValue(value);
        };
        let [openBRC, setOpenBRC] = useState(false)
        function openBRCModal(){
          setOpenBRC(true)
        }
        function closeBRCModal(){
          setOpenBRC(false)
        }

        async function depositBRC({ deposit_brc }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_brc,
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
        const jup = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        const [deposit_jup, setDepositJUP] = useState(null)
        const clipboardJUP = () => {
          navigator.clipboard.writeText(jup)
          toast.info("Copied to Clipboard");
        };
        const handleChangeJUP = (event) => {
          const value = event.target.value;
          setDepositJUP(value);
          setInputValue(value);
        };
        let [openJUP, setOpenJUP] = useState(false)
        function openJUPModal(){
          setOpenJUP(true)
        }
        function closeJUPModal(){
          setOpenJUP(false)
        }

        async function depositJUP({ deposit_jup }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_jup,
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
        const wen = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        const [deposit_wen, setDepositWEN] = useState(null)
        const clipboardWEN = () => {
          navigator.clipboard.writeText(wen)
          toast.info("Copied to Clipboard");
        };
        const handleChangeWEN = (event) => {
          const value = event.target.value;
          setDepositWEN(value);
          setInputValue(value);
        };
        let [openWEN, setOpenWEN] = useState(false)
        function openWENModal(){
          setOpenWEN(true)
        }
        function closeWENModal(){
          setOpenWEN(false)
        }

        async function depositWEN({ deposit_wen }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_wen,
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

        
        //////////////////////////// michi ///////////////////////////////
        const michi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        const [deposit_michi, setDepositMichi] = useState(null)
        const clipboardMichi = () => {
          navigator.clipboard.writeText(michi)
          toast.info("Copied to Clipboard");
        };
        const handleChangeMichi = (event) => {
          const value = event.target.value;
          setDepositMichi(value);
          setInputValue(value);
        };
        let [openMichi, setOpenMichi] = useState(false)
        function openMichiModal(){
          setOpenMichi(true)
        }
        function closeMichiModal(){
          setOpenMichi(false)
        }

        async function depositMichi({ deposit_michi }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_michi,
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

        
        //////////////////////////// wif ///////////////////////////////
        const wif = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        const [deposit_wif, setDepositWif] = useState(null)
        const clipboardWif = () => {
          navigator.clipboard.writeText(wif)
          toast.info("Copied to Clipboard");
        };
        const handleChangeWif = (event) => {
          const value = event.target.value;
          setDepositWif(value);
          setInputValue(value);
        };
        let [openWif, setOpenWif] = useState(false)
        function openWifModal(){
          setOpenWif(true)
        }
        function closeWifModal(){
          setOpenWif(false)
        }

        async function depositWif({ deposit_wif }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_wif,
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

        
        //////////////////////////// brett ///////////////////////////////
        const brett = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        const [deposit_brett, setDepositBrett] = useState(null)
        const clipboardBrett = () => {
          navigator.clipboard.writeText(brett)
          toast.info("Copied to Clipboard");
        };
        const handleChangeBrett = (event) => {
          const value = event.target.value;
          setDepositBrett(value);
          setInputValue(value);
        };
        let [openBrett, setOpenBrett] = useState(false)
        function openBrettModal(){
          setOpenBrett(true)
        }
        function closeBrettModal(){
          setOpenBrett(false)
        }

        async function depositBrett({ deposit_brett }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_brett,
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

        
        //////////////////////////// friend ///////////////////////////////
        const friend = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        const [deposit_friend, setDepositFriend] = useState(null)
        const clipboardFriend = () => {
          navigator.clipboard.writeText(friend)
          toast.info("Copied to Clipboard");
        };
        const handleChangeFriend = (event) => {
          const value = event.target.value;
          setDepositFriend(value);
          setInputValue(value);
        };
        let [openFriend, setOpenFriend] = useState(false)
        function openFriendModal(){
          setOpenFriend(true)
        }
        function closeFriendModal(){
          setOpenFriend(false)
        }

        async function depositFriend({ deposit_friend }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_friend,
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

         //////////////////////////// tnsr ///////////////////////////////
         const tnsr = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
         const [deposit_tnsr, setDepositTnsr] = useState(null)
         const clipboardTnsr = () => {
           navigator.clipboard.writeText(tnsr)
           toast.info("Copied to Clipboard");
         };
         const handleChangeTnsr = (event) => {
           const value = event.target.value;
           setDepositTnsr(value);
           setInputValue(value);
         };
         let [openTnsr, setOpenTnsr] = useState(false)
         function openTnsrModal(){
           setOpenTnsr(true)
         }
         function closeTnsrModal(){
           setOpenTnsr(false)
         }
 
         async function depositTnsr({ deposit_tnsr }) {
           try {
             setLoading(true)
 
             const updates = {
               id: user.id,
               deposit_tnsr,
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
 
  //////////////////////////// hobbes ///////////////////////////////
  const hobbes = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
  const [deposit_hobbes, setDepositHobbes] = useState(null)
  const clipboardHobbes = () => {
    navigator.clipboard.writeText(hobbes)
    toast.info("Copied to Clipboard");
  };
  const handleChangeHobbes = (event) => {
    const value = event.target.value;
    setDepositHobbes(value);
    setInputValue(value);
  };
  let [openHobbes, setOpenHobbes] = useState(false)
  function openHobbesModal(){
    setOpenHobbes(true)
  }
  function closeHobbesModal(){
    setOpenHobbes(false)
  }

  async function depositHobbes({ deposit_hobbes }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        deposit_hobbes,
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

           //////////////////////////// mew ///////////////////////////////
        const mew = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
        const [deposit_mew, setDepositMew] = useState(null)
        const clipboardMew = () => {
          navigator.clipboard.writeText(mew)
          toast.info("Copied to Clipboard");
        };
        const handleChangeMew = (event) => {
          const value = event.target.value;
          setDepositMew(value);
          setInputValue(value);
        };
        let [openMew, setOpenMew] = useState(false)
        function openMewModal(){
          setOpenMew(true)
        }
        function closeMewModal(){
          setOpenMew(false)
        }

        async function depositMew({ deposit_mew }) {
          try {
            setLoading(true)

            const updates = {
              id: user.id,
              deposit_mew,
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

        
 //////////////////////////// popcat ///////////////////////////////
 const popcat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_popcat, setDepositPopcat] = useState(null)
 const clipboardPopcat = () => {
   navigator.clipboard.writeText(popcat)
   toast.info("Copied to Clipboard");
 };
 const handleChangePopcat = (event) => {
   const value = event.target.value;
   setDepositPopcat(value);
   setInputValue(value);
 };
 let [openPopcat, setOpenPopcat] = useState(false)
 function openPopcatModal(){
   setOpenPopcat(true)
 }
 function closePopcatModal(){
   setOpenPopcat(false)
 }

 async function depositPopcat({ deposit_popcat }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_popcat,
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

 //////////////////////////// sharkcat ///////////////////////////////
 const sharkcat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_sharkcat, setDepositSharkcat] = useState(null)
 const clipboardSharkcat = () => {
   navigator.clipboard.writeText(sharkcat)
   toast.info("Copied to Clipboard");
 };
 const handleChangeSharkcat = (event) => {
   const value = event.target.value;
   setDepositSharkcat(value);
   setInputValue(value);
 };
 let [openSharkcat, setOpenSharkcat] = useState(false)
 function openSharkcatModal(){
   setOpenSharkcat(true)
 }
 function closeSharkcatModal(){
   setOpenSharkcat(false)
 }

 async function depositSharkcat({ deposit_sharkcat }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_sharkcat,
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
 //////////////////////////// crodie ///////////////////////////////
 const crodie = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_crodie, setDepositCrodie] = useState(null)
 const clipboardCrodie = () => {
   navigator.clipboard.writeText(crodie)
   toast.info("Copied to Clipboard");
 };
 const handleChangeCrodie = (event) => {
   const value = event.target.value;
   setDepositCrodie(value);
   setInputValue(value);
 };
 let [openCrodie, setOpenCrodie] = useState(false)
 function openCrodieModal(){
   setOpenCrodie(true)
 }
 function closeCrodieModal(){
   setOpenCrodie(false)
 }

 async function depositCrodie({ deposit_crodie }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_crodie,
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

  
 //////////////////////////// bobo ///////////////////////////////
 const bobo = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_bobo, setDepositBobo] = useState(null)
 const clipboardBobo = () => {
   navigator.clipboard.writeText(bobo)
   toast.info("Copied to Clipboard");
 };
 const handleChangeBobo = (event) => {
   const value = event.target.value;
   setDepositBobo(value);
   setInputValue(value);
 };
 let [openBobo, setOpenBobo] = useState(false)
 function openBoboModal(){
   setOpenBobo(true)
 }
 function closeBoboModal(){
   setOpenBobo(false)
 }

 async function depositBobo({ deposit_bobo }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_bobo,
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

 //////////////////////////// pork ///////////////////////////////
 const pork = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_pork, setDepositPork] = useState(null)
 const clipboardPork = () => {
   navigator.clipboard.writeText(pork)
   toast.info("Copied to Clipboard");
 };
 const handleChangePork = (event) => {
   const value = event.target.value;
   setDepositPork(value);
   setInputValue(value);
 };
 let [openPork, setOpenPork] = useState(false)
 function openPorkModal(){
   setOpenPork(true)
 }
 function closePorkModal(){
   setOpenPork(false)
 }

 async function depositPork({ deposit_pork }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_pork,
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

  
 //////////////////////////// wolf ///////////////////////////////
 const wolf = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_wolf, setDepositWolf] = useState(null)
 const clipboardWolf = () => {
   navigator.clipboard.writeText(wolf)
   toast.info("Copied to Clipboard");
 };
 const handleChangeWolf = (event) => {
   const value = event.target.value;
   setDepositWolf(value);
   setInputValue(value);
 };
 let [openWolf, setOpenWolf] = useState(false)
 function openWolfModal(){
   setOpenWolf(true)
 }
 function closeWolfModal(){
   setOpenWolf(false)
 }

 async function depositWolf({ deposit_wolf }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_wolf,
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

 //////////////////////////// andy ///////////////////////////////
 const andy = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_andy, setDepositAndy] = useState(null)
 const clipboardAndy = () => {
   navigator.clipboard.writeText(andy)
   toast.info("Copied to Clipboard");
 };
 const handleChangeAndy = (event) => {
   const value = event.target.value;
   setDepositAndy(value);
   setInputValue(value);
 };
 let [openAndy, setOpenAndy] = useState(false)
 function openAndyModal(){
   setOpenAndy(true)
 }
 function closeAndyModal(){
   setOpenAndy(false)
 }

 async function depositAndy({ deposit_andy }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_andy,
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

  
 //////////////////////////// gme ///////////////////////////////
 const gme = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_gme, setDepositGme] = useState(null)
 const clipboardGme = () => {
   navigator.clipboard.writeText(gme)
   toast.info("Copied to Clipboard");
 };
 const handleChangeGme = (event) => {
   const value = event.target.value;
   setDepositGme(value);
   setInputValue(value);
 };
 let [openGme, setOpenGme] = useState(false)
 function openGmeModal(){
   setOpenGme(true)
 }
 function closeGmeModal(){
   setOpenGme(false)
 }

 async function depositGme({ deposit_gme }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_gme,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenGme(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// speed ///////////////////////////////
 const speed = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_speed, setDepositSpeed] = useState(null)
 const clipboardSpeed = () => {
   navigator.clipboard.writeText(speed)
   toast.info("Copied to Clipboard");
 };
 const handleChangeSpeed = (event) => {
   const value = event.target.value;
   setDepositSpeed(value);
   setInputValue(value);
 };
 let [openSpeed, setOpenSpeed] = useState(false)
 function openSpeedModal(){
   setOpenSpeed(true)
 }
 function closeSpeedModal(){
   setOpenSpeed(false)
 }

 async function depositSpeed({ deposit_speed }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_speed,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenSpeed(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// lichi ///////////////////////////////
 const lichi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_lichi, setDepositLichi] = useState(null)
 const clipboardLichi = () => {
   navigator.clipboard.writeText(lichi)
   toast.info("Copied to Clipboard");
 };
 const handleChangeLichi = (event) => {
   const value = event.target.value;
   setDepositLichi(value);
   setInputValue(value);
 };
 let [openLichi, setOpenLichi] = useState(false)
 function openLichiModal(){
   setOpenLichi(true)
 }
 function closeLichiModal(){
   setOpenLichi(false)
 }

 async function depositLichi({ deposit_lichi }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_lichi,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenLichi(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// stache ///////////////////////////////
 const stache = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_stache, setDepositStache] = useState(null)
 const clipboardStache = () => {
   navigator.clipboard.writeText(stache)
   toast.info("Copied to Clipboard");
 };
 const handleChangeStache = (event) => {
   const value = event.target.value;
   setDepositStache(value);
   setInputValue(value);
 };
 let [openStache, setOpenStache] = useState(false)
 function openStacheModal(){
   setOpenStache(true)
 }
 function closeStacheModal(){
   setOpenStache(false)
 }

 async function depositStache({ deposit_stache }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_stache,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenStache(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// halt ///////////////////////////////
 const halt = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_halt, setDepositHalt] = useState(null)
 const clipboardHalt = () => {
   navigator.clipboard.writeText(halt)
   toast.info("Copied to Clipboard");
 };
 const handleChangeHalt = (event) => {
   const value = event.target.value;
   setDepositHalt(value);
   setInputValue(value);
 };
 let [openHalt, setOpenHalt] = useState(false)
 function openHaltModal(){
   setOpenHalt(true)
 }
 function closeHaltModal(){
   setOpenHalt(false)
 }

 async function depositHalt({ deposit_halt }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_halt,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenHalt(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// sec ///////////////////////////////
 const sec = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_sec, setDepositSec] = useState(null)
 const clipboardSec = () => {
   navigator.clipboard.writeText(sec)
   toast.info("Copied to Clipboard");
 };
 const handleChangeSec = (event) => {
   const value = event.target.value;
   setDepositSec(value);
   setInputValue(value);
 };
 let [openSec, setOpenSec] = useState(false)
 function openSecModal(){
   setOpenSec(true)
 }
 function closeSecModal(){
   setOpenSec(false)
 }

 async function depositSec({ deposit_sec }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_sec,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenSec(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// dumb ///////////////////////////////
 const dumb = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_dumb, setDepositDumb] = useState(null)
 const clipboardDumb = () => {
   navigator.clipboard.writeText(dumb)
   toast.info("Copied to Clipboard");
 };
 const handleChangeDumb = (event) => {
   const value = event.target.value;
   setDepositDumb(value);
   setInputValue(value);
 };
 let [openDumb, setOpenDumb] = useState(false)
 function openDumbModal(){
   setOpenDumb(true)
 }
 function closeDumbModal(){
   setOpenDumb(false)
 }

 async function depositDumb({ deposit_dumb }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_dumb,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenDumb(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// amc ///////////////////////////////
 const amc = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_amc, setDepositAmc] = useState(null)
 const clipboardAmc = () => {
   navigator.clipboard.writeText(amc)
   toast.info("Copied to Clipboard");
 };
 const handleChangeAmc = (event) => {
   const value = event.target.value;
   setDepositAmc(value);
   setInputValue(value);
 };
 let [openAmc, setOpenAmc] = useState(false)
 function openAmcModal(){
   setOpenAmc(true)
 }
 function closeAmcModal(){
   setOpenAmc(false)
 }

 async function depositAmc({ deposit_amc }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_amc,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenAmc(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// mini ///////////////////////////////
 const mini = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_mini, setDepositMini] = useState(null)
 const clipboardMini = () => {
   navigator.clipboard.writeText(mini)
   toast.info("Copied to Clipboard");
 };
 const handleChangeMini = (event) => {
   const value = event.target.value;
   setDepositMini(value);
   setInputValue(value);
 };
 let [openMini, setOpenMini] = useState(false)
 function openMiniModal(){
   setOpenMini(true)
 }
 function closeMiniModal(){
   setOpenMini(false)
 }

 async function depositMini({ deposit_mini }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_mini,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenMini(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// $selfie ///////////////////////////////
 const selfie = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_selfie, setDepositSelfie] = useState(null)
 const clipboardSelfie = () => {
   navigator.clipboard.writeText(selfie)
   toast.info("Copied to Clipboard");
 };
 const handleChangeSelfie = (event) => {
   const value = event.target.value;
   setDepositSelfie(value);
   setInputValue(value);
 };
 let [openSelfie, setOpenSelfie] = useState(false)
 function openSelfieModal(){
   setOpenSelfie(true)
 }
 function closeSelfieModal(){
   setOpenSelfie(false)
 }

 async function depositSelfie({ deposit_selfie }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_selfie,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenSelfie(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// $pepe ///////////////////////////////
 const pepe = "0x1F572F9551EdcF475cc5E6F9cd2a3641b625500A"
 const [deposit_pepe, setDepositPepe] = useState(null)
 const clipboardPepe = () => {
   navigator.clipboard.writeText(pepe)
   toast.info("Copied to Clipboard");
 };
 const handleChangePepe = (event) => {
   const value = event.target.value;
   setDepositPepe(value);
   setInputValue(value);
 };
 let [openPepe, setOpenPepe] = useState(false)
 function openPepeModal(){
   setOpenPepe(true)
 }
 function closePepeModal(){
   setOpenPepe(false)
 }

 async function depositPepe({ deposit_pepe }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_pepe,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenPepe(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// $redo  ///////////////////////////////
 const redo = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_redo, setDepositRedo] = useState(null)
 const clipboardRedo = () => {
   navigator.clipboard.writeText(redo)
   toast.info("Copied to Clipboard");
 };
 const handleChangeRedo = (event) => {
   const value = event.target.value;
   setDepositRedo(value);
   setInputValue(value);
 };
 let [openRedo, setOpenRedo] = useState(false)
 function openRedoModal(){
   setOpenRedo(true)
 }
 function closeRedoModal(){
   setOpenRedo(false)
 }

 async function depositRedo({ deposit_redo }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_redo,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenRedo(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// $reca  ///////////////////////////////
 const reca = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_reca, setDepositReca] = useState(null)
 const clipboardReca = () => {
   navigator.clipboard.writeText(reca)
   toast.info("Copied to Clipboard");
 };
 const handleChangeReca = (event) => {
   const value = event.target.value;
   setDepositReca(value);
   setInputValue(value);
 };
 let [openReca, setOpenReca] = useState(false)
 function openRecaModal(){
   setOpenReca(true)
 }
 function closeRecaModal(){
   setOpenReca(false)
 }

 async function depositReca({ deposit_reca }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_reca,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenReca(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// $slerf  ///////////////////////////////
 const slerf = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_slerf, setDepositSlerf] = useState(null)
 const clipboardSlerf = () => {
   navigator.clipboard.writeText(slerf)
   toast.info("Copied to Clipboard");
 };
 const handleChangeSlerf = (event) => {
   const value = event.target.value;
   setDepositSlerf(value);
   setInputValue(value);
 };
 let [openSlerf, setOpenSlerf] = useState(false)
 function openSlerfModal(){
   setOpenSlerf(true)
 }
 function closeSlerfModal(){
   setOpenSlerf(false)
 }

 async function depositSlerf({ deposit_slerf }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_slerf,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenSlerf(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };
 //////////////////////////// $giga  ///////////////////////////////
 const giga = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_giga, setDepositGiga] = useState(null)
 const clipboardGiga = () => {
   navigator.clipboard.writeText(giga)
   toast.info("Copied to Clipboard");
 };
 const handleChangeGiga = (event) => {
   const value = event.target.value;
   setDepositGiga(value);
   setInputValue(value);
 };
 let [openGiga, setOpenGiga] = useState(false)
 function openGigaModal(){
   setOpenGiga(true)
 }
 function closeGigaModal(){
   setOpenGiga(false)
 }

 async function depositGiga({ deposit_giga }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_giga,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenGiga(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
 //////////////////////////// $pepeCoin(erc20)  ///////////////////////////////
 const pepecoin = "0x1F572F9551EdcF475cc5E6F9cd2a3641b625500A"
 const [deposit_pepeCoin, setDepositPepeCoin] = useState(null)
 const clipboardPepeCoin = () => {
   navigator.clipboard.writeText(pepecoin)
   toast.info("Copied to Clipboard");
 };
 const handleChangePepeCoin = (event) => {
   const value = event.target.value;
   setDepositPepeCoin(value);
   setInputValue(value);
 };
 let [openPepeCoin, setOpenPepeCoin] = useState(false)
 function openPepeCoinModal(){
   setOpenPepeCoin(true)
 }
 function closePepeCoinModal(){
   setOpenPepeCoin(false)
 }

 async function depositPepeCoin({ deposit_pepecoin }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_pepecoin,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenPepeCoin(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };


   //////////////////////////// $duko  ///////////////////////////////
 const duko = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_duko, setDepositDuko] = useState(null)
 const clipboardDuko = () => {
   navigator.clipboard.writeText(duko)
   toast.info("Copied to Clipboard");
 };
 const handleChangeDuko = (event) => {
   const value = event.target.value;
   setDepositDuko(value);
   setInputValue(value);
 };
 let [openDuko, setOpenDuko] = useState(false)
 function openDukoModal(){
   setOpenDuko(true)
 }
 function closeDukoModal(){
   setOpenDuko(false)
 }

 async function depositDuko({ deposit_duko }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_duko,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenDuko(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

    //////////////////////////// $tobi  ///////////////////////////////
 const tobi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_tobi, setDepositTobi] = useState(null)
 const clipboardTobi = () => {
   navigator.clipboard.writeText(tobi)
   toast.info("Copied to Clipboard");
 };
 const handleChangeTobi = (event) => {
   const value = event.target.value;
   setDepositTobi(value);
   setInputValue(value);
 };
 let [openTobi, setOpenTobi] = useState(false)
 function openTobiModal(){
   setOpenTobi(true)
 }
 function closeTobiModal(){
   setOpenTobi(false)
 }

 async function depositTobi({ deposit_tobi }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_tobi,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenTobi(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  
  //////////////////////////// $nigi  ///////////////////////////////
  const nigi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
  const [deposit_nigi, setDepositNigi] = useState(null)
  const clipboardNigi = () => {
    navigator.clipboard.writeText(nigi)
    toast.info("Copied to Clipboard");
  };
  const handleChangeNigi = (event) => {
    const value = event.target.value;
    setDepositNigi(value);
    setInputValue(value);
  };
  let [openNigi, setOpenNigi] = useState(false)
  function openNigiModal(){
    setOpenNigi(true)
  }
  function closeNigiModal(){
    setOpenNigi(false)
  }
 
  async function depositNigi({ deposit_nigi }) {
    try {
      setLoading(true)
 
      const updates = {
        id: user.id,
        deposit_nigi,
        updated_at: new Date().toISOString(),
      }
      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
        setOpenNigi(false)
        toast.success("Staking Order placed. Awaiting Approval.")
      } catch (error) {
        alert('internal Server Error: Error updating the data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
  };
 
     //////////////////////////// $djcat  ///////////////////////////////
 const djcat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
 const [deposit_djcat, setDepositDjcat] = useState(null)
 const clipboardDjcat = () => {
   navigator.clipboard.writeText(djcat)
   toast.info("Copied to Clipboard");
 };
 const handleChangeDjcat = (event) => {
   const value = event.target.value;
   setDepositDjcat(value);
   setInputValue(value);
 };
 let [openDjcat, setOpenDjcat] = useState(false)
 function openDjcatModal(){
   setOpenDjcat(true)
 }
 function closeDjcatModal(){
   setOpenDjcat(false)
 }

 async function depositDjcat({ deposit_djcat }) {
   try {
     setLoading(true)

     const updates = {
       id: user.id,
       deposit_djcat,
       updated_at: new Date().toISOString(),
     }
     let { error } = await supabase.from('profiles').upsert(updates)
     if (error) throw error
       setOpenDjcat(false)
       toast.success("Staking Order placed. Awaiting Approval.")
     } catch (error) {
       alert('internal Server Error: Error updating the data!')
       console.log(error)
     } finally {
       setLoading(false)
     }
 };

  //////////////////////////// $ape  ///////////////////////////////
  const ape = "0x1F572F9551EdcF475cc5E6F9cd2a3641b625500A"
  const [deposit_ape, setDepositApe] = useState(null)
  const clipboardApe = () => {
    navigator.clipboard.writeText(ape)
    toast.info("Copied to Clipboard");
  };
  const handleChangeApe = (event) => {
    const value = event.target.value;
    setDepositApe(value);
    setInputValue(value);
  };
  let [openApe, setOpenApe] = useState(false)
  function openApeModal(){
    setOpenApe(true)
  }
  function closeApeModal(){
    setOpenApe(false)
  }
 
  async function depositApe({ deposit_ape }) {
    try {
      setLoading(true)
 
      const updates = {
        id: user.id,
        deposit_ape,
        updated_at: new Date().toISOString(),
      }
      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
        setOpenApe(false)
        toast.success("Staking Order placed. Awaiting Approval.")
      } catch (error) {
        alert('internal Server Error: Error updating the data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
  };
 
     
   //////////////////////////// $dixi  ///////////////////////////////
   const dixi = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
   const [deposit_dixi, setDepositDixi] = useState(null)
   const clipboardDixi = () => {
     navigator.clipboard.writeText(dixi)
     toast.info("Copied to Clipboard");
   };
   const handleChangeDixi = (event) => {
     const value = event.target.value;
     setDepositDixi(value);
     setInputValue(value);
   };
   let [openDixi, setOpenDixi] = useState(false)
   function openDixiModal(){
     setOpenDixi(true)
   }
   function closeDixiModal(){
     setOpenDixi(false)
   }
  
   async function depositDixi({ deposit_dixi }) {
     try {
       setLoading(true)
  
       const updates = {
         id: user.id,
         deposit_dixi,
         updated_at: new Date().toISOString(),
       }
       let { error } = await supabase.from('profiles').upsert(updates)
       if (error) throw error
         setOpenDixi(false)
         toast.success("Staking Order placed. Awaiting Approval.")
       } catch (error) {
         alert('internal Server Error: Error updating the data!')
         console.log(error)
       } finally {
         setLoading(false)
       }
   }; 
        
   //////////////////////////// $1cat  ///////////////////////////////
   const $1cat = "CSDLe7G2E6z49oyTvXSBw8V1f71SYtji25ouGR2kbfTZ"
   const [deposit_$1cat, setDeposit$1cat] = useState(null)
   const clipboard$1cat = () => {
     navigator.clipboard.writeText($1cat)
     toast.info("Copied to Clipboard");
   };
   const handleChange$1cat = (event) => {
     const value = event.target.value;
     setDeposit$1cat(value);
     setInputValue(value);
   };
   let [open$1cat, setOpen$1cat] = useState(false)
   function open$1catModal(){
     setOpen$1cat(true)
   }
   function close$1catModal(){
     setOpen$1cat(false)
   }
  
   async function deposit$1cat({ deposit_$1cat }) {
     try {
       setLoading(true)
  
       const updates = {
         id: user.id,
         deposit_$1cat,
         updated_at: new Date().toISOString(),
       }
       let { error } = await supabase.from('profiles').upsert(updates)
       if (error) throw error
         setOpen$1cat(false)
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
          <p className="font-medium">$bobo</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openPorkModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$pork</p>
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
        <div onClick={openGmeModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$gme</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openSpeedModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$speed</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openLichiModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$lichi</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openStacheModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$stache</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openHaltModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$halt</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openSecModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$sec</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openDumbModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$dumb</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openAmcModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$amc</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openSelfieModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$selfie</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openMiniModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$mini</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openPepeModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">PEPE(erc20)</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openRedoModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Redo</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openRecaModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Reca</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openSlerfModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Slerf</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openGigaModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$giga</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openPepeCoinModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$pepeCoin(erc20)</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openDukoModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Duko</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openTobiModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Tobi</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openNigiModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Nigi</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openDjcatModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Djcat</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openApeModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Ape</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openDixiModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$Dixi</p>
          <div className="shrink-0 bg-[#7439b8] rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={open$1catModal} className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300
          cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className="font-medium">$1cat</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}MATIC</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">MATIC Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{matic}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMATIC}
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
                          value={deposit_matic || inputValue}
                          onChange={handleChangeMATIC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMATIC({ deposit_matic })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay MATIC'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMATICModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other MATIC amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BONK</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">BONK Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bonk}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBONK}
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
                          value={deposit_bonk || inputValue}
                          onChange={handleChangeBONK}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBONK({ deposit_bonk })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay BONK'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBONKModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BONK amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}DOGE</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">DOGE Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{doge}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDOGE}
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
                          value={deposit_doge || inputValue}
                          onChange={handleChangeDOGE}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDOGE({ deposit_doge })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay DOGE'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDOGEModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other DOGE amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}ARBITRUM</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ARBITRUM Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{arbitrum}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardARBITRUM}
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
                          value={deposit_arbitrum || inputValue}
                          onChange={handleChangeARBITRUM}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositARBITRUM({ deposit_arbitrum })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ARBITRUM'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeARBITRUMModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ARBITRUM amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}ENJ</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ENJ Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{enj}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardENJ}
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
                          value={deposit_enj || inputValue}
                          onChange={handleChangeENJ}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositENJ({ deposit_enj })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ENJ'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeENJModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ENJ amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BRC</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">BRC Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{brc20}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBRC}
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
                          value={deposit_brc || inputValue}
                          onChange={handleChangeBRC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBRC({ deposit_brc })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay BRC20'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBRCModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BRC20 amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}JUP</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">JUP Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{jup}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardJUP}
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
                          value={deposit_jup || inputValue}
                          onChange={handleChangeJUP}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositJUP({ deposit_jup })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay JUP'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeJUPModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other JUP amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}WEN</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">WEN Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{wen}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardWEN}
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
                          value={deposit_wen || inputValue}
                          onChange={handleChangeWEN}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositWEN({ deposit_wen })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay WEN'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeWENModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other WEN amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$michi</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$michi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{michi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMichi}
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
                          value={deposit_michi || inputValue}
                          onChange={handleChangeMichi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMichi({ deposit_michi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $michi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMichiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $michi amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$wif</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$wif Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{wif}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardWif}
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
                          value={deposit_wif || inputValue}
                          onChange={handleChangeWif}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositWif({ deposit_wif })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $wif'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeWifModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $wif amount.</p>
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
        {/* Brett */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$brett</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$brett Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{brett}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBrett}
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
                          value={deposit_brett || inputValue}
                          onChange={handleChangeBrett}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBrett({ deposit_brett })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $brett'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBrettModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $brett amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$friend</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$friend Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{friend}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardFriend}
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
                          value={deposit_friend || inputValue}
                          onChange={handleChangeFriend}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositFriend({ deposit_friend })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $friend'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeFriendModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $friend amount.</p>
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$tnsr</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$tnsr Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{tnsr}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardTnsr}
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
                          value={deposit_tnsr || inputValue}
                          onChange={handleChangeTnsr}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositTnsr({ deposit_tnsr })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $tnsr'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeTnsrModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $tnsr amount.</p>
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
        {/* Hobbes */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$hobbes</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$hobbes Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{hobbes}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardHobbes}
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
                          value={deposit_hobbes || inputValue}
                          onChange={handleChangeHobbes}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositHobbes({ deposit_hobbes })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $hobbes'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeHobbesModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $hobbes amount.</p>
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
        {/* Mew */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$mew</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$mew Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{mew}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMew}
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
                          value={deposit_mew || inputValue}
                          onChange={handleChangeMew}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMew({ deposit_mew })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $mew'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMewModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $mew amount.</p>
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
        {/* Popcat */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$popcat</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$popcat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{popcat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPopcat}
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
                          value={deposit_popcat || inputValue}
                          onChange={handleChangePopcat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositPopcat({ deposit_popcat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $popcat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePopcatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $popcat amount.</p>
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
        {/* Sharkcat */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$sharkcat</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$sharkcat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{sharkcat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSharkcat}
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
                          value={deposit_sharkcat || inputValue}
                          onChange={handleChangeSharkcat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSharkcat({ deposit_sharkcat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $sharkcat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSharkcatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $sharkcat amount.</p>
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
        {/* Crodie */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$crodie</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$crodie Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{crodie}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardCrodie}
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
                          value={deposit_crodie || inputValue}
                          onChange={handleChangeCrodie}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositCrodie({ deposit_crodie })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $crodie'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeCrodieModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $crodie amount.</p>
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
         {/* Bobo */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$bobo</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$bobo Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bobo}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBobo}
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
                          value={deposit_bobo || inputValue}
                          onChange={handleChangeBobo}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBobo({ deposit_bobo })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $bobo'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeCrodieModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $bobo amount.</p>
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
         {/* Pork */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$pork</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$pork Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{pork}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPork}
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
                          value={deposit_pork || inputValue}
                          onChange={handleChangePork}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositPork({ deposit_pork })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $pork'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePorkModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $pork amount.</p>
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
         {/* Wolf */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$wolf</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$wolf Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{crodie}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardWolf}
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
                          value={deposit_wolf || inputValue}
                          onChange={handleChangeWolf}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositWolf({ deposit_wolf })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $wolf'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeWolfModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $wolf amount.</p>
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
         {/* Andy */}
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
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$andy</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$andy Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{andy}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardAndy}
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
                          value={deposit_andy || inputValue}
                          onChange={handleChangeAndy}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositAndy({ deposit_andy })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $andy'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeAndyModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $andy amount.</p>
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
        {/* Gme */}
        <Transition appear show={openGme} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeGmeModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$gme</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$gme Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{gme}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardGme}
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
                          value={deposit_gme || inputValue}
                          onChange={handleChangeGme}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositGme({ deposit_gme })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $gme'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeGmeModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $gme amount.</p>
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
        {/* speed */}
        <Transition appear show={openSpeed} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSpeedModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$speed</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$speed Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{speed}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSpeed}
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
                          value={deposit_speed || inputValue}
                          onChange={handleChangeSpeed}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSpeed({ deposit_speed })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $speed'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSpeedModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $speed amount.</p>
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
        {/* Lichi */}
        <Transition appear show={openLichi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeLichiModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$lichi</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$lichi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{lichi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardLichi}
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
                          value={deposit_lichi || inputValue}
                          onChange={handleChangeLichi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositLichi({ deposit_lichi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $lichi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeLichiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $lichi amount.</p>
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
        {/* stache */}
        <Transition appear show={openStache} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeStacheModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$stache</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$stache Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{stache}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardStache}
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
                          value={deposit_stache || inputValue}
                          onChange={handleChangeStache}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositStache({ deposit_stache })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $stache'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeStacheModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $stache amount.</p>
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
        {/* Halt */}
        <Transition appear show={openHalt} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeHaltModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$halt</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$halt Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{halt}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardHalt}
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
                          value={deposit_halt || inputValue}
                          onChange={handleChangeHalt}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositHalt({ deposit_halt })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $halt'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeHaltModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $halt amount.</p>
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
        {/* Sec */}
        <Transition appear show={openSec} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSecModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$sec</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$sec Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{sec}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSec}
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
                          value={deposit_sec || inputValue}
                          onChange={handleChangeSec}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSec({ deposit_sec })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $sec'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSecModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $sec amount.</p>
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
        {/* dumb */}
        <Transition appear show={openDumb} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDumbModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$dumb</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$dumb Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{dumb}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDumb}
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
                          value={deposit_dumb || inputValue}
                          onChange={handleChangeDumb}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDumb({ deposit_dumb })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $dumb'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDumbModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $dumb amount.</p>
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
        {/* Amc */}
        <Transition appear show={openAmc} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeAmcModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$amc</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$amc Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{amc}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardAmc}
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
                          value={deposit_amc || inputValue}
                          onChange={handleChangeAmc}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositAmc({ deposit_amc })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $amc'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeAmcModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $amc amount.</p>
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
        {/* Selfie */}
        <Transition appear show={openSelfie} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSelfieModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$selfie</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$selfie Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{selfie}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSelfie}
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
                          value={deposit_selfie || inputValue}
                          onChange={handleChangeSelfie}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSelfie({ deposit_selfie })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $selfie'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSelfieModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $selfie amount.</p>
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
        {/* Mini */}
        <Transition appear show={openMini} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMiniModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$mini</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$mini Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{andy}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMini}
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
                          value={deposit_mini || inputValue}
                          onChange={handleChangeMini}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMini({ deposit_mini })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $mini'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMiniModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $mini amount.</p>
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
        {/* Pepe */}
        <Transition appear show={openPepe} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePepeModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$pepe</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$pepe Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{pepe}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPepe}
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
                          value={deposit_pepe || inputValue}
                          onChange={handleChangePepe}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMini({ deposit_pepe })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $pepe'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePepeModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $pepe amount.</p>
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
        {/* Reca */}
        <Transition appear show={openReca} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeRecaModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$reca</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$reca Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{reca}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardReca}
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
                          value={deposit_reca || inputValue}
                          onChange={handleChangeReca}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositReca({ deposit_reca })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $reca'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeRecaModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $reca amount.</p>
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
        {/* Redo */}
        <Transition appear show={openRedo} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeRedoModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$redo</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$redo Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{reca}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardRedo}
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
                          value={deposit_redo || inputValue}
                          onChange={handleChangeRedo}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositRedo({ deposit_redo })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $redo'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeRedoModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $redo amount.</p>
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
        {/* Slerf */}
        <Transition appear show={openSlerf} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSlerfModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$slerf</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$slerf Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{slerf}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSlerf}
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
                          value={deposit_slerf || inputValue}
                          onChange={handleChangeSlerf}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSlerf({ deposit_slerf })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $slerf'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSlerfModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $slerf amount.</p>
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
        {/* Giga */}
        <Transition appear show={openGiga} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeGigaModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$giga</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$giga Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{reca}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardGiga}
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
                          value={deposit_giga || inputValue}
                          onChange={handleChangeGiga}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositGiga({ deposit_giga })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $giga'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeGigaModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $giga amount.</p>
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
         {/* $1cat */}
         <Transition appear show={open$1cat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={close$1catModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$1cat</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$1cat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{$1cat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboard$1cat}
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
                          value={deposit_$1cat || inputValue}
                          onChange={handleChange$1cat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => deposit$1cat({ deposit_$1cat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $1cat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={close$1catModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $1cat amount.</p>
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
        {/* $dixi */}
        <Transition appear show={openDixi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDixiModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Dixi</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Dixi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{dixi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDixi}
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
                          value={deposit_dixi || inputValue}
                          onChange={handleChangeDixi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDixi({ deposit_dixi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay Dixi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDixiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other Dixi amount.</p>
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
        {/* $Ape */}
        <Transition appear show={openApe} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeApeModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$ape</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Ape Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{ape}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardApe}
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
                          value={deposit_ape || inputValue}
                          onChange={handleChangeApe}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositApe({ deposit_ape })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Ape'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeApeModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other Ape amount.</p>
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
        {/* Djcat */}
        <Transition appear show={openDjcat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDjcatModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Djcat</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Djcat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{djcat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDjcat}
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
                          value={deposit_djcat || inputValue}
                          onChange={handleChangeDjcat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDjcat({ deposit_djcat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Djcat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDjcatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $Djcat amount.</p>
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
        {/* Nigi */}
        <Transition appear show={openNigi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeNigiModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Nigi</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Nigi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{nigi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardNigi}
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
                          value={deposit_nigi || inputValue}
                          onChange={handleChangeNigi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositNigi({ deposit_nigi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Nigi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeNigiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $Nigi amount.</p>
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
        {/* Tobi */}
        <Transition appear show={openTobi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeTobiModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$tobi</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$tobi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{tobi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardTobi}
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
                          value={deposit_tobi || inputValue}
                          onChange={handleChangeTobi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositTobi({ deposit_tobi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Tobi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeTobiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $tobi amount.</p>
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
        {/* duko */}
        <Transition appear show={openDuko} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDukoModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Duko</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Duko Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{duko}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDuko}
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
                          value={deposit_duko || inputValue}
                          onChange={handleChangeDuko}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDuko({ deposit_duko })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Duko'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDukoModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $Duko amount.</p>
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
        {/* pepeCoin */}
        <Transition appear show={openPepeCoin} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePepeCoinModal}>
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
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$pepecoin(erc20)</span> to the address below</p>
                      <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      />
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$pepecoin(erc20) Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{pepecoin}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPepeCoin}
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
                          value={deposit_pepeCoin || inputValue}
                          onChange={handleChangePepeCoin}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositPepeCoin({ deposit_pepeCoin })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $PepeCoin'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePepeCoinModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $pepeCoin amount.</p>
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
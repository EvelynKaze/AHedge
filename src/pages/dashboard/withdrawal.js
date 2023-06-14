import { Fragment, useState, useEffect, useContext } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from './../../components/Header.jsx'
// import { useSidebarContext, SidebarContext } from './../../context/SidebarContext'
import BaseLayout from './../../components/BaseLayout';
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
    const bitcoin = "bc1qkk9tf9c72kv7hlaf6cjazq2an9sstvnsawst33"
    
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
    ///////////////////////////////////////////////////////
    const [deposit_eth, setDepositEth] = useState(null)
    const eth = "0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03"
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
///////////////////////////////////////////////////////////
    const usdt = "0x11f38b2Ca413457Ce7f964ad1633Bd6aFe11B213"
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
    <div className="bg-gray-100 h-screen">
      <BaseLayout>
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
            <h2 className="font-bold text-3xl bg-cyan-500 w-20 h-20 m-auto flex justify-center items-center rounded-full text-white">
                <FaWallet />
            </h2>
            <h2 className="font-bold text-2xl text-gray-700">You&#39;re almost ready to withdraw!</h2>
            <h4 className="font-semibold">To make a withdraw, please select a cryptocurrency, add a withdraw wallet,  <br />and specify amount.</h4>
            <p className="text-xs font-light">Send your funds directly to your wallet</p>
          </div>
        
      <div className="mx-auto w-full max-w-md space-y-4">
      <div onClick={openBTCModal} className="bg-white active:bg-sky-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300
        cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className=" font-medium ">BTC</p>
          <div className="shrink-0 bg-cyan-500 rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openETHModal} className="bg-white active:bg-sky-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300
        cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className=" font-medium ">ETH</p>
          <div className="shrink-0 bg-cyan-500 rounded-full">
            <CheckIcon className="h-6 w-6" />
          </div>
        </div>
        <div onClick={openUSDTModal} className="bg-white active:bg-sky-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300
        cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
          <p className=" font-medium ">USDT</p>
          <div className="shrink-0 bg-cyan-500 rounded-full">
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
                    <form className="mt-2" onSubmit={() => router.push('/dashboard/deposit')}>
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Bitcoin Address <span className="text-rose-500">*</span></label>
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input type="number" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Pay Bitcoin fees'}
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
                        <div className="text-red-600 font-semibold flex space-x-2">
                            <AiOutlineInfoCircle className="animate-bounce" />
                            <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                        </div>
                        <div className="flex space-x-2 text-gray-500">
                            <AiOutlineInfoCircle />
                            <p className='text-xs'>Account will be credited once we received your payment.</p>
                        </div>
                        </div>
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
                    <form className="mt-2" onSubmit={() => router.push('/dashboard/deposit')}>
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">ETH Address <span className="text-rose-500">*</span></label>
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input type="number" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Pay ETH fees'}
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
                        <div className="text-red-600 font-semibold flex space-x-2">
                            <AiOutlineInfoCircle className="animate-bounce" />
                            <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                        </div>
                        <div className="flex space-x-2 text-gray-500">
                            <AiOutlineInfoCircle />
                            <p className='text-xs'>Account will be credited once we received your payment.</p>
                        </div>
                        </div>
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
                    <form className="mt-2" onSubmit={() => router.push('/dashboard/deposit')}>
                      <p className="text-sm text-left">Add Crypto Wallet address to withdraw your funds</p>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">USDT Address <span className="text-rose-500">*</span></label>
                      <input type="text" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>
                      <label className="text-left uppercase text-sm text-gray-600 my-3">Specify Amount <span className="text-rose-500">*</span></label>
                      <input type="number" className="text-sm font-semibold text-gray-500 border rounded-lg flex justify-between p-2 px-3" required/>

                      {/* BUTTONS */}
                        <div className="space-y-2 mt-4">
                        <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            disabled={loading}
                            >
                            {loading ? 'Loading ...' : 'Pay USDT fees'}
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
                        <div className="text-red-600 font-semibold flex space-x-2">
                            <AiOutlineInfoCircle className="animate-bounce" />
                            <p className='text-xs'>Be aware that you need to deposit 10% of your current balance to withdraw as gas fees</p>
                        </div>
                        <div className="flex space-x-2 text-gray-500">
                            <AiOutlineInfoCircle />
                            <p className='text-xs'>Account will be credited once we received your payment.</p>
                        </div>
                        </div>
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
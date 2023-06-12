import { Fragment, useState, useEffect, useContext } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from './../../components/Header.jsx'
// import { useSidebarContext, SidebarContext } from './../../context/SidebarContext'
import BaseLayout from './../../components/BaseLayout';
import { Dialog, Transition } from '@headlessui/react'
import { FaBitcoin } from "react-icons/fa"
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
            <h2 className="font-bold text-2xl">Deposit Funds</h2>
            <h4>via <span className="font-semibold">Crypto Wallet</span></h4>
            <p className="text-xs font-light">Send your payment directly to our wallet</p>
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
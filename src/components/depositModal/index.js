import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaBitcoin } from "react-icons/fa";
import { SiXrp } from "react-icons/si";
import { FiCopy } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const CryptoPaymentModal = ({
  isOpen,
  onClose,
  cryptocurrency,
  cryptoIcon,
  inputValue,
  address,
  clipboardHandler,
  handleChange,
  depositAmount,
  depositHandler,
  loading
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                  <p className="text-sm text-center">
                    Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}{cryptocurrency}</span> to the address below
                  </p>
                  <p className="text-center uppercase text-sm text-gray-400 my-3">{cryptocurrency} Address</p>
                  <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                    <span className="flex space-x-2">
                      {cryptoIcon}
                      <p>{address}</p>
                    </span>
                    <FiCopy
                      onClick={clipboardHandler}
                      title="click to copy"
                      className="text-blue-400 cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between p-1 my-2">
                    <span className="text-base antialiased font-normal">Enter Amount:</span>
                    <input
                      type="number"
                      placeholder="0.03"
                      className="h-8 w-64 rounded-lg"
                      value={depositAmount || inputValue}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="space-y-2">
                  <button
                    type="submit"
                    onClick={depositHandler}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    disabled={loading}
                  >
                    {loading ? 'Loading ...' : `Pay ${cryptocurrency}`}
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Pay Later
                  </button>
                </div>

                {/* INFO */}
                <div className="mt-3">
                  <div className="text-rose-500 flex space-x-2">
                    <AiOutlineInfoCircle />
                    <p className="text-xs">Be aware that this order will be cancelled if you send any other {cryptocurrency} amount.</p>
                  </div>
                  <div className="flex space-x-2 text-gray-500">
                    <AiOutlineInfoCircle />
                    <p className="text-xs">Account will be credited once we received your payment.</p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CryptoPaymentModal;

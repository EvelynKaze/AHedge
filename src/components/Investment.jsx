import { useRouter } from "next/router";
import { FaBitcoin } from "react-icons/fa"
import { FiCopy } from "react-icons/fi"

const Investment = () => {
  const router = useRouter();
  const usdt = "0x11f38b2Ca413457Ce7f964ad1633Bd6aFe11B213"
  const bitcoin = "bc1qkk9tf9c72kv7hlaf6cjazq2an9sstvnsawst33"
  const eth = "0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03"

  const handleDeposit = async () =>{
    router.push('/dashboard/deposit')
  }
  const handleWithdrawal = async () =>{
    router.push('/dashboard/withdrawal')
  }
  return (
    <div>
        <div className="w-full mt-5 md:col-span-2 relative lg:h-fit h-[20vh] p-4 border rounded-lg bg-white">
          <p className="font-bold tracking-wide text-lg">Investment Plans</p>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">Bronze Plan</h5>
              <h5>$500 -$5000</h5>
            </div>
            <div>
              <h5 className="font-bold">Daily ROI</h5>
              <h5>+20%</h5>
            </div>
            <div>
              <h5 className="font-bold">Risk</h5>
              <h5>Low</h5>
            </div>
            <button onClick={handleDeposit} className="h-10 p-2 bg-green-500 text-white">Invest Now</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">Silver Plan</h5>
              <h5>$5000 -$10000</h5>
            </div>
            <div>
              <h5 className="font-bold">Daily ROI</h5>
              <h5>+35%</h5>
            </div>
            <div>
              <h5 className="font-bold">Risk</h5>
              <h5>Min</h5>
            </div>
            <button onClick={handleDeposit} className="h-10 p-2 bg-green-500 text-white">Invest Now</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">Gold Plan</h5>
              <h5>$10000 - Max</h5>
            </div>
            <div>
              <h5 className="font-bold">Daily ROI</h5>
              <h5>+50%</h5>
            </div>
            <div>
              <h5 className="font-bold">Risk</h5>
              <h5>Min</h5>
            </div>
            <button onClick={handleDeposit} className="h-10 p-2 bg-green-500 text-white">Invest Now</button>
          </div>
        </div>
        <div className="w-full mt-5 md:col-span-2 relative lg:h-fit h-[20vh] p-4 border rounded-lg bg-white">
          <p className="font-bold tracking-wide text-lg">Your Wallet</p>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">BTC</h5>
            </div>
            <div className="text-xs h-fit p-2 font-medium text-gray-500 border rounded-lg flex justify-between">
              <p>{bitcoin}</p>
            </div>
            <div>
            <button onClick={handleDeposit} className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button onClick={handleWithdrawal} className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">USDT</h5>
              <h6 className="text-xs">BEP20</h6>
            </div>
            <div className="text-xs h-fit p-2 font-medium text-gray-500 border rounded-lg flex justify-between">
                <p>{usdt}</p>
            </div>
            <div>
              <button onClick={handleDeposit} className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button onClick={handleWithdrawal} className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">ETH</h5>
              <h6 className="text-xs">ERC20</h6>
            </div>
            <div className="text-xs h-fit p-2 font-medium text-gray-500 border rounded-lg flex justify-between">
              <p>{eth}</p>
            </div>
            <div>
            <button onClick={handleDeposit} className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button onClick={handleWithdrawal} className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
        </div>
    </div>
  )
}

export default Investment
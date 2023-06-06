import React from 'react'

const Investment = () => {
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
            <button className="h-10 p-2 bg-green-500 text-white">Invest Now</button>
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
            <button className="h-10 p-2 bg-green-500 text-white">Invest Now</button>
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
            <button className="h-10 p-2 bg-green-500 text-white">Invest Now</button>
          </div>
        </div>
        <div className="w-full mt-5 md:col-span-2 relative lg:h-fit h-[20vh] p-4 border rounded-lg bg-white">
          <p className="font-bold tracking-wide text-lg">Your Wallet</p>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">BTC</h5>
            </div>
            <div>
              <input type="text" className="rounded-lg text-light" value="bc1qkk9tf9c72kv7hlaf6cjazq2an9sstvnsawst33" disabled/>
            </div>
            <div>
            <button className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">USDT</h5>
              <h6 className="text-xs">BEP20</h6>
            </div>
            <div>
              <input type="text" className="rounded-lg text-light" value="0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03" disabled/>
            </div>
            <div>
            <button className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">ETH</h5>
              <h6 className="text-xs">ERC20</h6>
            </div>
            <div>
              <input type="text" className="rounded-lg text-light" value="0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03" disabled/>
            </div>
            <div>
            <button className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
        </div>
    </div>
  )
}

export default Investment
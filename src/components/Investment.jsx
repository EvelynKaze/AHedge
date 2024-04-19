import { useRouter } from "next/router";
import { FaBitcoin } from "react-icons/fa"
import { FiCopy } from "react-icons/fi"
import { GiMetalPlate, GiSilverBullet, GiGoldBar } from "react-icons/gi"
import { IoDiamondOutline } from "react-icons/io5"
import Link from 'next/link'


const plans = [
  {
      package: "silver package",
      price: "$500 - $5000",
      roi: "15% daily",
      duration: "30 days",
      icon: GiSilverBullet,
      iconClass: "text-gray-100 mx-2 text-5xl lg:text-xl",
      href: '/dashboard/stake',
  },
  {
      package: "gold package",
      price: "$5000 - $50000",
      roi: "20% daily",
      duration: "30 days",
      icon: GiGoldBar,
      iconClass: "text-yellow-500 mx-2 text-5xl lg:text-xl",
      href: '/dashboard/stake',
  },
  {
      package: "diamond package",
      price: "$50000 - $500000",
      roi: "30% daily",
      duration: "30 days",
      icon: IoDiamondOutline,
      iconClass: "text-white mx-1 text-5xl lg:text-xl",
      href: '/dashboard/stake',
  },
  {
      package: "Platinum package",
      price: "$500000 - $1000000",
      roi: "50% daily",
      duration: "60 days",
      icon: GiMetalPlate,
      iconClass: "text-neutral-800 mx-1 text-5xl lg:text-xl",
      href: '/dashboard/stake',
  },
]

const Investment = () => {
  const router = useRouter();
  const usdt = "0x11f38b2Ca413457Ce7f964ad1633Bd6aFe11B213"
  const bitcoin = "bc1qkk9tf9c72kv7hlaf6cjazq2an9sstvnsawst33"
  const eth = "0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03"

  // const handleDeposit = async () =>{
  //   router.push('/dashboard/deposit')
  // }
  // const handleWithdrawal = async () =>{
  //   router.push('/dashboard/withdrawal')
  // }
  return (
        <div className="w-[28rem] lg:w-full py-5 p-2">
          <h1 className="font-bold text-2xl py-2">Staking Plans</h1>
          <div className="grid pr-28 lg:px-0 grid-cols-1 shadow-sm rounded">
        <div className="mx-auto w-full h-fit space-y-7">
            {plans.map((plan) => (
                <div key={plan.package} className="hidden lg:grid gap-x-2 bg-gray-500 text-gray-200 card-2 p-3 rounded-xl grid-cols-5">
                    <div className="flex justify-center items-center">
                        <plan.icon className={plan.iconClass} />
                        <span className="capitalize">{plan.package}</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <span>Price</span>
                        <span>{plan.price}</span>
                    </div>
                    <div className="flex flex-col text-center ">
                        <span>ROI</span>
                        <span>{plan.roi}</span>
                    </div>
                    <div className="flex flex-col text-center ">
                        <span>Duration</span>
                        <span>{plan.duration}</span>
                    </div>
                    <Link href={plan.href} className='bg-white rounded w-28 h-12 text-black hover:text-white hover:bg-transparent outline outline-white flex justify-center items-center'>Invest</Link>
                </div>
            ))}

            {/* Mobile view */}
            {plans.map((plan) => (
                              <div key={plan.package} className="grid text-white bg-gray-500 card-2 px-5 p-3 rounded-xl lg:hidden gap-x-2 gap-y-2 grid-cols-1">
                                  <div className="">
                                      <plan.icon className={plan.iconClass} />
                                      <span className="capitalize text-xl font-semibold">{plan.package}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                      <span>Price</span>
                                      <span className="bg-black p-2 rounded">{plan.price}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                      <span>ROI</span>
                                      <span>{plan.roi}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                      <span>Duration</span>
                                      <span>{plan.duration}</span>
                                  </div>
                                  <Link href={plan.href} className='bg-white rounded mx-auto w-28 h-12 text-black text-center py-3 hover:text-white'>Invest</Link>
                              </div>
                          ))}
        </div>
      </div>
        </div>
  )
}

export default Investment

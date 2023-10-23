import { Button } from "../components/ui/button"
import { GiMetalPlate, GiSilverBullet, GiGoldBar } from "react-icons/gi"
import { IoDiamondOutline } from "react-icons/io5"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const data = [
    {
      title: 'Global Staking Market Cap',
      subTitle: '$94.6b'
    },
    {
      title: 'Net Staking Flow 7d',
      subTitle: '+$1.01b'
    },
    {
      title: 'Global Rewards Per Year',
      subTitle: '$4.87b'
    },
    {
      title: 'Benchmark Reward Rate',
      subTitle: '5.55%'
    },
    
  ]

const plans = [
    {
        package: "silver package",
        price: "$500 - $5000",
        roi: "5% daily",
        duration: "30 days",
        icon: GiSilverBullet,
        iconClass: "text-gray-100 mx-2 text-5xl lg:text-xl",
    },
    {
        package: "gold package",
        price: "$5000 - $50000",
        roi: "10% daily",
        duration: "30 days",
        icon: GiGoldBar,
        iconClass: "text-yellow-500 mx-2 text-5xl lg:text-xl",
    },
    {
        package: "diamond package",
        price: "$50000 - $500000",
        roi: "15% daily",
        duration: "30 days",
        icon: IoDiamondOutline,
        iconClass: "text-white mx-1 text-5xl lg:text-xl",
    },
    {
        package: "Platinum package",
        price: "$500000 - $1000000",
        roi: "20% daily",
        duration: "60 days",
        icon: GiMetalPlate,
        iconClass: "text-neutral-800 mx-1 text-5xl lg:text-xl",
    },
]

const About = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <div className="bg-black text-white">
          {/* <div className='center z-10 relative left-[32rem] -top-56 hidden lg:block w-32' /> */}
            <div className="mx-auto max-w-7xl -z-10">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y- sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 mt-16">
                  <div className="lg:max-w-lg px-2 lg:px-0">
                    <p className="text-4xl font-clash font-bold tracking-tight text-white sm:text-6xl">
                        Staking Plans 
                    </p>
                    <p className="my-8 text-base font-light leading-8 text-white">
                        Secure and performant non-custodial staking services for individuals and institutional investors.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12 bg-red-500 max-w-2xl mx-auto p-12">
                  {data.map((datum) => (
                      <div key={datum.title} className="bg-gray-500 p-5 w-60 rounded-xl">
                          <h2 className='text-sm'>{datum.title}</h2>
                          <p className="font-bold text-lg">{datum.subTitle}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black w-full py-10 lg:px-44 px-0">
              <div className='center-2 z-10 relative left-[33.5rem] top-96 w-24' />
                  <div className='lg:px-36 px-2'>
                      <p className="capitalize font-bold text-white text-3xl mb-9">Explore Top Staking Plans</p>
                      <div className="w-full h-fit space-y-7">
                          {plans.map((plan) => (
                              <div key={plan.package} className="hidden bg-gray-700 card-2 p-3 rounded-xl lg:grid gap-x-2 grid-cols-5">
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
                                  <Button variant="outline" className='bg-white rounded w-28 h-12 text-black hover:text-white'>Invest</Button>
                              </div>
                          ))}
                          {/* Mobile view */}
                          {plans.map((plan) => (
                              <div key={plan.package} className="grid bg-gray-700 card-2 px-5 p-3 rounded-xl lg:hidden gap-x-2 gap-y-2 grid-cols-1">
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
                                  <Button variant="outline" className='bg-white rounded mx-auto w-28 h-12 text-black hover:text-white'>Invest</Button>
                              </div>
                          ))}

                      </div>
                  </div>
            </div>
          </div>
      </main>
      
        
      <a
        href="https://wa.me/15084963395"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </>
  )
}

export default About
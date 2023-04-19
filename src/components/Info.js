import { GiCoins } from 'react-icons/gi';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FcAreaChart } from 'react-icons/fc';


  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {/* one */}
            <div className="mx-auto flex max-w-xs text-left flex-col gap-y-2">
              <GiCoins className="text-5xl text-blue-600 order-first ml-3" />
              <dd className="order-second text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Wealth Management
              </dd>
              <dt className="text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </dt>
            </div>
            {/* two */}
            <div className="mx-auto flex max-w-xs text-left flex-col gap-y-2">
              <TbDeviceDesktopAnalytics className="text-5xl text-blue-600 order-first ml-3" />
              <dd className="order-second text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Invest Management
              </dd>
              <dt className="text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </dt>
            </div>
            {/* three */}
            <div className="mx-auto flex max-w-xs text-left flex-col gap-y-2">
              <FcAreaChart className="text-5xl text-blue-600 order-first ml-3" /> 
              <dd className="order-second text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Sales & Trading
              </dd>
              <dt className="text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </dt>
            </div>
          </dl>
        </div>
      </div>
    )
  }
  
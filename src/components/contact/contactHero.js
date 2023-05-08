import { GoPrimitiveDot } from 'react-icons/go'
import { motion } from 'framer-motion';


const features = [
  {
    name: 'Phone: (+62) 81 314239',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Mon - Fri: 09.00 AM - 22.00 PM',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Location: Jalan Sunset Road No.20',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Sat: 09.00 AM - 15.00 PM',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Email: support@wallethedge.org',
    icon: GoPrimitiveDot,
  },
  {
    name: 'Sunday: Closed',
    icon: GoPrimitiveDot,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
              initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration: 1.0 }}
            whileInView={{ opacity: 1, y:-20 }}
            viewport={{ once:true }}
            className="shadow-xl lg:w-5/6 md:w-1/2 bg-gray-100 rounded p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">First Name *</label>
              <input type="text" name="full-name" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none leading-8" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">Email *</label>
              <input type="email" name="email" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none leading-8" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">Subject *</label>
              <input type="text" name="subject" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none leading-8" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-base text-gray-600">Message *</label>
              <textarea type="text" name="message" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none leading-8 "></textarea>
            </div>
            <button className="text-white align-left text-center w-28 text-xl bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-100 hover:border-2 hover:border-blue-500 hover:text-blue-500 rounded-3xl">Submit</button>
          </motion.div>
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 capitalize">Get In Touch</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl capitalize">Contact Us To Get More Information</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <dl className="grid max-w-xl grid-cols-2 gap-x-2 gap-y-1 lg:max-w-none lg:grid-cols-2 lg:gap-y-5 mt-4">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-8">
                    <div className="text-xs lg:text-sm font-semibold leading-7 text-gray-900">
                      <div className="absolute left-1 top-1 flex">
                          <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      </div>
                    {feature.name}
                    </div>
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd> */}
                </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

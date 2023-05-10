import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';





const register = () => {
  return (
    <>
        <Navbar />
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
                    className="shadow-xl lg:w-4/6 md:w-1/2 bg-gray-100 rounded p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <div className="relative mb-4">
                        <label className="leading-7 text-base text-gray-600">Email *</label>
                        <input type="email" name="email" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none leading-8" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-base text-gray-600">Password *</label>
                        <input type="password" name="password" className="w-full text-gray-700 py-1 px-3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none leading-8" />
                    </div>
                    <button className="text-white align-left text-center w-28 text-xl bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-100 hover:border-2 hover:border-blue-500 hover:text-blue-500 rounded-3xl">Submit</button>
                </motion.div>
                
                <div className="lg:pr-8 lg:pt-4">
                    
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default register
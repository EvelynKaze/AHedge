import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import Link from "next/link"





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
                    whileInView={{ opacity: 1, y:-40 }}
                    viewport={{ once:true }}
                    className="shadow-xl rounded w-full"
                    >
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-left mt-10 text-2xl font-semibold leading-9 tracking-tight text-gray-900">
                          Create an Account
                        </h2>
                      </div>

                      <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Full Name
                            </label>
                            <div>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                              </label>
                              {/* <div className="text-xs">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                  Forgot password?
                                </a>
                              </div> */}
                            </div>
                            <div className="mt-2">
                              <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Sign in
                            </button>
                          </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                          Already have an account?{' '}
                          <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Log In
                          </Link>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                
                  <div className="lg:pr-8 lg:pt-4">
                      
                  </div>
                </div>
            </div>
        </div>
        <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  )
}

export default register
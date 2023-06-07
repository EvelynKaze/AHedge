import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import Link from "next/link"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, Localization } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'




export default function Example() {
    const session = useSession()
    const supabase = useSupabaseClient()
    return (
      <>
        <motion.div 
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration: 1.0, type: 'spring', bounce: .5 }}
            whileInView={{ opacity: 1, y:-20 }}
            className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
            >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
            className="mx-auto h-22 w-20 animate-bounce"
            src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/wallethedge-logo-removebg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3dhbGxldGhlZGdlLWxvZ28tcmVtb3ZlYmcucG5nIiwiaWF0IjoxNjgzODYyMTY0LCJleHAiOjE3MTUzOTgxNjR9.CGRl6UcT7CpOgClUWeMJd6BFah44znWUCCgzBnI-ebc&t=2023-05-12T03%3A29%3A25.605Z"
            alt="Your Company"
            />
            <img
            className="mx-auto"
            src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/logo-login.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2xvZ28tbG9naW4ucG5nIiwiaWF0IjoxNjg1MzQzNzY3LCJleHAiOjE3MTY4Nzk3Njd9.X7BL9uVZDbB4pHMpIeNFB6-ZUgWudzCTVyO4qpm-y_U&t=2023-05-29T07%3A02%3A46.831Z"
            alt="Your Company"
            />
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          {!session ? (
            // ['google', 'facebook', 'github']
            <Auth providers={{}} supabaseClient={supabase} 
              appearance={{ 
                theme: ThemeSupa,
                // Localization,
                extend: false,
                className: {
                    container: 'space-y-5',
                    label: 'block text-sm font-medium leading-6 text-gray-900',
                    divider: 'mt-2 bg-red-500',
                    input: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                    button: 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                    message: 'flex justify-center items-center p-4 text-blue-400',
                    loader: 'bg-green-500 text-green-500',
                    anchor: 'flex justify-center items-center text-sm text-gray-500 underline hover:text-indigo-500'
                },
                variables: {
                    sign_in: {
                        email_label: 'Email'
                    },
                    default: 
                        { colors: 
                            { brand: '#007FFF', brandAccent: '#00308F', },
                        }, 
                }, 
              }} 
            />
          ) : (
            <Account session={session} />
          )}
        </div>
        {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
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
                <div className="text-sm block">
                    <a href="#" className=" float-right font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                    </a>
                </div>
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
            Don&#39;t have an account?{' '}
            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign up
            </Link>
            </p>
        </div> */}
        </motion.div>

        {/* <h1 className='text-3xl font-bold text-center mt-14'>Welcome to WalletHedge</h1> */}
      {/* <div className='flex items-center justify-center'>
        <div className="w-[80%] lg:w-1/4 m-auto border-2 shadow-xl p-5 bg-green-500">
          {!session ? (
            // ['google', 'facebook', 'github']
            <Auth providers={{}} supabaseClient={supabase} 
              appearance={{ 
                theme: ThemeSupa, 
                variables: { default: 
                  { colors: 
                    { brand: '#007FFF', brandAccent: '#00308F', },
                  }, 
                }, 
              }} 
            />
          ) : (
            <Account session={session} />
          )}
        </div>
      </div> */}
      </>
    )
  }


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
      <div className="w-full h-screen bg-black overflow-hidden">
        <motion.div 
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration: 1.0, type: 'spring', bounce: .5 }}
            whileInView={{ opacity: 1, y:70 }}
            className="flex min-h-fit lg:w-2/6 mx-auto bg-transparent border-2 rounded-xl flex-1 flex-col justify-center px-6 py-12 lg:px-8"
            >
        <Link href="/" className="flex flex-shrink-0 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="Header_ProofGlyph__6qIxd w-20 animate-bounce hover:fill-[#7439b8] fill-white cursor-pointer"><path fillRule="evenodd" d="M32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0Zm19.734 51.782a28.055 28.055 0 0 0 7.107-11.967c-2.3 2.338-5.613 4.327-9.63 5.819l.103-.449c.188-.819.38-1.653.543-2.51 5.535-2.337 9.294-5.702 9.979-9.441h-9.01v-2.429h8.996c-.684-3.74-4.456-7.104-9.99-9.435l-.09-.04v-.077a10.546 10.546 0 0 0-1.7-3.229 31.318 31.318 0 0 1 7.809 3.74c.368.251.717.51 1.059.768l.051.045c.323.246.634.504.93.762l.098.085c.277.251.548.503.8.761l.058.052A28.093 28.093 0 0 0 39.802 5.192l.038.04a18.542 18.542 0 0 1 .769.813l.155.173c.24.278.471.562.697.86.038.04.073.083.104.128.107.154.214.3.321.445.131.178.261.355.39.544l.051.077c.245.362.484.736.717 1.124a33.189 33.189 0 0 1 2.97 6.652 10.812 10.812 0 0 0-3.312-1.73c-.013-.04-.046-.104-.046-.104C40.39 8.86 37.166 5.146 33.57 4.3a.441.441 0 0 0-.219-.039h-.13v8.997h-2.428V4.255c-6.53 1.188-11.935 11.819-12.677 24.807h-2.441c.535-10.444 3.816-19.182 8.53-23.8A28.056 28.056 0 0 0 5.16 24.303c2.293-2.325 5.587-4.302 9.597-5.774-.245.95-.458 1.93-.645 2.938-5.516 2.319-9.268 5.697-9.947 9.423h26.338V20.071a1.828 1.828 0 0 0-1.938-1.82c-2.12.131-4.23.399-6.316.8.271-.93.562-1.815.878-2.654a56.114 56.114 0 0 1 8.906-.704h1.35l1.453.045c1.593.06 3.182.205 4.76.433l1.098.148h.052a8.395 8.395 0 0 1 4.52 2.254l.11.104c.031.026.06.057.084.09a8.02 8.02 0 0 1 1.976 3.229c.058.18.13.426.162.556.012.05.022.11.032.167.014.09.028.177.052.22.039.071.039.136.039.207.014.05.024.102.032.154v.136a8.427 8.427 0 0 1-1.583 6.323l-.284.368-.07.09-.046.052a8.094 8.094 0 0 1-2.88 2.164h-.033c-.206.096-.42.18-.645.265l-.4.129-.246.07a8.67 8.67 0 0 1-2.28.317h-5.76v10.818a1.828 1.828 0 0 0 1.937 1.821 50.423 50.423 0 0 0 6.368-.807c-.265.936-.55 1.821-.866 2.667-2.967.47-5.966.703-8.97.698a56.126 56.126 0 0 1-8.906-.704 36.539 36.539 0 0 1-.879-2.655 49.9 49.9 0 0 0 6.317.801 1.83 1.83 0 0 0 1.937-1.821V33.214H4.145c.678 3.727 4.43 7.085 9.946 9.423.194 1.001.407 1.99.646 2.938-4.01-1.472-7.304-3.448-9.597-5.773A28.055 28.055 0 0 0 24.185 58.84c-4.714-4.618-7.995-13.356-8.531-23.8h2.441c.743 12.989 6.149 23.62 12.678 24.807v-9.002h2.467v8.99c4.585-.853 8.848-6.414 11.096-14.674a50.436 50.436 0 0 0 1.64-11.773c.63-.47 1.209-1.008 1.724-1.602.254-.306.491-.625.71-.956V32a53.413 53.413 0 0 1-1.756 13.795c-1.55 5.703-3.978 10.198-6.904 13.065a28.055 28.055 0 0 0 11.984-7.078ZM33.524 18.05v12.723h5.451c.704-.002 1.401-.13 2.06-.375 3.63-1.298 4.78-6.051 2.842-9.183a5.437 5.437 0 0 0-3.41-2.52 51.978 51.978 0 0 0-6.943-.645Z" clipRule="evenodd"></path></svg>
        </Link>

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
                    label: 'block text-sm font-medium leading-6 text-white',
                    divider: 'mt-2 bg-red-500',
                    input: 'block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                    button: 'flex w-full justify-center rounded-md bg-[#7439b8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
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
      </div>
    )
  }


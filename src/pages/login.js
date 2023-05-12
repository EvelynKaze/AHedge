import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import Link from "next/link"





export default function Example() {
    return (
      <>
      <Navbar />
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <motion.div 
            initial={{
                y:-120,
                opacity:0,
            }}
            transition={{ duration: 1.0 }}
            whileInView={{ opacity: 1, y:-70 }}
            className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
            >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
            className="mx-auto h-20 w-20"
            src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/wallethedge-logo-removebg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3dhbGxldGhlZGdlLWxvZ28tcmVtb3ZlYmcucG5nIiwiaWF0IjoxNjgzODYyMTY0LCJleHAiOjE3MTUzOTgxNjR9.CGRl6UcT7CpOgClUWeMJd6BFah44znWUCCgzBnI-ebc&t=2023-05-12T03%3A29%3A25.605Z"
            alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
        </div>
        </motion.div>

        
      </>
    )
  }


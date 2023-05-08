import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import Link from 'next/link'

const navigation = [
  { name: 'About', href: '/about', current: false },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white lg:h-20">
      {({ open }) => (
        <>
          <div className="max-w-8xl">
            <div className="relative flex h-20">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              {/* Nav Logo*/}
                <div className="flex flex-shrink-0 items-center bg-blue-600 w-64">
                  <img
                      className="lg:hidden sm:block h-8 w-64 cursor-pointer bg-white"
                      src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/wallethedge-logo-mobile-blue.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3dhbGxldGhlZGdlLWxvZ28tbW9iaWxlLWJsdWUud2VicCIsImlhdCI6MTY4MTM5NjI0MywiZXhwIjoxNzEyOTMyMjQzfQ.Bh4ylJ6QuHIVzw72bggZkdLKo8M_v5T0m53cwM9SFew&t=2023-04-13T14%3A30%3A42.585Z"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-60 lg:block ml-2 cursor-pointer"
                      src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/wallethedge-logo-white.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3dhbGxldGhlZGdlLWxvZ28td2hpdGUud2VicCIsImlhdCI6MTY4MTM5NjI5OCwiZXhwIjoxNzEyOTMyMjk4fQ.H90LyZnkd3t6cqK01gEErYxASTtPNa3eILPebCQ_xOY&t=2023-04-13T14%3A31%3A37.624Z"
                      alt="Your Company"
                    />
                </div>

              {/* Nav Items*/}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex gap-x-12 mt-5 ml-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-500 text-white' : 'text-blue-600 hover:bg-blue-300 hover:text-white',
                          'rounded-md px-3 py-2 text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-600 hover:text-gray-400 border-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>

                {/* Menu Effect button*/}
              <div className="absolute inset-y-0 right-0 items-center pr-2 mr-32 sm:static sm:inset-auto sm:ml-5 sm:pr-0 mt-6 hidden lg:block">
                <button
                  type="button"
                  className="bg-transparent p-1 text-blue-600 hover:text-gray-300 border-none"
                >
                  {/* <span className="sr-only">View notifications</span> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

              {/* Nav Items on Mobile View*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-500 text-white' : 'text-blue-600 hover:bg-blue-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
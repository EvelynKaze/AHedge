import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from '../images/logo.png'

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800 lg:h-20">
      {({ open }) => (
        <>
          <div className="max-w-8xl">
            <div className="relative flex h-20">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              {/* Nav Logo*/}
                <div className="flex flex-shrink-0 items-center bg-red-400 w-64">
                  {/* <img
                    className="block h-8 w-auto lg:hidden float-left"
                    src="https://images2.imgbox.com/01/9c/enRG3b8d_o.png"
                    alt="Your Company"
                  /> */}
                  <img
                    className="hidden h-8 w-32 lg:block ml-auto cursor-pointer"
                    src="https://images2.imgbox.com/a7/43/ImWCGEKP_o.png"
                    alt="Your Company"
                  />
                </div>

              {/* Nav Items*/}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 mt-5">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
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
                
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>

              <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mt-2">
                <button
                  type="button"
                  className="bg-gray-800 p-1 text-gray-400 hover:text-white outline-none"
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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
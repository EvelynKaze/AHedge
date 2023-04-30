import React from 'react';
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { blogData } from './blogData';
import { motion } from 'framer-motion';

const Blog = () => {
    return (
      <>
      {/* <div className="p-5 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-1">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600 capitalize">Our Expertise</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Invest With Wallethedge ?</h1>
                </div>
            </div>
        </div>
        <div className="-ml-12 lg:-mt-1 -mt-12 p-10 lg:sticky lg:top-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <a href='#' className="bg-blue-600 uppercase p-4 w-44 text-center text-white lg:ml-[28rem]">
                View all blog 
            </a>
        </div>
        </div> */}
        <section className="">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            {blogData.map((item) => (
              <motion.div
                  initial={{
                    x:80,
                    opacity:0,
                }}
                transition={{ duration: 1.1 }}
                whileInView={{ opacity: 1, x:0 }}
                className="p-4 md:w-1/3" key={item.id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden bg-blue-200">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.linkImg} alt={item.name} />
                  <div className="p-4">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <p className="mb-3 text-xs">{item.date}</p>
                    <p className="leading-relaxed mb-3 font-light text-sm">{item.info}...</p>
                    <div className="flex items-center flex-wrap ">
                      <p className="inline-flex items-center md:mb-2 lg:mb-0 text-sm font-semibold">Read More</p>
                      {/* <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <FaThumbsUp className="w-4 h-4 mr-1" />{item.likes}
                      </span>
                      <span className="inline-flex items-center leading-none text-sm">
                        <FaComment className="w-4 h-4 mr-1" />{item.comment}
                      </span> */}
                    </div>
                  </div>
                </div>
              </motion.div>
             ))}
  
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Blog
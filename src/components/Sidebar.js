import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { IoIosLogOut } from "react-icons/io"
import Image from "next/image";
import { FaExchangeAlt } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowLeft, MdOutlineCollectionsBookmark, MdKeyboardArrowRight, MdDashboardCustomize, MdOutlineCurrencyExchange } from "react-icons/md";
import Link from "next/link";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/router";
import Avatar from './Avatar'

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard/",
    icon: MdDashboardCustomize,
  },
  {
    name: "Wallet Overview",
    href: "/dashboard/",
    icon: SlWallet,
  },
  // {
  //   name: "Recent Transactions",
  //   href: "/dashboard/",
  //   icon: MdOutlineCurrencyExchange,
  // },
  // {
  //   name: "My Profile",
  //   href: "/dashboard/",
  //   icon: CgProfile,
  // },
];


const Sidebar = ({ session }) => {
  useEffect(() => {
    getProfile()
  }, [session])

  

  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [full_name, setFullName] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [btc_balance, setBtcBalance] = useState(null)
  const [usdt_balance, setUsdtBalance] = useState(null)

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, avatar_url, btc_balance, usdt_balance`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data && data.full_name) {
        setFullName(data.full_name)
        setAvatarUrl(data.avatar_url)
        setBtcBalance(data.btc_balance)
        setUsdtBalance(data.usdt_balance)

        // if (data.full_name) {
          // Redirect the user to a new page
          // router.push('/dashboard');
        // }
      }
    } catch (error) {
      console.log('Error loading user data!'),
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      // Log out the user
      await supabase.auth.signOut();
  
      // Redirect to the login page
      router.push('/login'); // Replace '/login' with the actual URL of your login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleDeposit = async () =>{
    router.push('/dashboard/deposit')
  }

  const handleWithdrawal = async () =>{
    router.push('/dashboard/withdrawal')
  }

  return (
    <div className="relative">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="w-64 h-full p-4 sidebar" data-collapse={isCollapsed}>
        <div className="w-max flex items-center gap-[0.7rem] pb-2 mb-4 border-b-2 border-[#e5e7eb]">
          <img
            width={80}
            height={80}
            className="w-14 h-14 object-contain rounded-2xl"
            src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/wallethedge-logo-removebg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3dhbGxldGhlZGdlLWxvZ28tcmVtb3ZlYmcucG5nIiwiaWF0IjoxNjgzODYyMTY0LCJleHAiOjE3MTUzOTgxNjR9.CGRl6UcT7CpOgClUWeMJd6BFah44znWUCCgzBnI-ebc&t=2023-05-12T03%3A29%3A25.605Z"
            alt="logo"
          />
          <p className="font-bold text-blue-600 text-2xl uppercase">WalletHedge</p>
        </div>
        <ul className="list-none">
          <div className="sidebar__link sidebar__name space-y-1 decoration-none flex-row mb-4 rounded-xl text-white">
            <p className="font-bold text-black">Available Balance</p>
            <p className="text-black">{btc_balance} BTC</p>
            <p className="text-black">${usdt_balance}</p>
            <div className="flex gap-5">
              <button onClick={handleDeposit} className="p-2 bg-green-500">Deposit</button>
              <button onClick={handleWithdrawal} className="p-2 bg-red-500">Withdraw</button>
            </div>
          </div>
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link text-black decoration-none flex mb-4 rounded-xl bg-[#f3f4f6]  ${
                    router.pathname === href ? "" : "text-white bg-blue-600"
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
                
              </li>
            );
          })}
          <div className="sidebar__link cursor-pointer decoration-none flex mb-4 rounded-xl text-white bg-blue-600" onClick={handleLogout}>
            <span className="sidebar__icon">
              <IoIosLogOut />
            </span>
            <span className="sidebar__name">Logout</span>
          </div>
          {/* <div className="sidebar__link decoration-none flex mb-4 rounded-xl text-white bg-blue-600"> */}
            {/* <Avatar
              url={avatar_url}
              size={40}
            />
              <span className="sidebar__name p-3">{full_name}</span> */}
          {/* </div> */}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;

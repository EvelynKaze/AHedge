import { forwardRef, useState } from "react";
import Link from "next/link";
import { CgLogOut } from "react-icons/cg";
import { useRouter } from "next/router";
import {
  AiTwotoneHome,
} from  "react-icons/ai";
import { BiCoinStack, BiMoneyWithdraw } from "react-icons/bi"
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
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


  return (
    <div ref={ref} className="fixed w-56 h-full bg-black shadow-sm z-10">
      <div className="flex justify-center mt-6 mb-14">
        <Link href="/" className="flex flex-shrink-0 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="Header_ProofGlyph__6qIxd w-10 hover:fill-[#7439b8] fill-white cursor-pointer"><path fillRule="evenodd" d="M32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0Zm19.734 51.782a28.055 28.055 0 0 0 7.107-11.967c-2.3 2.338-5.613 4.327-9.63 5.819l.103-.449c.188-.819.38-1.653.543-2.51 5.535-2.337 9.294-5.702 9.979-9.441h-9.01v-2.429h8.996c-.684-3.74-4.456-7.104-9.99-9.435l-.09-.04v-.077a10.546 10.546 0 0 0-1.7-3.229 31.318 31.318 0 0 1 7.809 3.74c.368.251.717.51 1.059.768l.051.045c.323.246.634.504.93.762l.098.085c.277.251.548.503.8.761l.058.052A28.093 28.093 0 0 0 39.802 5.192l.038.04a18.542 18.542 0 0 1 .769.813l.155.173c.24.278.471.562.697.86.038.04.073.083.104.128.107.154.214.3.321.445.131.178.261.355.39.544l.051.077c.245.362.484.736.717 1.124a33.189 33.189 0 0 1 2.97 6.652 10.812 10.812 0 0 0-3.312-1.73c-.013-.04-.046-.104-.046-.104C40.39 8.86 37.166 5.146 33.57 4.3a.441.441 0 0 0-.219-.039h-.13v8.997h-2.428V4.255c-6.53 1.188-11.935 11.819-12.677 24.807h-2.441c.535-10.444 3.816-19.182 8.53-23.8A28.056 28.056 0 0 0 5.16 24.303c2.293-2.325 5.587-4.302 9.597-5.774-.245.95-.458 1.93-.645 2.938-5.516 2.319-9.268 5.697-9.947 9.423h26.338V20.071a1.828 1.828 0 0 0-1.938-1.82c-2.12.131-4.23.399-6.316.8.271-.93.562-1.815.878-2.654a56.114 56.114 0 0 1 8.906-.704h1.35l1.453.045c1.593.06 3.182.205 4.76.433l1.098.148h.052a8.395 8.395 0 0 1 4.52 2.254l.11.104c.031.026.06.057.084.09a8.02 8.02 0 0 1 1.976 3.229c.058.18.13.426.162.556.012.05.022.11.032.167.014.09.028.177.052.22.039.071.039.136.039.207.014.05.024.102.032.154v.136a8.427 8.427 0 0 1-1.583 6.323l-.284.368-.07.09-.046.052a8.094 8.094 0 0 1-2.88 2.164h-.033c-.206.096-.42.18-.645.265l-.4.129-.246.07a8.67 8.67 0 0 1-2.28.317h-5.76v10.818a1.828 1.828 0 0 0 1.937 1.821 50.423 50.423 0 0 0 6.368-.807c-.265.936-.55 1.821-.866 2.667-2.967.47-5.966.703-8.97.698a56.126 56.126 0 0 1-8.906-.704 36.539 36.539 0 0 1-.879-2.655 49.9 49.9 0 0 0 6.317.801 1.83 1.83 0 0 0 1.937-1.821V33.214H4.145c.678 3.727 4.43 7.085 9.946 9.423.194 1.001.407 1.99.646 2.938-4.01-1.472-7.304-3.448-9.597-5.773A28.055 28.055 0 0 0 24.185 58.84c-4.714-4.618-7.995-13.356-8.531-23.8h2.441c.743 12.989 6.149 23.62 12.678 24.807v-9.002h2.467v8.99c4.585-.853 8.848-6.414 11.096-14.674a50.436 50.436 0 0 0 1.64-11.773c.63-.47 1.209-1.008 1.724-1.602.254-.306.491-.625.71-.956V32a53.413 53.413 0 0 1-1.756 13.795c-1.55 5.703-3.978 10.198-6.904 13.065a28.055 28.055 0 0 0 11.984-7.078ZM33.524 18.05v12.723h5.451c.704-.002 1.401-.13 2.06-.375 3.63-1.298 4.78-6.051 2.842-9.183a5.437 5.437 0 0 0-3.41-2.52 51.978 51.978 0 0 0-6.943-.645Z" clipRule="evenodd"></path></svg>
        </Link>
      </div>

      <div className="flex flex-col">
        <Link href="/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/dashboard"
              ? "bg-[#9D00FF]"
              : "text-gray-400 hover:bg-purple-100 hover:text-purple-500"
            }`}
          >
            <div className="mr-2">
              <AiTwotoneHome className="h-5 w-5" />
            </div>
            <div>
              <p>dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/stake">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/dashboard/stake"
                ? "bg-[#9D00FF]"
              : "text-gray-400 hover:bg-purple-100 hover:text-purple-500"
            }`}
          >
            <div className="mr-2">
              <BiCoinStack className="h-5 w-5" />
            </div>
            <div>
              <p>Stake</p>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/withdraw">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/dashboard/withdraw"
                ? "bg-[#9D00FF]"
              : "text-gray-400 hover:bg-purple-100 hover:text-purple-500"
            }`}
          >
            <div className="mr-2">
              <BiMoneyWithdraw className="h-5 w-5" />
            </div>
            <div>
              <p>Withdraw</p>
            </div>
          </div>
        </Link>
        {/* Logout button */}
        <div
          className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors text-gray-400 hover:bg-purple-100 hover:text-purple-500"
          onClick={handleLogout}
        >
          <div className="mr-2">
            <CgLogOut className="h-5 w-5" />
          </div>
          <div>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;

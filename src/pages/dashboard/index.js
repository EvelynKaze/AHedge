import { useState, useEffect, useContext } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from './../../components/Header.jsx'
// import { useSidebarContext, SidebarContext } from './../../context/SidebarContext'
import BaseLayout from './../../components/BaseLayout';
import TopCards from '../../components/TopCards.jsx'
import BarChart from '../../components/BarChart.jsx'
import RecentOrders from '../../components/RecentOrders.jsx'
import Investment from '../../components/Investment.jsx';



export default function Dashboard({ session }){
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [full_name, setFullName] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    // const { isCollapsed, toggleSidebarcollapse } = useSidebarContext;

    useEffect(() => {
      getProfile()
    }, [session])

    async function getProfile() {
      try {
        setLoading(true)
  
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`full_name, avatar_url`)
          .eq('id', user.id)
          .single()
  
        if (error && status !== 406) {
          throw error
        }
  
        if (data && data.full_name) {
          setFullName(data.full_name)
          setAvatarUrl(data.avatar_url)
        }
      } catch (error) {
        console.log('Error loading user data!'),
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

  return (
    <div className="bg-gray-100 h-screen">
      <BaseLayout>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 gap-4 bg-red-400'>
          <div className="md:col-span-3 bg-gray-100">
            <BarChart />
            <Investment />
          </div>
          <RecentOrders />
        </div>
      </BaseLayout>
    </div>
  )
}

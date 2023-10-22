import { useContext, useEffect, useState } from "react";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const TopCards = ({ session }) => {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [full_name, setFullName] = useState(null)
    const [current_value, setCurrentValue] = useState(null)
    const [total_investment, setTotalInvestment] = useState(null)
    const [roi, setRoi] = useState(null)


  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, total_investment, current_value, roi`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data && data.full_name) {
        setFullName(data.full_name)
        setTotalInvestment(data.total_investment)
        setCurrentValue(data.current_value)
        setRoi(data.roi)
      }
    } catch (error) {
      console.log('Error loading user data!'),
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-5 mb-16 px-10 py-2">
    <div className="rounded-xl bg-white h-40 shadow-2xl flex justify-between w-full border p-4">
      <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>${total_investment}</p>
            <p className='text-gray-600'>Total Staking Value</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-xl'>
            <span className='text-green-700 text-lg'>{roi}%</span>
        </p>
    </div>
    <div className="rounded-xl bg-white h-40 shadow-2xl flex justify-between w-full border p-4">
      <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>${current_value}</p>
            <p className='text-gray-600'>Current Value</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-xl'>
            <span className='text-green-700 text-lg'>{roi}%</span>
        </p>
    </div>
    <div className="rounded-xl bg-white h-40 shadow-2xl flex justify-between w-full border p-4">
      <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>{roi}%</p>
          <p className='text-gray-600'>ROI</p>
      </div>
    </div>
  </div>
  )
}

export default TopCards
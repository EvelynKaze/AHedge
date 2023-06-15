import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const Header = ({ session }) => {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [full_name, setFullName] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

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
    <div className='text-right px-4 pt-4 w-[22rem] lg:w-full'>
        <h2>Welcome Back, {full_name}</h2>
    </div>
  )
}

export default Header
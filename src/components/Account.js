import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Avatar from './Avatar'
import { useRouter } from 'next/router';


export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [full_name, setFullName] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const router = useRouter();

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

        if (data.full_name) {
          // Redirect the user to a new page
          router.push('/dashboard');
        }
      }
    } catch (error) {
      console.log('Error loading user data!'),
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ full_name, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        full_name,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      // alert('Profile completed!')/
      router.push('/dashboard');
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget w-96 h-fit p-5 m-auto">
        <Avatar
          uid={user.id}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url)
            // updateProfile({ full_name, avatar_url: url })
          }}
        />
        <div className='space-y-5 text-white mt-5'>
          <div className="space-x-16">
            <label htmlFor="email" className='font-bold'>Email</label>
            <input id="email" className='p-2 text-black rounded w-f outline outline-white' type="text" value={session.user.email} disabled />
          </div>
          <div className="space-x-7">
            <label htmlFor="username" className='font-bold'>Full Name</label>
            <input
              id="username"
              type="text"
              className='text-black p-2 rounded w-fit outline outline-white'
              value={full_name || ''}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>
      

      <div>
        <button
          className="bg-purple-900 p-3 rounded block mt-5 text-white mx-auto"
          onClick={() => 
            // setAvatarUrl(url)
            updateProfile({ full_name, avatar_url})
          }
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Complete your Registration'}
        </button>
      </div>

      <div>
        <button className="ml-auto block mt-10 outline outline-1 rounded p-2 text-purple-500" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
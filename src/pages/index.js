import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
    <h1 className='text-3xl font-bold text-center mt-14'>Welcome to WalletHedge</h1>
      <div className='flex items-center justify-center'>
        <div className="w-[80%] lg:w-1/4 m-auto border-2 shadow-xl p-5">
          {!session ? (
            <Auth providers={{}} supabaseClient={supabase} 
              appearance={{ 
                theme: ThemeSupa, 
                variables: { default: 
                  { colors: 
                    { brand: '#007FFF', brandAccent: '#00308F', },
                  }, 
                }, 
              }} 
            />
          ) : (
            <Account session={session} />
          )}
        </div>
      </div>
    </>
  )
}

export default Home
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Info from '../components/Info'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Expertise from '../components/Expertise'
import Accordion from '../components/Accordion'
import Parallax from '../components/Parallax'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Footer from '../components/Footer'


const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
    <Navbar />
    <Header />
    <Info />
    <Hero />
    <Stats />
    <Expertise />
    <Accordion />
    <Parallax />
    <Team />
    <Testimonials />
    <Blog />
    <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    <Footer />
    {/* <h1 className='text-3xl font-bold text-center mt-14'>Welcome to WalletHedge</h1>
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
      </div> */}
    </>
  )
}

export default Home
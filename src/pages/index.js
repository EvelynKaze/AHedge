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
    {/* <Parallax /> */}
    {/* <Team /> */}
    <Testimonials />
    <Blog />
    <a
        href="https://wa.me/12022704178"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    <a
        href="https://wa.me/17063151689"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    <Footer />
    </>
  )
}

export default Home
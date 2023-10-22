import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
// import Account from '../components/Account'
import Navbar from '../components/Navbar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { Button } from "../components/ui/button"
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'




const features = [
  {
    src: '/pvi.svg',
    title: 'public validation infrastructure',
    desc: 'We offer robust, open-access validation services for Proof-of-Stake blockchains, bolstering network integrity and efficiency. Our bare-metal infrastructure fosters a dependable ecosystem, enhanced by tailored client support.'
  },
  {
    src: '/es.svg',
    title: 'enterprise solutions',
    desc: 'Experience superior staking at reduced costs and gain control over marketing, fee structures, and reward distribution. Our service ensures your staking activities remain effectively concealed, providing an option for anonymity.'
  },
  {
    src: '/ecw.svg',
    title: 'ecosystem & community work',
    desc: 'Actively engaged in the blockchain community, we foster growth and knowledge for Proof-of-Stake blockchains. We invest in and support young projects, protocols, and digital public goods. We catalyst usage, demand, and ecosystem evolution.'
  },
]

const reasons = [
  {
    icon: "/gya.svg",
    text: "Grow your Assets"
  },
  {
    icon: "/epi.svg",
    text: "Earn Passive Income"
  },
  {
    icon: "/ens.svg",
    text: "Enhance Network Security"
  },
  {
    icon: "/sbe.svg",
    text: "Support Blockchain Ecosystem"
  },
]

const promises = [
  {
    title: "high security",
    desc: "The security of our customers' stake is of utmost importance to us. Through redundant infrastructure and connectivity, failover systems, 24/7 monitoring, as well as colocations at top-tier data-centers, we provide outstanding standards of security."
  },
  {
    title: "compliance",
    desc: "We provide a custom staking framework for a variety of clients and offer state-of-the-art reporting. We are fully MaRisk & MiCA compliant. We're also pursuing an ISO Certification, underlining our commitment to quality standards."
  },
  {
    title: "sustainability",
    desc: "We work to make Web 3.0 a reality. Based in Munich, Germany, we are committing ourselves to running this new generation of infrastructure as sustainable as possible."
  },
  {
    title: "bare metal infrastucture",
    desc: "Our dedicated infrastructure guarantees low latency and superior routing. By harnessing MEV-optimized nodes and emphasizing bare metal deployments, we amplify resilience and fortify network security, ensuring a distinct edge for staking."
  },
]

const accordions = [
  {
    value: "item-1",
    question: "What is a Blockchain?",
    answer: "A blockchain is an immutable, distributed ledger of transactions which is maintained by a peer-to-peer network rather than a centralized authority. It can be thought of as a distributed database that gets synchronized as soon as changes are made.Blockchain technology utilizes powerful consensus mechanisms (such as Proof-of-Stake) alongside crypto-economic incentives to verify the authenticity of transactions, secure the peer-to-peer network, and nominate nodes (special peers in the network) to generate blocks."
  },
  {
    value: "item-2",
    question: "What is Proof-of-Stake?",
    answer: "Proof-of-Stake (PoS) is a consensus algorithm used for the generation of new blocks. It requires validators (special nodes running the blockchain) to stake the network's native token in order to propose and/or validate new blocks and ultimately earn rewards. A stake may be slashed by the network and thus disincentives bad behavior."
  },
  {
    value: "item-3",
    question: "What is a Validator?",
    answer: "Validators are special nodes in PoS-networks, more precisely delegated Proof-of-Stake networks. They operate the blockchain infrastructure, propose and validate new blocks, and receive rewards (in the form of new tokens) for doing so."
  },
  {
    value: "item-4",
    question: "What is a Delegator?",
    answer: "Token holders who want to stake their tokens but do not want to run a validator node, are called delegators. They can still contribute to the networks' security and earn rewards by delegating their tokens to a validator of their choice and thus use the validator’s infrastructure instead of setting-up and maintaining their own servers. For some networks, in the event of a validator misbehaving according to the protocol, delegators of the respective validator will also be penalized by the blockchain network in proportion to their staked assets. We therefore advise you to carefully choose your validator infrastructure."
  },
  {
    value: "item-5",
    question: "What is a Node Operator?",
    answer: "Similar to validators, nope operators are special participants within blockchain networks. For the different networks across the Web 3.0 tech stack, that we work with, we differentiate our role between validator and node operator. The former allows us to accept delegations by token-holders, whereas we do not accept delegations in the network in which we function as a node operator. In these networks, we provide services to the network such as data indexing or providing off-chain data as an oracle."
  },
  {
    value: "item-6",
    question: "What is Web 3.0?",
    answer: "Web 3.0 is also referred to as the 'Internet of Value' or the 'Stateful Web' and is considered as the next evolution of the internet after Web 2.0 and Web 1.0. Web 3.0 is the result of technologies such as AI, IoT, or blockchain converging. Blockchains play an important part as they allow for an alternative to the client-server model in which data is centrally controlled and managed by trusted institutions. This has oftentimes led to privacy issues, monopolistic tendencies, hacks, and data breaches. In the current internet, it is not possible to transact value in a digital native manner. Cryptography and game theory, used in blockchain networks, allow for an alternative to the current architecture of the internet. One that is powered and secured through decentralized infrastructure. Blockchain technology provides a 'clearinghouse' and settlement layer to the internet, overcomes single points of failure, allows for digitally-native assets, as well as collaboration and coordination on a global scale. We are pioneering this new digital frontier. Join us on this exciting journey!"
  },
  {
    value: "item-7",
    question: "What is non-custodial staking?",
    answer: "Non-custodial staking refers to the process of using a validator’s infrastructure by delegating the capability to work for the blockchain and provide infrastructure to the blockchain and ultimately earn rewards by the blockchain network for doing so to someone else. This applies to every Proof-of-Stake token. Delegating tokens is not the same as sending tokens, because delegators do not transfer ownership in the token itself. The original holder remains the legal owner of the tokens at all times. Hence, the holder does not give up custody of his/her token."
  },
  {
    value: "item-8",
    question: "Why should I stake my tokens?",
    answer: "Proof-of-Stake blockchains are inflationary as new tokens are rewarded for generating and validating new blocks. Token holders who are not engaging in the staking process - either by operating as a validator themselves or by delegating their tokens to validators and thus using the validator’s infrastructure - stand to lose out on rewards and see their assets getting diluted over time."
  },
  {
    value: "item-9",
    question: "What are the risks associated with delegating my assets to Staking Facilities?",
    answer: "Since we offer non-custodial delegation services for our networks, we never have control over your assets. Rest assured, you are always in full control of your assets and can withdraw the delegation at any time. By delegating to us, your assets are virtually added to our stake. The blockchain network automatically transfers rewards to your blockchain address and we keep a small fee as a consideration for operating the infrastructure you use. We offer a transparent service and operate industry-grade architecture in order to achieve our goal to always meet the protocol’s service levels (e.g. no double signing; going offline etc.) and to avoid slashing. Please visit the subpage of the respective protocol for more details. For general information about risks refer to our terms which you accept by delegating tokens to our validator.Further risks include: key/asset mismanagement by the enduser resulting in loss of funds; protocol errors; or attacks against the network."
  },
  {
    value: "item-10",
    question: "Does Staking Facilities have access to my tokens?",
    answer: "Our validation services are non-custodial. We therefore have no access to your tokens at any point in time. It is simply impossible from a technical perspective. You maintain full control over your tokens at all times."
  },
]

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
    <Navbar />
    <main className="overflow-hidden">
        {/* Hero */}
        <div className="overflow-hidden h-[30rem]">
          <div className="relative w-full background-div">
            <div className="absolute -z-10 w-full h-full">
              <Image
                src="/ledger-banner.webp"
                alt="Product screenshot"
                className="w-[48rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-screen sm:h- md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 mt-16">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-[#9D00FF] uppercase">ENTERPRISE-GRADE WEB 3.0 INFRASTRUCTURE & SERVICES</h2>
                    <p className="mt-2 font-clash text-3xl font-bold tracking-wide text-white sm:text-6xl capitalize">
                      Powering the 
                      <br /> 
                      future of web3
                    </p>
                    <p className="mt-6 text-xl font-light leading-8 text-white">
                      Secure and performant non-custodial staking services for individuals and institutional investors.
                    </p>
                    <div className="flex space-x-3 my-5">
                      <Link href="/about"><Button variant="outline" className='text-white rounded w-28 h-12 hover:bg-white hover:text-black'>About Us</Button></Link>
                      <Link href="/login"><Button variant="outline" className='bg-white rounded w-28 h-12 hover:text-white'>Get Started</Button></Link>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="bg-black w-full py-5">
          <h2 className="uppercase text-xl leading-8 text-gray-600 text-center">Entities working with us</h2>
          <Image
            src="/middle.svg"
            className=''
            width={2432}
            height={1442}
            alt="svg"
          />
        </div>
        {/* what we do */}
        <div className="bg-black w-full py-10 px-44">
          <div className='px-36'>
            <p className="capitalize font-bold text-white text-3xl mb-9">What We do</p>
            <div className="flex space-x-12">
              {features.map((feature) => (
                <div key={feature.title} className='border-2 border-[#9D00FF] w-64 p-3 text-center rounded-xl card'>
                  <Image
                    src={feature.src}
                    className="w-20 h-20 m-auto"
                    alt=""
                    width={2432}
                    height={1442}
                  />
                  <h1 className='text-white font-bold capitalize'>{feature.title}</h1>
                  <p className='text-gray-300'>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Stake */}
            <div className='center-2 z-10' />

            <p className="capitalize font-bold text-white text-3xl my-9 mt-16">Why Stake?</p>
            <div className='flex justify-between'>
              {reasons.map((reason) => (
                <div key={reason.text} className='flex w-20'>
                  <Image
                    src={reason.icon}
                    className="w-20 h-20"
                    alt=""
                    width={2342}
                    height={1442}
                  />
                  <p className='text-white capitalize'>{reason.text}</p>
                </div>
              ))}
              
            </div>

            <div className="my-12 space-y-5">
              <h1 className="text-white font-bold text-3xl">Supported blockchain networks and projects</h1>
              <p className="text-gray-400 text-md">
                Token holders of these networks, both, retail and intstitutional can help secure the networks by staking their tokens in a non-custodial fashion via our validators. For doing so, they earn rewards in the form of the respective networks&#39; native token.
              </p>
            </div>

            <div className="mb-20">
              <p className="capitalize font-bold text-white text-3xl mb-9">What we promise</p>
              <div className="grid grid-cols-2 max-w-2xl mx-auto gap-x-40 gap-y-12">
                {promises.map((promise) => (
                  <div key={promise.title} className="w-96 text-center border-2 border-[#9D00FF] p-3 space-y-4 card rounded-xl">
                    <h2 className="text-white capitalize">{promise.title}</h2>
                    <p className="text-gray-400 text-md">
                      {promise.desc}
                    </p>
                  </div>
                ))}
              </div>
              
            </div>
              <Image
                src="/moon-bird.png"
                className="absolute w-80 right-20 h-"
                alt=""
                width={2342}
                height={1442}
              />
            <div className='center z-10' />
            <p className="font-extrabold text-white text-3xl mb-9">FAQs</p>
            <Accordion type="single" collapsible className='text-white'>
              {accordions.map((accordion) => (
                <AccordionItem key="" value={accordion.value}>
                  <AccordionTrigger>{accordion.question}</AccordionTrigger>
                  <AccordionContent>
                    {accordion.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
    <a
        href="https://wa.me/15084963395"
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
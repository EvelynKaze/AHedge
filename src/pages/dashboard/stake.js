import { Fragment, useState, useEffect, useContext } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from '../../components/Header.jsx'
import Image from "next/image"
import Layout from '../../components/BaseLayout.js';
import { Dialog, Transition } from '@headlessui/react'
import { FaBitcoin } from "react-icons/fa"
import { SiXrp } from "react-icons/si"
import { FiCopy } from "react-icons/fi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  eth,
  bitcoin,
  amc,
  ada,
  xrp,
  andy,
  ape, 
  arbitrum,
  bobo,
  bnb,
  bonk,
  brc20,
  brett,
  crodie, 
  derp,
  dixi,
  djcat,
  dog,
  doge,
  duko,
  dumb,
  enj,
  fagcat,
  friend,
  giga,
  gme,
  halt,
  hex,
  hobbes,
  hugh,
  inj,
  jenner,
  jup,
  kiki,
  lichi,
  matic,
  mew, 
  michi,
  mini,
  mother,
  nigi,
  pepe,
  pepecoin,
  popcat,
  pork,
  reca,
  Onecat,
  redo,
  sec,
  selfie,
  sharkcat,
  shib,
  slerf,
  stache,
  sol,
  speed,
  tnsr,
  tobi, 
  trump,
  trx,
  usdc,
  usdt, 
  web,
  xlm,
  wen,
  wif,
  wolf,
  zack,
  tremp,
  clipboardETH,
  clipboardXRP,
  clipboardZack,
  clipboardXLM,
  clipboardUSDT,
  clipboardADA,
  clipboardHEX,
  clipboardBNB,
  clipboardBTC,
  clipboardTRX,
  clipboardUSDC,
  clipboardINJ,
  clipboardSOL,
  clipboardBobo,
  clipboardSHIB,
  clipboardSharkcat,
  clipboardPork,
  clipboardPepe,
  clipboardGME,
  clipboardDjcat,
  clipboardWEN,
  clipboardMATIC,
  clipboardBONK,
  clipboardDOGE,
  clipboardARBITRUM,
  clipboardENJ,
  clipboardBRC,
  clipboardJUP,
  clipboardMichi,
  clipboardWif,
  clipboardBrett,
  clipboardFriend,
  clipboardTnsr,
  clipboardHobbes,
  clipboardMew,
  clipboardPopcat,
  clipboardCrodie,
  clipboardWolf,
  clipboardAndy,
  clipboardSpeed,
  clipboardLichi,
  clipboardStache,
  clipboardHalt,
  clipboardSec,
  clipboardDumb,
  clipboardAmc,
  clipboardMini,
  clipboardSelfie,
  clipboardRedo,
  clipboardReca,
  clipboardSlerf,
  clipboardGiga,
  clipboardPepeCoin,
  clipboardDuko,
  clipboardTobi,
  clipboardNigi,
  clipboardApe,
  clipboardDixi,
  clipboardOnecat,
  clipboardDerp,
  clipboardKiki,
  clipboardFagcat,
  clipboardHugh,
  clipboardWeb,
  clipboardJenner,
  clipboardMother,
  clipboardDog,
  clipboardTrump,
  clipboardTremp,
 } from "../../components/wallet-address"
 import { 
  useBTCState,
  useEthState,
  useUSDTState,
  useXRPState,
  useTrempState,
  useADAState,
  useXLMState,
  useHEXState,
  useBNBState,
  useSOLState,
  useTRXState,
  useUSDCState,
  useINJState,
  useSHIBState,
  useMATICState,
  useBONKState,
  useDOGEState,
  useARBITRUMState,
  useENJState,
  useBRCState,
  useJUPState,
  useWENState,
  useMichiState,
  useWifState,
  useBrettState,
  useFriendState,
  useTnsrState,
  useHobbesState,
  useMewState,
  usePopcatState,
  useSharkcatState,
  useCrodieState,
  useBoboState,
  usePorkState,
  useWolfState,
  useAndyState,
  useGMEState,
  useSpeedState,
  useLichiState,
  useStacheState,
  useHaltState,
  useSecState,
  useDumbState,
  useAmcState,
  useSelfieState,
  useMiniState,
  usePepeState,
  useRecaState,
  useRedoState,
  useSlerfState,
  useGigaState,
  useOnecatState,
  useDixiState,
  useApeState,
  useDjcatState,
  useNigiState,
  useTobiState,
  useDukoState,
  usePepeCoinState,
  useDerpState,
  useKikiState,
  useZackState,
  useFagcatState,
  useHughState,
  useWebState,
  useJennerState,
  useMotherState,
  useDogState,
  useTrumpState
} from "../../components/states"
import {
  depositBTC,
  depositETH,
  depositUSDT,
  depositXRP,
  depositTremp,
  depositADA,
  depositXLM,
  depositHEX,
  depositBNB,
  depositSOL,
  depositTRX,
  depositUSDC,
  depositINJ,
  depositSHIB,
  depositMATIC,
  depositBONK,
  depositDOGE,
  depositARBITRUM,
  depositENJ,
  depositBRC,
  depositJUP,
  depositWEN, 
  depositMichi,
  depositWif,
  depositBrett,
  depositFriend,
  depositTnsr,
  depositHobbes,
  depositMew,
  depositPopcat,
  depositSharkcat,
  depositCrodie,
  depositBobo,
  depositPork,
  depositWolf,
  depositAndy,
  depositGME,
  depositLichi,
  depositSpeed,
  depositStache,
  depositHalt,
  depositSec,
  depositDumb,
  depositAmc,
  depositMini,
  depositSelfie,
  depositPepe,
  depositRedo,
  depositReca,
  depositSlerf,
  depositGiga,
  depositPepeCoin,
  depositDuko,
  depositTobi,
  depositNigi,
  depositDjcat,
  depositApe,
  depositDixi,
  depositOnecat,
  depositDerp,
  depositKiki,
  depositZack,
  depositFagcat,
  depositHugh,
  depositWeb,
  depositJenner,
  depositMother,
  depositDog,
  depositTrump,
} from "../../components/deposit"



export default function Deposit({ session }){
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [full_name, setFullName] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [inputValue, setInputValue] = useState('');
    
//////////////////////// BTC ///////////////////////////////////
    const {
      deposit_btc,
      setDepositBtc,
      openBTC,
      setOpenBTC,
      handleChangeBTC,
      openBTCModal,
      closeBTCModal,
    } = useBTCState();
        
    
/////////////////////// ETH ////////////////////////////////
    const {
      deposit_eth,
      setDepositEth,
      openETH,
      setOpenETH,
      handleChangeETH,
      openETHModal,
      closeETHModal,
    } = useEthState();
    

////////////////////////// USDT /////////////////////////////////
    const {
      deposit_usdt,
      setDepositUsdt,
      openUSDT,
      setOpenUSDT,
      handleChangeUSDT,
      openUSDTModal,
      closeUSDTModal,
    } = useUSDTState();
  

    
////////////////////////// XRP /////////////////////////////////
  
  const {
    deposit_xrp,
    setDepositXRP,
    openXRP,
    setOpenXRP,
    handleChangeXRP,
    openXRPModal,
    closeXRPModal,
  } = useXRPState();

///////////////////////// ADA //////////////////////////////////
      
  const {
    deposit_ada,
    setDepositADA,
    openADA,
    setOpenADA,
    handleChangeADA,
    openADAModal,
    closeADAModal,
  } = useADAState();

     
////////////////////////// XLM /////////////////////////////////
        
  const {
    deposit_xlm,
    setDepositXLM,
    openXLM,
    setOpenXLM,
    handleChangeXLM,
    openXLMModal,
    closeXLMModal,
  } = useXLMState();

      
///////////////////////// HEX //////////////////////////////////
        
  const {
    deposit_hex,
    setDepositHEX,
    openHEX,
    setOpenHEX,
    handleChangeHEX,
    openHEXModal,
    closeHEXModal,
  } = useHEXState();

      

///////////////////////// BNB //////////////////////////////////
       
  const {
    deposit_bnb,
    setDepositBNB,
    openBNB,
    setOpenBNB,
    handleChangeBNB,
    openBNBModal,
    closeBNBModal,
  } = useBNBState();


      

////////////////////// SOL /////////////////////////////////////
        
  const {
    deposit_sol,
    setDepositSOL,
    openSOL,
    setOpenSOL,
    handleChangeSOL,
    openSOLModal,
    closeSOLModal,
  } = useSOLState();

       
////////////////////////// TRX /////////////////////////////////

  const {
    deposit_trx,
    setDepositTRX,
    openTRX,
    setOpenTRX,
    handleChangeTRX,
    openTRXModal,
    closeTRXModal,
  } = useTRXState();


        

////////////////////////// USDC /////////////////////////////////
  const {
    deposit_usdc,
    setDepositUSDC,
    openUSDC,
    setOpenUSDC,
    handleChangeUSDC,
    openUSDCModal,
    closeUSDCModal,
  } = useUSDCState();

       

//////////////////////////// INJ ///////////////////////////////
const {
  deposit_inj,
  setDepositINJ,
  openINJ,
  setOpenINJ,
  handleChangeINJ,
  openINJModal,
  closeINJModal,
} = useINJState();

        

//////////////////////////// SHIB ///////////////////////////////
        
  const {
    deposit_shib,
    setDepositSHIB,
    openSHIB,
    setOpenSHIB,
    handleChangeSHIB,
    openSHIBModal,
    closeSHIBModal,
  } = useSHIBState();


//////////////////////////// MATIC ///////////////////////////////
        
const {
  deposit_matic,
  setDepositMATIC,
  openMATIC,
  setOpenMATIC,
  handleChangeMATIC,
  openMATICModal,
  closeMATICModal,
} = useMATICState();


//////////////////////////// BONK ///////////////////////////////
const {
  deposit_bonk,
  setDepositBONK,
  openBONK,
  setOpenBONK,
  handleChangeBONK,
  openBONKModal,
  closeBONKModal,
} = useBONKState();

 
//////////////////////////// DOGE ///////////////////////////////

  const {
    deposit_doge,
    setDepositDOGE,
    openDOGE,
    setOpenDOGE,
    handleChangeDOGE,
    openDOGEModal,
    closeDOGEModal,
  } = useDOGEState();

       
//////////////////////////// ARBITRUM ///////////////////////////////

  const {
    deposit_arbitrum,
    setDepositARBITRUM,
    openARBITRUM,
    setOpenARBITRUM,
    handleChangeARBITRUM,
    openARBITRUMModal,
    closeARBITRUMModal,
  } = useARBITRUMState();


       
//////////////////////////// ENJ ///////////////////////////////
  const {
    deposit_enj,
    setDepositENJ,
    openENJ,
    setOpenENJ,
    handleChangeENJ,
    openENJModal,
    closeENJModal,
  } = useENJState();

        
//////////////////////////// BRC20 ///////////////////////////////
  const {
    deposit_brc,
    setDepositBRC,
    openBRC,
    setOpenBRC,
    handleChangeBRC,
    openBRCModal,
    closeBRCModal,
  } = useBRCState();

        
//////////////////////////// JUP ///////////////////////////////
  const {
    deposit_jup,
    setDepositJUP,
    openJUP,
    setOpenJUP,
    handleChangeJUP,
    openJUPModal,
    closeJUPModal,
  } = useJUPState();

//////////////////////////// WEN ///////////////////////////////
        const {
          deposit_wen,
          setDepositWEN,
          openWEN,
          setOpenWEN,
          handleChangeWEN,
          openWENModal,
          closeWENModal,
        } = useWENState();       
        
//////////////////////////// michi ///////////////////////////////
        
        const {
          deposit_michi,
          setDepositMichi,
          openMichi,
          setOpenMichi,
          handleChangeMichi,
          openMichiModal,
          closeMichiModal,
        } = useMichiState();

       
        
//////////////////////////// wif ///////////////////////////////
        const {
          deposit_wif,
          setDepositWif,
          openWif,
          setOpenWif,
          handleChangeWif,
          openWifModal,
          closeWifModal,
        } = useWifState();

         
        
//////////////////////////// brett ///////////////////////////////
        const {
          deposit_brett,
          setDepositBrett,
          openBrett,
          setOpenBrett,
          handleChangeBrett,
          openBrettModal,
          closeBrettModal,
        } = useBrettState();

       
        
//////////////////////////// friend ///////////////////////////////
        const {
          deposit_friend,
          setDepositFriend,
          openFriend,
          setOpenFriend,
          handleChangeFriend,
          openFriendModal,
          closeFriendModal,
        } = useFriendState();

       

//////////////////////////// tnsr ///////////////////////////////
         const {
          deposit_tnsr,
          setDepositTnsr,
          openTnsr,
          setOpenTnsr,
          handleChangeTnsr,
          openTnsrModal,
          closeTnsrModal,
        } = useTnsrState();
 
       
//////////////////////////// hobbes ///////////////////////////////
  const {
    deposit_hobbes,
    setDepositHobbes,
    openHobbes,
    setOpenHobbes,
    handleChangeHobbes,
    openHobbesModal,
    closeHobbesModal,
  } = useHobbesState();

 
//////////////////////////// mew ///////////////////////////////
           const {
            deposit_mew,
            setDepositMew,
            openMew,
            setOpenMew,
            handleChangeMew,
            openMewModal,
            closeMewModal,
          } = useMewState();


        
 //////////////////////////// popcat ///////////////////////////////
 const {
  deposit_popcat,
  setDepositPopcat,
  openPopcat,
  setOpenPopcat,
  handleChangePopcat,
  openPopcatModal,
  closePopcatModal,
} = usePopcatState();


 //////////////////////////// sharkcat ///////////////////////////////
 
 const {
  deposit_sharkcat,
  setDepositSharkcat,
  openSharkcat,
  setOpenSharkcat,
  handleChangeSharkcat,
  openSharkcatModal,
  closeSharkcatModal,
} = useSharkcatState();


//////////////////////////// crodie ///////////////////////////////
 const {
  deposit_crodie,
  setDepositCrodie,
  openCrodie,
  setOpenCrodie,
  handleChangeCrodie,
  openCrodieModal,
  closeCrodieModal,
} = useCrodieState();



  
 //////////////////////////// bobo ///////////////////////////////
 
 const {
  deposit_bobo,
  setDepositBobo,
  openBobo,
  setOpenBobo,
  handleChangeBobo,
  openBoboModal,
  closeBoboModal,
} = useBoboState();

//////////////////////////// pork ///////////////////////////////
 
 const {
  deposit_pork,
  setDepositPork,
  openPork,
  setOpenPork,
  handleChangePork,
  openPorkModal,
  closePorkModal,
} = usePorkState();

 

  
 //////////////////////////// wolf ///////////////////////////////
 const {
  deposit_wolf,
  setDepositWolf,
  openWolf,
  setOpenWolf,
  handleChangeWolf,
  openWolfModal,
  closeWolfModal,
} = useWolfState();


 //////////////////////////// andy ///////////////////////////////
 const {
  deposit_andy,
  setDepositAndy,
  openAndy,
  setOpenAndy,
  handleChangeAndy,
  openAndyModal,
  closeAndyModal,
} = useAndyState();

 

  
 //////////////////////////// gme ///////////////////////////////
 const {
  deposit_gme,
  setDepositGME,
  openGME,
  setOpenGME,
  handleChangeGME,
  openGMEModal,
  closeGMEModal,
} = useGMEState();


//////////////////////////// speed ///////////////////////////////

 const {
  deposit_speed,
  setDepositSpeed,
  openSpeed,
  setOpenSpeed,
  handleChangeSpeed,
  openSpeedModal,
  closeSpeedModal,
} = useSpeedState();
  
//////////////////////////// lichi ///////////////////////////////

 const {
  deposit_lichi,
  setDepositLichi,
  openLichi,
  setOpenLichi,
  handleChangeLichi,
  openLichiModal,
  closeLichiModal,
} = useLichiState();

//////////////////////////// stache ///////////////////////////////
 const {
  deposit_stache,
  setDepositStache,
  openStache,
  setOpenStache,
  handleChangeStache,
  openStacheModal,
  closeStacheModal,
} = useStacheState(); 
  
//////////////////////////// halt ///////////////////////////////

 const {
  deposit_halt,
  setDepositHalt,
  openHalt,
  setOpenHalt,
  handleChangeHalt,
  openHaltModal,
  closeHaltModal,
} = useHaltState();

  
//////////////////////////// sec ///////////////////////////////
 
 const {
  deposit_sec,
  setDepositSec,
  openSec,
  setOpenSec,
  handleChangeSec,
  openSecModal,
  closeSecModal,
} = useSecState();

 
//////////////////////////// dumb ///////////////////////////////

 const {
  deposit_dumb,
  setDepositDumb,
  openDumb,
  setOpenDumb,
  handleChangeDumb,
  openDumbModal,
  closeDumbModal,
} = useDumbState();
  
//////////////////////////// amc ///////////////////////////////
 
 const {
  deposit_amc,
  setDepositAmc,
  openAmc,
  setOpenAmc,
  handleChangeAmc,
  openAmcModal,
  closeAmcModal,
} = useAmcState(); 
  
//////////////////////////// mini ///////////////////////////////

 const {
  deposit_mini,
  setDepositMini,
  openMini,
  setOpenMini,
  handleChangeMini,
  openMiniModal,
  closeMiniModal,
} = useMiniState();



  
 //////////////////////////// $selfie ///////////////////////////////
 
 const {
  deposit_selfie,
  setDepositSelfie,
  openSelfie,
  setOpenSelfie,
  handleChangeSelfie,
  openSelfieModal,
  closeSelfieModal,
} = useSelfieState();
  
 //////////////////////////// $pepe ///////////////////////////////
 
 const {
  deposit_pepe,
  setDepositPepe,
  openPepe,
  setOpenPepe,
  handleChangePepe,
  openPepeModal,
  closePepeModal,
} = usePepeState();
 
 //////////////////////////// $redo  ///////////////////////////////
 
 const {
  deposit_redo,
  setDepositRedo,
  openRedo,
  setOpenRedo,
  handleChangeRedo,
  openRedoModal,
  closeRedoModal,
} = useRedoState();


  
 //////////////////////////// $reca  ///////////////////////////////
 
 const {
  deposit_reca,
  setDepositReca,
  openReca,
  setOpenReca,
  handleChangeReca,
  openRecaModal,
  closeRecaModal,
} = useRecaState();
  
 //////////////////////////// $slerf  ///////////////////////////////
 
 const {
  deposit_slerf,
  setDepositSlerf,
  openSlerf,
  setOpenSlerf,
  handleChangeSlerf,
  openSlerfModal,
  closeSlerfModal,
} = useSlerfState();

 //////////////////////////// $giga  ///////////////////////////////
 
 const {
  deposit_giga,
  setDepositGiga,
  openGiga,
  setOpenGiga,
  handleChangeGiga,
  openGigaModal,
  closeGigaModal,
} = useGigaState();
  
 //////////////////////////// $pepeCoin(erc20)  ///////////////////////////////
 
 const {
  deposit_pepecoin,
  setDepositPepeCoin,
  openPepeCoin,
  setOpenPepeCoin,
  handleChangePepeCoin,
  openPepeCoinModal,
  closePepeCoinModal,
} = usePepeCoinState();

//////////////////////////// $duko  ///////////////////////////////
 
   const {
    deposit_duko,
    setDepositDuko,
    openDuko,
    setOpenDuko,
    handleChangeDuko,
    openDukoModal,
    closeDukoModal,
  } = useDukoState();

//////////////////////////// $tobi  ///////////////////////////////

    const {
      deposit_tobi,
      setDepositTobi,
      openTobi,
      setOpenTobi,
      handleChangeTobi,
      openTobiModal,
      closeTobiModal,
    } = useTobiState();
  
//////////////////////////// $nigi  ///////////////////////////////
  
  const {
    deposit_nigi,
    setDepositNigi,
    openNigi,
    setOpenNigi,
    handleChangeNigi,
    openNigiModal,
    closeNigiModal,
  } = useNigiState();
 
  
//////////////////////////// $djcat  ///////////////////////////////

     const {
      deposit_djcat,
      setDepositDjcat,
      openDjcat,
      setOpenDjcat,
      handleChangeDjcat,
      openDjcatModal,
      closeDjcatModal,
    } = useDjcatState();


//////////////////////////// $ape  ///////////////////////////////

  const {
    deposit_ape,
    setDepositApe,
    openApe,
    setOpenApe,
    handleChangeApe,
    openApeModal,
    closeApeModal,
  } = useApeState(); 
     
//////////////////////////// $dixi  ///////////////////////////////
   
   const {
    deposit_dixi,
    setDepositDixi,
    openDixi,
    setOpenDixi,
    handleChangeDixi,
    openDixiModal,
    closeDixiModal,
  } = useDixiState();
  
   
//////////////////////////// $1cat  ///////////////////////////////
   
   const {
    deposit_onecat,
    setDepositOnecat,
    openOnecat,
    setOpenOnecat,
    handleChangeOnecat,
    openOnecatModal,
    closeOnecatModal,
  } = useOnecatState();
  
  
        
//////////////////////////// $derp  ///////////////////////////////
   
   const {
    deposit_derp,
    setDepositDerp,
    openDerp,
    setOpenDerp,
    handleChangeDerp,
    openDerpModal,
    closeDerpModal,
  } = useDerpState();
  
  

//////////////////////////// $kiki  ///////////////////////////////
   
    const {
      deposit_kiki,
      setDepositKiki,
      openKiki,
      setOpenKiki,
      handleChangeKiki,
      openKikiModal,
      closeKikiModal,
    } = useKikiState();
  

        
//////////////////////////// $zack  ///////////////////////////////
   
    const {
      deposit_zack,
      setDepositZack,
      openZack,
      setOpenZack,
      handleChangeZack,
      openZackModal,
      closeZackModal,
    } = useZackState();
  
  
        
//////////////////////////// $fagcat  ///////////////////////////////
   
    const {
      deposit_fagcat,
      setDepositFagcat,
      openFagcat,
      setOpenFagcat,
      handleChangeFagcat,
      openFagcatModal,
      closeFagcatModal,
    } = useFagcatState();
  
//////////////////////////// $hugh  ///////////////////////////////
   
    const {
      deposit_hugh,
      setDepositHugh,
      openHugh,
      setOpenHugh,
      handleChangeHugh,
      openHughModal,
      closeHughModal,
    } = useHughState();
          
//////////////////////////// $web  ///////////////////////////////
   
    const {
      deposit_web,
      setDepositWeb,
      openWeb,
      setOpenWeb,
      handleChangeWeb,
      openWebModal,
      closeWebModal,
    } = useWebState();
     
//////////////////////////// $JENNER  ///////////////////////////////

    const {
      deposit_jenner,
      setDepositJenner,
      openJenner,
      setOpenJenner,
      handleChangeJenner,
      openJennerModal,
      closeJennerModal,
    } = useJennerState();
          
//////////////////////////// $Mother  ///////////////////////////////
   
    const {
      deposit_mother,
      setDepositMother,
      openMother,
      setOpenMother,
      handleChangeMother,
      openMotherModal,
      closeMotherModal,
    } = useMotherState();
  

//////////////////////////// $DOG  ///////////////////////////////
   
    const {
      deposit_dog,
      setDepositDog,
      openDog,
      setOpenDog,
      handleChangeDog,
      openDogModal,
      closeDogModal,
    } = useDogState();
  
 
//////////////////////////// $TRUMP  ///////////////////////////////

    const {
      deposit_trump,
      setDepositTrump,
      openTrump,
      setOpenTrump,
      handleChangeTrump,
      openTrumpModal,
      closeTrumpModal,
    } = useTrumpState();
   
////////////////////////// TREMP /////////////////////////////////
  
  const {
    deposit_tremp,
    setDepositTremp,
    openTremp,
    setOpenTremp,
    handleChangeTremp,
    openTrempModal,
    closeTrempModal,
  } = useTrempState();

////////////////////////////////////////////////////////////////////
   

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

    const tokens = [
      { name: 'BTC', modal: openBTCModal },
      { name: 'ETH', modal: openETHModal },
      { name: 'USDT', modal: openUSDTModal },
      { name: 'XRP', modal: openXRPModal },
      { name: 'ADA', modal: openADAModal },
      { name: 'XLM', modal: openXLMModal },
      { name: 'HEX', modal: openHEXModal },
      { name: 'BNB', modal: openBNBModal },
      { name: 'SOL', modal: openSOLModal },
      { name: 'TRX', modal: openTRXModal },
      { name: 'USDC', modal: openUSDCModal },
      { name: 'INJ', modal: openINJModal },
      { name: 'SHIB', modal: openSHIBModal },
      { name: 'MATIC', modal: openMATICModal },
      { name: 'BONK', modal: openBONKModal },
      { name: 'DOGE', modal: openDOGEModal },
      { name: 'ARBITRUM', modal: openARBITRUMModal },
      { name: 'ENJ', modal: openENJModal },
      { name: 'BRC20', modal: openBRCModal },
      { name: 'JUP', modal: openJUPModal },
      { name: 'WEN', modal: openWENModal },
      { name: '$Michi', modal: openMichiModal },
      { name: '$Wif', modal: openWifModal },
      { name: '$Brett', modal: openBrettModal },
      { name: '$Friend', modal: openFriendModal },
      { name: '$Tnsr', modal: openTnsrModal },
      { name: '$Hobbes', modal: openHobbesModal },
      { name: '$Mew', modal: openMewModal },
      { name: '$Popcat', modal: openPopcatModal },
      { name: '$Sharkcat', modal: openSharkcatModal },
      { name: '$Crodie', modal: openCrodieModal },
      { name: '$Bobo', modal: openBoboModal },
      { name: '$Pork', modal: openPorkModal },
      { name: '$Wolf', modal: openWolfModal },
      { name: '$gme', modal: openGMEModal },
      { name: '$Speed', modal: openSpeedModal },
      { name: '$Lichi', modal: openLichiModal },
      { name: '$Stache', modal: openStacheModal },
      { name: '$Halt', modal: openHaltModal },
      { name: '$Sec', modal: openSecModal },
      { name: '$Dumb', modal: openDumbModal },
      { name: '$Amc', modal: openAmcModal },
      { name: '$Selfie', modal: openSelfieModal },
      { name: '$Mini', modal: openMiniModal },
      { name: '$PEPE(erc20)', modal: openPepeModal },
      { name: '$Redo', modal: openRedoModal },
      { name: '$Reca', modal: openRecaModal },
      { name: '$Slerf', modal: openSlerfModal },
      { name: '$giga', modal: openGigaModal },
      { name: '$pepecoin(erc20)', modal: openPepeCoinModal },
      { name: '$Duko', modal: openDukoModal },
      { name: '$Tobi', modal: openTobiModal },
      { name: '$Nigi', modal: openNigiModal },
      { name: '$Djcat', modal: openDjcatModal },
      { name: '$Ape', modal: openApeModal },
      { name: '$Dixi', modal: openDixiModal },
      { name: '$1cat', modal: openOnecatModal },
      { name: '$Derp', modal: openDerpModal },
      { name: '$Kiki', modal: openKikiModal },
      { name: '$Zack', modal: openZackModal },
      { name: '$Fagcat', modal: openFagcatModal },
      { name: '$Hugh', modal: openHughModal },
      { name: '$Web', modal: openWebModal },
      { name: '$Jenner', modal: openJennerModal },
      { name: '$Mother', modal: openMotherModal },
      { name: '$Dog', modal: openDogModal },
      { name: '$Trump', modal: openTrumpModal },
      { name: '$Tremp', modal: openTrempModal },
    ];
    
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTokens = tokens.filter(token =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-gray-100 overflow-hidden">
      <Layout>
        <Header />
        <div className="w-full px-4 py-16">
          <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          <div className="space-y-2 mb-4 text-center">
            <h2 className="font-bold text-2xl">Deposit tokens to cold stake</h2>
            {/* <h4>via <span className="font-semibold">Crypto Wallet</span></h4> */}
          </div>
          <div className="mx-auto flex justify-center items-center w-full max-w-2xl p-2">
            <input
              type="text"
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="mb-4 p-2 rounded-3xl border-2 border-[#7439b8] ring-[#7439b8] w-96 h-12"
            />
          </div>
          
      <div className="mx-auto w-full max-w-2xl gap-x-4 gap-y-1 grid grid-cols-2">
        {filteredTokens.map((token, index) => (
            <div
              key={index}
              onClick={token.modal}
              className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300 cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none"
            >
              <p className="font-medium">{token.name}</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <CheckIcon className="h-6 w-6" />
              </div>
            </div>
          ))}
        
        
        
        
        
      </div>
        </div>
        {/* BTC */}
        <Transition appear show={openBTC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBTCModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BTC</span> to the address below</p>
                      {/* <img
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/btc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2J0Yy5wbmciLCJpYXQiOjE2ODY1MDUwMTUsImV4cCI6MTcxODA0MTAxNX0.94s3OmMWL2nc_AvjaRjto7UmVV3wUm2VJQdzigfa-X4&t=2023-06-11T17%3A36%3A54.349Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">Bitcoin Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bitcoin}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBTC}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_btc || inputValue}
                          onChange={handleChangeBTC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBTC({supabase, deposit_btc, user, setLoading, setOpenBTC})}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay Bitcoin'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBTCModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BTC amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* XRP */}
        <Transition appear show={openXRP} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeXRPModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}XRP</span> to the address below</p>
                      {/* <img
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/btc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2J0Yy5wbmciLCJpYXQiOjE2ODY1MDUwMTUsImV4cCI6MTcxODA0MTAxNX0.94s3OmMWL2nc_AvjaRjto7UmVV3wUm2VJQdzigfa-X4&t=2023-06-11T17%3A36%3A54.349Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">Xrp Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <SiXrp className='mt-1' />
                          <p>{xrp}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardXRP}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_xrp || inputValue}
                          onChange={handleChangeXRP}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositXRP({ supabase, user, setLoading, setOpenXRP, deposit_xrp })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay XRP'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeXRPModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other XRP amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ETH */}
        <Transition appear show={openETH} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeETHModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{" "}ETH</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/eth.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2V0aC5wbmciLCJpYXQiOjE2ODY1NzQ5OTYsImV4cCI6MTcxODExMDk5Nn0.0WDT7NmyBmGCzz3DWwdsGbeClV9kAxiJYmnZu2dZU1c&t=2023-06-12T13%3A03%3A15.330Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ETH Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{eth}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardETH}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_eth || inputValue}
                          onChange={handleChangeETH}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositETH({ supabase, deposit_eth, user, setLoading, setOpenETH })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ETH'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeETHModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ETH amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ADA */}
        <Transition appear show={openADA} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeADAModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}ADA</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/eth.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2V0aC5wbmciLCJpYXQiOjE2ODY1NzQ5OTYsImV4cCI6MTcxODExMDk5Nn0.0WDT7NmyBmGCzz3DWwdsGbeClV9kAxiJYmnZu2dZU1c&t=2023-06-12T13%3A03%3A15.330Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ADA Address</p>
                      <div onClick={clipboardADA} className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{ada}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardADA}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_ada || inputValue}
                          onChange={handleChangeADA}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositADA({ supabase, user, setLoading, setOpenADA, deposit_ada })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ADA'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeADAModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ADA amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* USDT */}
        <Transition appear show={openUSDT} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeUSDTModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}USDT</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">USDT Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{usdt}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardUSDT}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_usdt || inputValue}
                          onChange={handleChangeUSDT}
                          required
                        />
                        
                      </div>
                    </div>
                    
                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositUSDT({ supabase, deposit_usdt, user, setLoading, setOpenUSDT })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay USDT'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeUSDTModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other USDT amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* XLM */}
        <Transition appear show={openXLM} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeXLMModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}XLM</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">XLM Address</p>
                      <div onClick={clipboardXLM} className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{xlm}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardXLM}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_xlm || inputValue}
                          onChange={handleChangeXLM}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositXLM({ supabase, deposit_xlm, user, setLoading, setOpenXLM })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay XLM'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeXLMModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other XLM amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* HEX */}
        <Transition appear show={openHEX} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeHEXModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}HEX</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">HEX Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{hex}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardHEX}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_hex || inputValue}
                          onChange={handleChangeHEX}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositHEX({ supabase, user, setLoading, setOpenHEX, deposit_hex })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay HEX'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeHEXModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other HEX amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* BNB */}
        <Transition appear show={openBNB} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBNBModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BNB</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">BNB Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bnb}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBNB}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_bnb || inputValue}
                          onChange={handleChangeBNB}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBNB({ supabase, user, setLoading, setOpenBNB, deposit_bnb })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay BNB'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBNBModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BNB amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* SOL */}
        <Transition appear show={openSOL} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSOLModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}SOL</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">SOL Address</p>
                      <div onClick={clipboardSOL} className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{sol}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSOL}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_sol || inputValue}
                          onChange={handleChangeSOL}
                          required
                        />
                        
                      </div>
                    </div>


                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSOL({ supabase, user, setLoading, setOpenSOL, deposit_sol })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay SOL'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSOLModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other SOL amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* TRX */}
        <Transition appear show={openTRX} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeTRXModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}TRX</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">TRX Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{trx}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardTRX}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_trx || inputValue}
                          onChange={handleChangeTRX}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositTRX({ supabase, user, setLoading, setOpenTRX, deposit_trx })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay TRX'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeTRXModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other TRX amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* USDC */}
        <Transition appear show={openUSDC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeUSDCModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}USDC</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">USDC Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{usdc}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardUSDC}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_usdc || inputValue}
                          onChange={handleChangeUSDC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositUSDC({ supabase, user, setLoading, setOpenUSDC, deposit_usdc })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay USDC'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeUSDCModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other USDC amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* INJ */}
        <Transition appear show={openINJ} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeINJModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}INJ</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">INJ Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{inj}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardINJ}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_inj || inputValue}
                          onChange={handleChangeINJ}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositINJ({ supabase, user, setLoading, setOpenINJ, deposit_inj })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay INJ'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeINJModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other INJ amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* SHIB */}
        <Transition appear show={openSHIB} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSHIBModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}SHIB</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">SHIB Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{shib}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSHIB}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_shib || inputValue}
                          onChange={handleChangeSHIB}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSHIB({ supabase, user, setLoading, setOpenSHIB, deposit_shib })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay SHIB'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSHIBModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other SHIB amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* MATIC */}
        <Transition appear show={openMATIC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMATICModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}MATIC</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">MATIC Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{matic}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMATIC}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_matic || inputValue}
                          onChange={handleChangeMATIC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMATIC({ supabase, user, setLoading, setOpenMATIC, deposit_matic })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay MATIC'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMATICModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other MATIC amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* BONK */}
        <Transition appear show={openBONK} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBONKModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BONK</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">BONK Address</p>
                      <div onClick={clipboardBONK} className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bonk}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBONK}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_bonk || inputValue}
                          onChange={handleChangeBONK}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBONK({ supabase, user, setLoading, setOpenBONK, deposit_bonk })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay BONK'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBONKModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BONK amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* DOGE */}
        <Transition appear show={openDOGE} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDOGEModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}DOGE</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">DOGE Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{doge}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDOGE}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_doge || inputValue}
                          onChange={handleChangeDOGE}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDOGE({ supabase, user, setLoading, setOpenDOGE, deposit_doge })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay DOGE'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDOGEModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other DOGE amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ARBITRUM */}
        <Transition appear show={openARBITRUM} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeARBITRUMModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}ARBITRUM</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ARBITRUM Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{arbitrum}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardARBITRUM}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_arbitrum || inputValue}
                          onChange={handleChangeARBITRUM}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositARBITRUM({ supabase, user, setLoading, setOpenARBITRUM, deposit_arbitrum })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ARBITRUM'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeARBITRUMModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ARBITRUM amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* ENJ */}
        <Transition appear show={openENJ} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeENJModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}ENJ</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">ENJ Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{enj}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardENJ}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_enj || inputValue}
                          onChange={handleChangeENJ}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositENJ({ supabase, user, setLoading, setOpenENJ, deposit_enj })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay ENJ'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeENJModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other ENJ amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* BRC20 */}
        <Transition appear show={openBRC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBRCModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}BRC</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">BRC Address</p>
                      <div onClick={clipboardBRC} className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{brc20}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBRC}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_brc || inputValue}
                          onChange={handleChangeBRC}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBRC({ supabase, user, setLoading, setOpenBRC, deposit_brc })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay BRC20'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBRCModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other BRC20 amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* JUP */}
        <Transition appear show={openJUP} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeJUPModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}JUP</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">JUP Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{jup}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardJUP}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_jup || inputValue}
                          onChange={handleChangeJUP}
                          required
                        />
                        
                      </div>
                    </div>


                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositJUP({ supabase, user, setLoading, setOpenJUP, deposit_jup })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay JUP'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeJUPModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other JUP amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* WEN */}
        <Transition appear show={openWEN} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWENModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}WEN</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">WEN Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{wen}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardWEN}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_wen || inputValue}
                          onChange={handleChangeWEN}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositWEN({ supabase, user, setLoading, setOpenWEN, deposit_wen })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay WEN'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeWENModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other WEN amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Michi */}
        <Transition appear show={openMichi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMichiModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$michi</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$michi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{michi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMichi}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_michi || inputValue}
                          onChange={handleChangeMichi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMichi({ supabase, user, setLoading, setOpenMichi, deposit_michi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $michi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMichiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $michi amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Wif */}
        <Transition appear show={openWif} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWifModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$wif</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$wif Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{wif}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardWif}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_wif || inputValue}
                          onChange={handleChangeWif}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositWif({ supabase, user, setLoading, setOpenWif, deposit_wif })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $wif'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeWifModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $wif amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Brett */}
        <Transition appear show={openBrett} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBrettModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$brett</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$brett Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{brett}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBrett}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_brett || inputValue}
                          onChange={handleChangeBrett}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBrett({ supabase, user, setLoading, setOpenBrett, deposit_brett })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $brett'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeBrettModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $brett amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* friend */}
        <Transition appear show={openFriend} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeFriendModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$friend</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$friend Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{friend}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardFriend}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_friend || inputValue}
                          onChange={handleChangeFriend}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositFriend({ supabase, user, setLoading, setOpenFriend, deposit_friend })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $friend'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeFriendModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $friend amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* tnsr */}
        <Transition appear show={openTnsr} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeTnsrModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$tnsr</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$tnsr Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{tnsr}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardTnsr}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_tnsr || inputValue}
                          onChange={handleChangeTnsr}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositTnsr({ supabase, user, setLoading, setOpenTnsr, deposit_tnsr })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $tnsr'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeTnsrModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $tnsr amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Hobbes */}
        <Transition appear show={openHobbes} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeHobbesModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$hobbes</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$hobbes Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{hobbes}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardHobbes}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_hobbes || inputValue}
                          onChange={handleChangeHobbes}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositHobbes({ supabase, user, setLoading, setOpenHobbes, deposit_hobbes })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $hobbes'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeHobbesModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $hobbes amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Mew */}
        <Transition appear show={openMew} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMewModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$mew</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$mew Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{mew}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMew}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_mew || inputValue}
                          onChange={handleChangeMew}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMew({ supabase, user, setLoading, setOpenMew, deposit_mew })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $mew'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMewModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $mew amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Popcat */}
        <Transition appear show={openPopcat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePopcatModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$popcat</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$popcat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{popcat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPopcat}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_popcat || inputValue}
                          onChange={handleChangePopcat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositPopcat({ supabase, user, setLoading, setOpenPopcat, deposit_popcat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $popcat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePopcatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $popcat amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Sharkcat */}
        <Transition appear show={openSharkcat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSharkcatModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$sharkcat</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$sharkcat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{sharkcat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSharkcat}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_sharkcat || inputValue}
                          onChange={handleChangeSharkcat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSharkcat({ supabase, user, setLoading, setOpenSharkcat, deposit_sharkcat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $sharkcat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSharkcatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $sharkcat amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Crodie */}
        <Transition appear show={openCrodie} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeCrodieModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$crodie</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$crodie Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{crodie}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardCrodie}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_crodie || inputValue}
                          onChange={handleChangeCrodie}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositCrodie({ supabase, user, setLoading, setOpenCrodie, deposit_crodie })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $crodie'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeCrodieModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $crodie amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
         {/* Bobo */}
         <Transition appear show={openBobo} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeBoboModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$bobo</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$bobo Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{bobo}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardBobo}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_bobo || inputValue}
                          onChange={handleChangeBobo}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositBobo({ supabase, user, setLoading, setOpenBobo, deposit_bobo })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $bobo'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeCrodieModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $bobo amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
         {/* Pork */}
         <Transition appear show={openPork} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePorkModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$pork</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$pork Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{pork}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPork}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_pork || inputValue}
                          onChange={handleChangePork}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositPork({ supabase, user, setLoading, setOpenPork, deposit_pork })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $pork'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePorkModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $pork amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
         {/* Wolf */}
         <Transition appear show={openWolf} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWolfModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$wolf</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$wolf Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{crodie}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardWolf}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_wolf || inputValue}
                          onChange={handleChangeWolf}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositWolf({ supabase, user, setLoading, setOpenWolf, deposit_wolf })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $wolf'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeWolfModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $wolf amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
         {/* Andy */}
         <Transition appear show={openAndy} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeAndyModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$andy</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$andy Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{andy}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardAndy}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_andy || inputValue}
                          onChange={handleChangeAndy}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositAndy({ supabase, user, setLoading, setOpenAndy, deposit_andy })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $andy'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeAndyModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $andy amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* GME */}
        <Transition appear show={openGME} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeGMEModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$GME</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$GME Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{gme}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardGME}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_gme || inputValue}
                          onChange={handleChangeGME}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositGME({ supabase, user, setLoading, setOpenGME, deposit_gme })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $GME'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeGMEModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $GME amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* speed */}
        <Transition appear show={openSpeed} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSpeedModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$speed</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$speed Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{speed}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSpeed}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_speed || inputValue}
                          onChange={handleChangeSpeed}
                          required
                        />
                        
                      </div>
                    </div>
{/* supabase, user, setLoading, setOpenBTC */}
                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSpeed({ supabase, user, setLoading, setOpenSpeed, deposit_speed })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $speed'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSpeedModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $speed amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Lichi */}
        <Transition appear show={openLichi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeLichiModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$lichi</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$lichi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{lichi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardLichi}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_lichi || inputValue}
                          onChange={handleChangeLichi}
                          required
                        />
                        
                      </div>
                    </div>
{/* supabase, user, setLoading, setOpenBTC */}
                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositLichi({ supabase, user, setLoading, setOpenLichi, deposit_lichi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $lichi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeLichiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $lichi amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* stache */}
        <Transition appear show={openStache} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeStacheModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$stache</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$stache Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{stache}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardStache}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_stache || inputValue}
                          onChange={handleChangeStache}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositStache({ supabase, user, setLoading, setOpenStache, deposit_stache })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $stache'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeStacheModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $stache amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Halt */}
        <Transition appear show={openHalt} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeHaltModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$halt</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$halt Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{halt}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardHalt}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_halt || inputValue}
                          onChange={handleChangeHalt}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositHalt({ supabase, user, setLoading, setOpenHalt, deposit_halt })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $halt'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeHaltModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $halt amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Sec */}
        <Transition appear show={openSec} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSecModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$sec</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$sec Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{sec}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSec}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_sec || inputValue}
                          onChange={handleChangeSec}
                          required
                        />
                        
                      </div>
                    </div>
{/* supabase, user, setLoading, setOpenBTC */}
                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSec({ supabase, user, setLoading, setOpenSec, deposit_sec })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $sec'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSecModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $sec amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* dumb */}
        <Transition appear show={openDumb} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDumbModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$dumb</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$dumb Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{dumb}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDumb}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_dumb || inputValue}
                          onChange={handleChangeDumb}
                          required
                        />
                        
                      </div>
                    </div>
{/* supabase, user, setLoading, setOpenBTC */}
                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDumb({ supabase, user, setLoading, setOpenDumb, deposit_dumb })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $dumb'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDumbModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $dumb amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Amc */}
        <Transition appear show={openAmc} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeAmcModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$amc</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$amc Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{amc}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardAmc}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_amc || inputValue}
                          onChange={handleChangeAmc}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositAmc({ supabase, user, setLoading, setOpenAmc, deposit_amc })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $amc'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeAmcModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $amc amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Selfie */}
        <Transition appear show={openSelfie} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSelfieModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$selfie</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$selfie Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{selfie}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSelfie}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_selfie || inputValue}
                          onChange={handleChangeSelfie}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSelfie({ supabase, user, setLoading, setOpenSelfie, deposit_selfie })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $selfie'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSelfieModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $selfie amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Mini */}
        <Transition appear show={openMini} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeMiniModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$mini</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$mini Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{andy}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardMini}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_mini || inputValue}
                          onChange={handleChangeMini}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositMini({ supabase, user, setLoading, setOpenMini, deposit_mini })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $mini'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMiniModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $mini amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Pepe */}
        <Transition appear show={openPepe} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePepeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$pepe</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$pepe Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{pepe}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPepe}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_pepe || inputValue}
                          onChange={handleChangePepe}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositPepe({ supabase, user, setLoading, setOpenPepe, deposit_pepe })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $pepe'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePepeModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $pepe amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Reca */}
        <Transition appear show={openReca} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeRecaModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$reca</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$reca Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{reca}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardReca}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_reca || inputValue}
                          onChange={handleChangeReca}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositReca({ supabase, user, setLoading, setOpenReca, deposit_reca })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $reca'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeRecaModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $reca amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Redo */}
        <Transition appear show={openRedo} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeRedoModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$redo</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$redo Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{reca}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardRedo}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_redo || inputValue}
                          onChange={handleChangeRedo}
                          required
                        />
                        
                      </div>
                    </div>
                    {/* supabase, user, setLoading, setOpenPepe,  */}
                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositRedo({ supabase, user, setLoading, setOpenRedo, deposit_redo })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $redo'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeRedoModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $redo amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Slerf */}
        <Transition appear show={openSlerf} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSlerfModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$slerf</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$slerf Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{slerf}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardSlerf}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_slerf || inputValue}
                          onChange={handleChangeSlerf}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositSlerf({ supabase, user, setLoading, setOpenSlerf, deposit_slerf })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $slerf'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeSlerfModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $slerf amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Giga */}
        <Transition appear show={openGiga} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeGigaModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$giga</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$giga Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{reca}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardGiga}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_giga || inputValue}
                          onChange={handleChangeGiga}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositGiga({ supabase, user, setLoading, setOpenGiga, deposit_giga })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $giga'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeGigaModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $giga amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
         {/* $1cat */}
         <Transition appear show={openOnecat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeOnecatModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$1cat</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$1cat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{Onecat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardOnecat}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_onecat || inputValue}
                          onChange={handleChangeOnecat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositOnecat({ supabase, user, setLoading, setOpenOnecat, deposit_onecat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $1cat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeOnecatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $1cat amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* $dixi */}
        <Transition appear show={openDixi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDixiModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Dixi</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Dixi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{dixi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDixi}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_dixi || inputValue}
                          onChange={handleChangeDixi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDixi({ supabase, user, setLoading, setOpenDixi, deposit_dixi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay Dixi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDixiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other Dixi amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* $Ape */}
        <Transition appear show={openApe} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeApeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$ape</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Ape Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{ape}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardApe}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_ape || inputValue}
                          onChange={handleChangeApe}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositApe({ supabase, user, setLoading, setOpenApe, deposit_ape })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Ape'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeApeModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other Ape amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Djcat */}
        <Transition appear show={openDjcat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDjcatModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Djcat</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Djcat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{djcat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDjcat}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_djcat || inputValue}
                          onChange={handleChangeDjcat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDjcat({ supabase, user, setLoading, setOpenDjcat, deposit_djcat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Djcat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDjcatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $Djcat amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Nigi */}
        <Transition appear show={openNigi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeNigiModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Nigi</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Nigi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{nigi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardNigi}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_nigi || inputValue}
                          onChange={handleChangeNigi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositNigi({ supabase, user, setLoading, setOpenNigi, deposit_nigi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Nigi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeNigiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $Nigi amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Tobi */}
        <Transition appear show={openTobi} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeTobiModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$tobi</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$tobi Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{tobi}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardTobi}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_tobi || inputValue}
                          onChange={handleChangeTobi}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositTobi({ supabase, user, setLoading, setOpenTobi, deposit_tobi })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Tobi'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeTobiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $tobi amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* duko */}
        <Transition appear show={openDuko} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDukoModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Duko</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Duko Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{duko}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDuko}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_duko || inputValue}
                          onChange={handleChangeDuko}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDuko({ supabase, user, setLoading, setOpenDuko, deposit_duko })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $Duko'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDukoModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $Duko amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* pepeCoin */}
        <Transition appear show={openPepeCoin} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePepeCoinModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$pepecoin(erc20)</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$pepecoin(erc20) Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{pepecoin}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardPepeCoin}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_pepecoin || inputValue}
                          onChange={handleChangePepeCoin}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositPepeCoin({ supabase, user, setLoading, setOpenPepeCoin, deposit_pepecoin })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $PepeCoin'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closePepeCoinModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $pepeCoin amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* derp */}
        <Transition appear show={openDerp} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDerpModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$derp</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$derp Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{derp}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDerp}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_derp || inputValue}
                          onChange={handleChangeDerp}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDerp({ supabase, user, setLoading, setOpenDerp, deposit_derp })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $derp'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDerpModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $derp amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* kiki */}
        <Transition appear show={openKiki} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeKikiModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$kiki</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$kiki Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{kiki}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardKiki}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_kiki || inputValue}
                          onChange={handleChangeKiki}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositKiki({ supabase, user, setLoading, setOpenKiki, deposit_kiki })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $kiki'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeKikiModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $kiki amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* zack */}
        <Transition appear show={openZack} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeZackModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$zack</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$zack Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{zack}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardZack}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_zack || inputValue}
                          onChange={handleChangeZack}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositZack({ supabase, user, setLoading, setOpenZack, deposit_zack })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $zack'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeZackModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $zack amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* fagcat */}
        <Transition appear show={openFagcat} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeFagcatModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Fagcat</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Fagcat Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{fagcat}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardFagcat}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_fagcat || inputValue}
                          onChange={handleChangeFagcat}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositFagcat({ supabase, user, setLoading, setOpenFagcat, deposit_fagcat })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $fagcat'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeFagcatModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $fagcat amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* hugh */}
        <Transition appear show={openHugh} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeHughModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Hugh</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$Hugh Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{hugh}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardHugh}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_hugh || inputValue}
                          onChange={handleChangeHugh}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositHugh({ supabase, user, setLoading, setOpenHugh, deposit_hugh })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $hugh'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeHughModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $hugh amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* web */}
        <Transition appear show={openWeb} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWebModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$Web</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$web Address</p>
                      <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{web}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardWeb}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_web || inputValue}
                          onChange={handleChangeWeb}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositWeb({ supabase, user, setLoading, setOpenWeb, deposit_web })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $web'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeWebModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $web amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* jenner */}
        <Transition appear show={openJenner} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeJennerModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center font-bold leading-6 text-gray-600"
                  >
                    Make Your Payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$jenner</span> to the address below</p>
                    {/* <img 
                      className="w-1/3 m-auto"
                      src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                    /> */}
                    <p className="text-center uppercase text-sm text-gray-400 my-3">$jenner Address</p>
                    <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                      <span className="flex space-x-2">
                        <FaBitcoin className='mt-1' />
                        <p>{jenner}</p>
                      </span>
                      <FiCopy
                        onClick={clipboardJenner}
                        title="click to copy"
                        className='text-blue-400 cursor-pointer'
                      />
                    </div>
                    <div  className="flex justify-between p-1 my-2">
                      <span className='text-base antialiased font-normal'>Enter Amount:</span>
                      <input
                        type="number"
                        id="depositBtc"
                        name="depositBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={deposit_jenner || inputValue}
                        onChange={handleChangeJenner}
                        required
                      />
                      
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="space-y-2">
                    <button
                        type="submit"
                        onClick={() => depositJenner({ supabase, user, setLoading, setOpenJenner, deposit_jenner })}
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        disabled={loading}
                      >
                      {loading ? 'Loading ...' : 'Pay $jenner'}
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeJennerModal}
                    >
                      Pay Later
                    </button>
                  </div>

                  {/* INFO */}
                  <div className="mt-3">
                    <div className="text-rose-500 flex space-x-2">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Be aware that this order will be cancelled if you send any other $jenner amount.</p>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Account will be credited once we received your payment.</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>
        {/* mother */}
        <Transition appear show={openMother} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeMotherModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center font-bold leading-6 text-gray-600"
                  >
                    Make Your Payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$mother</span> to the address below</p>
                    {/* <img 
                      className="w-1/3 m-auto"
                      src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                    /> */}
                    <p className="text-center uppercase text-sm text-gray-400 my-3">$mother Address</p>
                    <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                      <span className="flex space-x-2">
                        <FaBitcoin className='mt-1' />
                        <p>{mother}</p>
                      </span>
                      <FiCopy
                        onClick={clipboardMother}
                        title="click to copy"
                        className='text-blue-400 cursor-pointer'
                      />
                    </div>
                    <div  className="flex justify-between p-1 my-2">
                      <span className='text-base antialiased font-normal'>Enter Amount:</span>
                      <input
                        type="number"
                        id="depositBtc"
                        name="depositBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={deposit_mother || inputValue}
                        onChange={handleChangeMother}
                        required
                      />
                      
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="space-y-2">
                    <button
                        type="submit"
                        onClick={() => depositMother({ supabase, user, setLoading, setOpenMother, deposit_mother })}
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        disabled={loading}
                      >
                      {loading ? 'Loading ...' : 'Pay $mother'}
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeMotherModal}
                    >
                      Pay Later
                    </button>
                  </div>

                  {/* INFO */}
                  <div className="mt-3">
                    <div className="text-rose-500 flex space-x-2">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Be aware that this order will be cancelled if you send any other $mother amount.</p>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Account will be credited once we received your payment.</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>
        {/* dog */}
        <Transition appear show={openDog} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeDogModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md md:max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center font-bold leading-6 text-gray-600"
                    >
                      Make Your Payment
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$dog</span> to the address below</p>
                      {/* <img 
                        className="w-1/3 m-auto"
                        src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                      /> */}
                      <p className="text-center uppercase text-sm text-gray-400 my-3">$dog Address</p>
                      <div onClick={clipboardDog} className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                        <span className="flex space-x-2">
                          <FaBitcoin className='mt-1' />
                          <p>{dog}</p>
                        </span>
                        <FiCopy
                          onClick={clipboardDog}
                          title="click to copy"
                          className='text-blue-400 cursor-pointer'
                        />
                      </div>
                      <div  className="flex justify-between p-1 my-2">
                        <span className='text-base antialiased font-normal'>Enter Amount:</span>
                        <input
                          type="number"
                          id="depositBtc"
                          name="depositBtc"
                          placeholder="0.03"
                          className="h-8 w-64 rounded-lg"
                          value={deposit_dog || inputValue}
                          onChange={handleChangeDog}
                          required
                        />
                        
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-2">
                      <button
                          type="submit"
                          onClick={() => depositDog({ supabase, user, setLoading, setOpenDog, deposit_dog })}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          disabled={loading}
                        >
                        {loading ? 'Loading ...' : 'Pay $dog'}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeDogModal}
                      >
                        Pay Later
                      </button>
                    </div>

                    {/* INFO */}
                    <div className="mt-3">
                      <div className="text-rose-500 flex space-x-2">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Be aware that this order will be cancelled if you send any other $dog amount.</p>
                      </div>
                      <div className="flex space-x-2 text-gray-500">
                        <AiOutlineInfoCircle />
                        <p className='text-xs'>Account will be credited once we received your payment.</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* gme */}
        
        {/* trump */}
        <Transition appear show={openTrump} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeTrumpModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center font-bold leading-6 text-gray-600"
                  >
                    Make Your Payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$trump</span> to the address below</p>
                    {/* <img 
                      className="w-1/3 m-auto"
                      src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                    /> */}
                    <p className="text-center uppercase text-sm text-gray-400 my-3">$trump Address</p>
                    <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                      <span className="flex space-x-2">
                        <FaBitcoin className='mt-1' />
                        <p>{trump}</p>
                      </span>
                      <FiCopy
                        onClick={clipboardTrump}
                        title="click to copy"
                        className='text-blue-400 cursor-pointer'
                      />
                    </div>
                    <div  className="flex justify-between p-1 my-2">
                      <span className='text-base antialiased font-normal'>Enter Amount:</span>
                      <input
                        type="number"
                        id="depositBtc"
                        name="depositBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={deposit_trump || inputValue}
                        onChange={handleChangeTrump}
                        required
                      />
                      
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="space-y-2">
                    <button
                        type="submit"
                        onClick={() => depositTrump({ supabase, user, setLoading, setOpenTrump, deposit_trump })}
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        disabled={loading}
                      >
                      {loading ? 'Loading ...' : 'Pay $trump'}
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeTrumpModal}
                    >
                      Pay Later
                    </button>
                  </div>

                  {/* INFO */}
                  <div className="mt-3">
                    <div className="text-rose-500 flex space-x-2">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Be aware that this order will be cancelled if you send any other $trump amount.</p>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Account will be credited once we received your payment.</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>
        {/* tremp */}
        <Transition appear show={openTremp} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeTrempModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center font-bold leading-6 text-gray-600"
                  >
                    Make Your Payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-center">Complete transaction by sending the exact amount of <span className="font-bold">{inputValue}{" "}$tremp</span> to the address below</p>
                    {/* <img 
                      className="w-1/3 m-auto"
                      src="https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars/usdt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZHQucG5nIiwiaWF0IjoxNjg2NTc2NzQ2LCJleHAiOjE3MTgxMTI3NDZ9.Wb2-YuO351IVf8XQGa-FCz7lrMWrSanD-g6ZESJCm94&t=2023-06-12T13%3A32%3A25.710Z"
                    /> */}
                    <p className="text-center uppercase text-sm text-gray-400 my-3">$tremp Address</p>
                    <div className="text-sm font-medium text-gray-500 border rounded-lg flex justify-between p-2 px-3">
                      <span className="flex space-x-2">
                        <FaBitcoin className='mt-1' />
                        <p>{tremp}</p>
                      </span>
                      <FiCopy
                        onClick={clipboardTremp}
                        title="click to copy"
                        className='text-blue-400 cursor-pointer'
                      />
                    </div>
                    <div  className="flex justify-between p-1 my-2">
                      <span className='text-base antialiased font-normal'>Enter Amount:</span>
                      <input
                        type="number"
                        id="depositBtc"
                        name="depositBtc"
                        placeholder="0.03"
                        className="h-8 w-64 rounded-lg"
                        value={deposit_tremp || inputValue}
                        onChange={handleChangeTremp}
                        required
                      />
                      
                    </div>
                  </div>
                  {/* { supabase, user, setLoading, setOpenXRP, deposit_xrp } */}
                  {/* BUTTONS */}
                  <div className="space-y-2">
                    <button
                        type="submit"
                        onClick={() => depositTremp({ supabase, user, setLoading, setOpenTremp, deposit_tremp })}
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        disabled={loading}
                      >
                      {loading ? 'Loading ...' : 'Pay $tremp'}
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeTrempModal}
                    >
                      Pay Later
                    </button>
                  </div>

                  {/* INFO */}
                  <div className="mt-3">
                    <div className="text-rose-500 flex space-x-2">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Be aware that this order will be cancelled if you send any other $tremp amount.</p>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                      <AiOutlineInfoCircle />
                      <p className='text-xs'>Account will be credited once we received your payment.</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>
      </Layout>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

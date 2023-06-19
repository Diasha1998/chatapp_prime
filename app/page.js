// "use client"
// import {socketclient} from './socketclient'
// import ChatApp from './ChatApp.js';
import Topheader from './UIcomponents/Topheader'
import Secondheader from './UIcomponents/Secondheader'
import LeftChatlist from './UIcomponents/LeftChatlist'

function Home(){
  return(
    <div>
      <Topheader/>
      <Secondheader/>
      <LeftChatlist/>
    </div>
  )
}

export default Home;
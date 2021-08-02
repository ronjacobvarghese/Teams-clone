import {useState} from 'react';
import "./App.css";
import Header from './components/header-components/Header';
import Navbar from './components/navbar-components/Navbar';
import TeamsPP from './components/PrimaryPage/TeamsPP';
import ProfileDropList from './components/droplist-components/ProfileDropList'
import SettingsDropList from './components/droplist-components/SettingsDropList';
import TeamsSP from './components/SecondaryPage/TeamsSP'

function App() {

  const [openSettings,setOpenSettings]= useState(false)
  const [openProfile,setOpenProfile] = useState(false)

  function openSettingsHandler(){
    if(openProfile){
      setOpenProfile(false)
    }
    setOpenSettings(!openSettings)
  }
  function openProfileHandler(){
    if(openSettings){
      setOpenSettings(false)
    }
    setOpenProfile(!openProfile)
  }
  return (
    <div className="App">
      <Header openingSettings={openSettingsHandler} openingProfile={openProfileHandler} no={1+2}/>
      <div className="Body">
      {openSettings && <SettingsDropList/>}
      {openProfile && <ProfileDropList/>}
        <Navbar/>
        <TeamsPP/>
        <TeamsSP/>
      </div>  
    </div>
  );
}

export default App;

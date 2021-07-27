import { useState } from "react";
import "./App.css";
import Header from "./components/header-components/Header";
import Navbar from "./components/navbar-components/Navbar";
import TeamsPP from "./components/PrimaryPage/TeamsPP";
import ProfileDropList from "./components/droplist-components/ProfileDropList";
import ProfileModal from "./components/modal-components/ProfileModal";
import SettingsDropList from "./components/droplist-components/SettingsDropList";
import TeamsSP from "./components/SecondaryPage/TeamsSP";

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  function openSettingsHandler() {
    if (openProfile) {
      setOpenProfile(false);
    }
    setOpenSettings(!openSettings);
  }
  function openProfileHandler() {
    if (openSettings) {
      setOpenSettings(false);
    }
    setOpenProfile(!openProfile);
  }
  function openProfileModalHandler() {
    setOpenProfileModal(!openProfileModal);
  }
  return (
    <div className="App">
        <Header
          openingSettings={openSettingsHandler}
          openingProfile={openProfileHandler}
        />
        <div className="content-wrapper">
          {openSettings && (
            <SettingsDropList/>
          )}
          {openProfile && <ProfileDropList  onProfileClick={openProfileModalHandler} />}
          <Navbar />
          <TeamsPP />
          <TeamsSP />
        </div>
        {openProfileModal && <ProfileModal onProfileClose={openProfileModalHandler}/>}
    </div>
  );
}

export default App;

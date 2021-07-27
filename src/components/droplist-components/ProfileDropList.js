import styles from "./profiledroplist.module.css";
import DropList from "../common-components/DropList";
import { BsBookmark } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import { IoMdOpen } from "react-icons/io";
import { IconContext } from "react-icons";

function ProfileDropList(props) {
  return (
    <DropList className={styles.profile_droplist}>
      <li className={styles.profile_profile}>
        <div className={styles.profile_button} onClick={props.onProfileClick}>
          <div className={styles.profile_image}></div>
        </div>
        <div className={styles.profile_name}>
          <span className={styles.profile_span} style={{color:"white"}}>
            Ron Jacob Varghese-AM.EN.U4CSE19346
          </span>
          <span className={styles.profile_span} style={{ color: "orange" }}>
            ronjacobvarghese@am.students.amrita.edu
          </span>
        </div>
      </li>
      <IconContext.Provider value={{size:"1.2em", paddingTop:"10px" ,color:"white"}}>
      <li className={styles.profile_divider}></li>
      <BsBookmark className={styles.iconA} />
      <button className={styles.settings_button}>Saved</button>
      <li className={styles.profile_divider}></li>
      <RiProfileLine className={styles.iconB} />
      <button className={styles.settings_button}>Manage account</button>
      <button className={styles.settings_button}>Teams for personal use</button>
      <IoMdOpen className={styles.iconC} />
      <li className={styles.profile_divider}></li>
      <button className={styles.signout_button}>Sign out</button>
      </IconContext.Provider>
    </DropList>
  );
}

export default ProfileDropList;

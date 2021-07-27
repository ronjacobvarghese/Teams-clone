import styles from "./profilemodal.module.css";
import { GrFormClose } from "react-icons/gr";

function ProfileModal(props) {
  return (
    <div className={styles.profilemodal_wrapper}>
      <div className={styles.profilemodal_background}></div>
      <div className={styles.profilemodal_modalcontainer}>
        <div className={styles.profilemodal_modal}>
          <div className={styles.profilemodal_label}>
            <label>Change your profile picture</label>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                paddingTop: "5px",
              }}
            >
              It'll be updated for all of your Microsoft 365 apps
            </label>
            <button className={styles.profilemodal_closeicon} onClick={props.onProfileClose}>
              <GrFormClose size="2em" color="#242424" />
            </button>
          </div>
          <div className={styles.profilemodal_body}>
            <div className={styles.profilemodal_uploadlabel}>
              <label className={styles.profilemodal_uploadlabel_label}>
                Upload picture
              </label>
              <label className={styles.profilemodal_uploadlabel_label}>
                Remove picture
              </label>
            </div>
            <div className={styles.profilemodal_profilepic}></div>
          </div>
          <div className={styles.profilemodal_bottom}>
            <button className={styles.profilemodal_button} onClick={props.onProfileClose}>close</button>
            <button className={styles.profilemodal_button}>Save</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;

import DropList from '../common-components/DropList';
import styles from './settingsdroplist.module.css';
import { IoSettingsOutline } from 'react-icons/io5';

function SettingsDropList(){
    return(
        <DropList className={styles.settings_droplist}>
            <IoSettingsOutline className={styles.settings_icon}/>
            <button className={`${styles.settings_li} ${styles.Button}`}>Settings</button>
            <button className={styles.settings_divider}></button>
            <button className={styles.Button}>Keyboard shortcuts</button>
            <button className={styles.Button}>About</button>
            <button className={styles.Button}>Download the desktop app</button>
            <button className={styles.Button}>Download the mobile app</button>
        </DropList>
    )
}

export default SettingsDropList;
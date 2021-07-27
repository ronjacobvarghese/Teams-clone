import DropList from '../common-components/DropList';
import styles from './settingsdroplist.module.css';
import { IoSettingsOutline } from 'react-icons/io5';

function SettingsDropList(props){
    return(
        <DropList className={styles.settings_droplist}>
            <IoSettingsOutline className={styles.settings_icon}/>
            <button className={`${styles.settings_button} ${styles.settings_li}`} onClick={props.onSettingsClick}>Settings</button>
            <div className={styles.settings_divider}></div>
            <button className={styles.settings_button}>Keyboard shortcuts</button>
            <button className={styles.settings_button}>About</button>
            <button className={styles.settings_button}>Download the desktop app</button>
            <button className={styles.settings_button}>Download the mobile app</button>
        </DropList>
    )
}

export default SettingsDropList;
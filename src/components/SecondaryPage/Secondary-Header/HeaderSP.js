import styles from './headersp.module.css';
import SecondaryItem from '../UI/SecondaryItem'
function  HeaderSP(props){
    return(
        <div className={styles.header_container}>
            <div className={styles.header_header}>
                <div className={styles.header_header_icon}></div>
                <div className={styles.header_header_label}>{props.title}</div>
            </div>
            <div className={styles.header_navbar}>
                <SecondaryItem title="Posts"/>
                <SecondaryItem title="Files"/>
                <SecondaryItem title="Assignments"/>
            </div>
            <div className={styles.header_end}>
                <div className={styles.header_meet}> Meet</div>
            </div>
        </div>
    );
}

export default HeaderSP;


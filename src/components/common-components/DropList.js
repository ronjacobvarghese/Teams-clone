import styles from './droplist.module.css';

function DropList(props){
    return(
        <ul className={`${styles.droplist_wrapper} ${props.className}`}>
            {props.children}
        </ul>
    );
}

export default DropList
;
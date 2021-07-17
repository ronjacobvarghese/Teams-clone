import styles from './secondaryitem.module.css';

function SecondaryItem(props){
    return(
        <div className={styles.secondaryitem_wrapper}>{props.title}</div>
    );
}

export default SecondaryItem;
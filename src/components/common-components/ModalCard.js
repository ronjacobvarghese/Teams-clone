import styles from './modalcard.module.css';
function ModalCard(props){
    const classes = styles.modal_wrapper + props.className
    return<div className={classes}>{props.children}</div>;
}

export default ModalCard;
import ron from './modalcard.module.css';
function ModalCard(props){
    const classes = ron.modal_wrapper + props.className
    return<div className={classes}>{props.children}</div>;
}
ron.modal_modal_wrapper
export default ModalCard;
import styles from './chatitem.module.css';
import {Fragment} from 'react'
function ChatItem(){
    return(
        <Fragment>
            <div class={`${styles.item-wrapper} ${props.className}`}>
            </div>
        </Fragment>
    );

}

export default ChatItem;
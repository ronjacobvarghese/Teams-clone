import React from 'react';
import styles from './chatspp.module.css';
import PrimaryCard from './UI/PrimaryCard';


function ChatsPP(){
    return (
        <PrimaryCard>
             <div className={styles.ChatsPPheader}>
                <label>Chats</label>
            </div>
        </PrimaryCard>
        
    );
}

export default ChatsPP;
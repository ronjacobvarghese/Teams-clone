import styles from './teamsposts.module.css';
import {Fragment} from 'react';


function TeamsPosts(){
    return (
        <Fragment>
            <div className={styles.post_wrapper}>
                <div className={styles.chats_wrapper}>

                </div>
                <div className={styles.text_wrapper}>
                    <button className={styles.text_button}>
                        New conversation
                    </button>
                </div>
            </div>
        </Fragment>
    );
}

export default TeamsPosts;
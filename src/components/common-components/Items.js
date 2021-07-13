import { useState } from 'react';
import './items.css'
function Items(props){
    const [onHover ,setOnHover]= useState(false)
    const classes="Items-wrapper "+props.className;
    return(
        <div className={classes}onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <div className="Icon-wrapper">
                <i className={`${!onHover ? 'active':''}`}>{props.iconA}</i>
                <i className={`${!onHover ? '':'active'}`}>{props.iconB}</i>
            </div>
            <label>{props.title}</label>
        </div>
    );
}
export default Items;
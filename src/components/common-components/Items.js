import { useState } from 'react';
import './items.css'
function Items(props){
    const [onHover ,setOnHover]= useState(false)
    return(
        <div className={"Items-wrapper "+props.className} onClick={props.onClick} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <div className="Icon-wrapper">
                <i className={`${!onHover ? 'active':''}`}>{props.iconA}</i>
                <i className={`${!onHover ? '':'active'}`}>{props.iconB}</i>
            </div>
            <label>{props.title}</label>
        </div>
    );
}
export default Items;

// props={className:"NavItem"
//         iconA:...
//         iconB:...
//         title:"Activity"
//     }
import React from "react";
import { useState } from "react";
import './post-status-filter.css';
import Button from 'react-bootstrap/Button';
export const PostStatusFilter = ({filter , onFilterSelect}) =>{

    const [buttons, setButton] = useState([{nameButton:'all' , label:'Все',},{nameButton:'like' , label:'Понравилось'}]);


    const buttonsArr = buttons.map(({nameButton,label})=>{
            const active = filter === nameButton;
            const classButton = active ? 'btn-info': 'btn-outline-info'
            return (
                <Button key={nameButton}  variant ={`btn ${classButton}`} onClick={()=> onFilterSelect(nameButton)}>{label}</Button>
            )
    })

    return(
        <div className="btn-group">
            {buttonsArr}

        </div>

        )
}
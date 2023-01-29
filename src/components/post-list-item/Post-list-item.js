import React, { useEffect } from "react";
import { useState } from 'react';
import './post-list-item.css';



export const PostListItem = ({label , important =false , onDelete ,like , onToggleLike , onToggleImportant} ) =>{

   /*  const [listLabel, setListLabel] = useState();

    const [listImportant , setListImportant] = useState()

    const [listLike, setListLike] = useState(false);
    
    useEffect(()=>{
        setListLabel(label);
        setListImportant(important);

    },[]);

    const onImportant = () =>{
            setListImportant(!listImportant);
       
    }
    const onLike = () =>{
        setListLike(!listLike);
   
    } */
    

    let classNameS = "app-list-item d-flex justify-content-between";
    
    if(important){
        classNameS += ' important';
    }

    if(like){
        classNameS += ' like';
    }

    return (
            <div className={classNameS}>
                <span className="app-list-item-label" onClick={onToggleLike}>
                    {label}
                </span>
            <div className="d-flex p-2 justify-content-center align-items-center">
                <button className="btn-star btn-sm" type = "button" onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button type = "button" className="btn-trash btn-sm" onClick={onDelete}>
                <i class="bi bi-trash-fill"></i>
                </button>
                <i class="fa fa-heart" ></i> 
            </div>
            </div>
        )
}
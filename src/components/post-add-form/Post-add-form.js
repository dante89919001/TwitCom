import React from "react";
import { useState , useRef } from "react";
import './post-add-form.css';



export const PostAddForm = ({onAdd}) =>{

    const inputEl = useRef(null);
    const [text, setText] = useState('');
    const onValueChange = (e) => {
        setText(inputEl.current.value);
        
    };
    

    return(
            <form className="bottom-panel d-flex"  onSubmit={(e)=>{e.preventDefault(); inputEl.current.value = '';}}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    className="form-control new-post-label"
                    ref={inputEl}
                    
                   onChange={onValueChange}
                />
                <button
                    type ="submit"
                    onClick={()=>onAdd(`${text}`)}
                    className="btn btn-outline-secondary">
                Добавить
                </button>
            </form>
        
    )
}
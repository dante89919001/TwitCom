import React from "react";
import { useRef, useState } from "react";
import './search-panel.css';


export const SearchPanel = ({currentFindText , onUpdateSearch}) => {

    const inputEl = useRef(null);
    const [text, setText] = useState('');
    const UpdateSearch = () => {
       setText(inputEl.current.value)
       onUpdateSearch(inputEl.current.value)
    };

    return (
            <input

                className="form-control search-input"
                type= "text"
                placeholder="Поиск по записям"
                onChange={UpdateSearch}
                ref={inputEl}
            />

    )
    
};
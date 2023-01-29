import React from "react";
import { PostListItem } from "../post-list-item/Post-list-item";
import './post-list.css';
import ListGroup from 'react-bootstrap/ListGroup';


export const PostList =({posts, onDelete ,onToggleLike , onToggleImportant}) =>{

    const elements = posts.map((item) =>{
        const {id ,  ...itemProps} = item;
        return(
             <li key={item.id} className="list-group-item">
                <PostListItem  {...itemProps}
                    onDelete ={()=>{onDelete(id)}}
                    onToggleImportant ={()=>onToggleImportant(id)}
                    onToggleLike ={() => onToggleLike(id)}/>
             </li>   
        )
    })


    return(
          <ListGroup  as="ul"className="app-list list-group">
            {elements}
          </ListGroup>  
        )
}
import './App.css';
import React, { useState  , useEffect} from "react";
import { AppHeader } from '../app-header/App-header';
import { SearchPanel } from '../search-panel/Search-panel';
import { PostStatusFilter } from '../post-status-filter/Post-status-filter';
import { PostList } from '../post-list/Post-list';
import { PostAddForm } from '../post-add-form/Post-add-form';


function App() {


  const [data , setData] = useState([
    {label:'Going to learn React',
    important : true ,like:true, id: 1},
    {label:'That is so good',
    important : false ,like:false, id: 2},
    {label:'I need a break...',
    important : false ,like:false, id: 3},
])

const [maxId, setMaxId] = useState(4);


    
const deletaItem = (id) =>{
  const newArr = [];
  data.forEach((item)=>{
    if(item.id != id){
      newArr.push(item);
    }
  });

  setData(newArr);
  setMaxId((prev) => prev - 1);
}
const addItem = (text) =>{
  const newArr = [...data];
  const newItem = {
    label:text,
    important :false,
    id: maxId
  }
  newArr.push(newItem)
  setData(newArr);
  setMaxId((prev) => prev +1);
}


const onToggleImportant = (id) =>{
  setData(Toggle('important' , id));
}

const Toggle = (changedItem, id) =>{
  const newArr = [...data];
  newArr.forEach((item)=>{
    if(item.id === id){
      item[changedItem] = !item[changedItem];
    }
  });
  return newArr;
}

const onToggleLike = (id) =>{
  setData(Toggle('like' , id));
}

const [liked, setLiked]
 = useState(0);

const [allPosts, setAllPosts] = useState(0)



const [currentFindText, setCurrentFindText ] = useState('');
const [filter, setFilter] = useState('all');

const [visiblePosts , setVisiblePosts] = useState(data)


const onUpdateSearch = (text) =>{
  setCurrentFindText(text);
}

useEffect(()=>{
  const i = data.filter(item => item.like).length;
  setLiked(i);
  setAllPosts(data.length)
},[data])

useEffect(()=>{
  let newArr2 = [];
  if(filter ==='like'){
    newArr2 = data.filter((item)=> item.like)
  }else{
    newArr2 = data.filter((item)=>item);
  }
 

  if(currentFindText.length === ''){
    setVisiblePosts(newArr2);
    
  }else{
    const newArr = newArr2.filter((item) =>{
      return item.label.indexOf(currentFindText) > -1
  })
  setVisiblePosts(newArr);
  }
  

},[currentFindText ,data , filter])


const onFilterSelect = (text) =>{
  setFilter(text);
}
  return (
    <div className="App">
        <AppHeader liked ={liked} allPosts = {allPosts}/>
        <div className='searc-panel d-flex'>
            <SearchPanel onUpdateSearch= {onUpdateSearch}/>
            <PostStatusFilter filter ={filter}
            onFilterSelect = {onFilterSelect}/>
          </div>
          <PostList posts ={visiblePosts} onDelete = {deletaItem} onToggleImportant = {onToggleImportant} 
          onToggleLike = {onToggleLike}/>
          <PostAddForm onAdd = {addItem}/>
    </div>
  );
}

export default App;

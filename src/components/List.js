
import React, {useRef, useState} from 'react';
import {memo} from "react";
import listElem from "./ListElem";
import ListElem from "./ListElem";

// const List = ({obj}) => {
const List = memo(function List({obj}){
    const [isClick,setIsClick] = useState(true)

    const handleClick = ()=>{
        setIsClick(!isClick)
    }

    const Reverse = ()=>    obj.reverse();



    return (
        <div>
            <button onClick={handleClick}>qweqweqwe</button>


            {Reverse().map(i=>{

             return(  <ListElem key={i.id} values={i}/>)
            })}


        </div>
    );
})

export default  List;
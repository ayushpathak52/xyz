import React, { useState } from 'react'

const Ui = ({curElem}) => {
 const[data , setData] = useState(false);

 const showhide = ()=>{
  setData(!data);
 }
  return (
   <>
   <div className='Accordion'>
    <div className='question'></div>
    <button onClick={showhide}>{ data ? '-' : '+'} </button>
    <h1>{curElem.question}</h1>
   </div>

   <p>{  data ? curElem.answer : ""}</p>
   </>
  )
}

export default Ui
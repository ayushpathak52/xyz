import React from 'react'
import { data } from './data'
import Ui from './Ui'
const Accordion  = () => {
  return (
    <>
    <div>Accordion </div>

    {data.map((curElem , index)=>{
            return <Ui curElem = {curElem}/>

            
           
    })};
    
    </>
    
  )
}

export default Accordion 
import React from 'react'
import Car from './Car'
function Garage (){
   const items = ['Apple','Banana','cherry'];

    return(
        <>
        <h1>Who lives in my Garage</h1>
<ul>
    {items.map((item,index)=>{
        <li key={index}>{index}</li>
    })}
</ul>
        </>
    );
}
export default Garage;
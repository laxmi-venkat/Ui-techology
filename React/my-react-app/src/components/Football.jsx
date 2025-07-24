import react from 'react';
 function Football (){
    const shoot =()=>{
        alert("great Shot");
    }
    return(
        <button onClick={shoot}>Take the shot</button>
    )
 }
 export default Football;
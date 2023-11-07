import { useState , useEffect } from "react";

function Timer(){
const [second,setseconds]= useState(10);

const targetDate = new Date();
const targeSecond = targetDate.getTime()/1000 +10;
useEffect(onceRunningFunction,[]);
function onceRunningFunction() {
    setInterval(mycallback,1000)}

function mycallback (){
   const nowDate = new Date();
   const nowSeconds=nowDate.getTime()/1000;
   const dif = targeSecond -nowSeconds;
   if(dif>0){
    setseconds(Math.round(dif));
    
   }
   if(dif<=0){
    console.log('boomb');
    setseconds("Boom")
   }
   


}
return(
    <div>
        {(second)}
    </div>
);


}
export default Timer;

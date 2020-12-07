import React from 'react';
const Item=({item,index})=>{
    if(index){
        return <h2>...</h2>
    }
   const Items=(item)=>{
      
        var result=[];
        var str=null;
        item.map((qs,index)=>{
            if(index===0){
               str="A";
            }
            if(index===1){
                str="B";
             }
             if(index===2){
                str="C";
             }
             if(index===3){
                str="D";
             }
            result.push(str+". "+qs.Content+".");
            result.push(<br/>);
        })
        return result;
    }
 
    return (
        <span>
         {Items(item)}
      </span>
    );
}
export default Item;
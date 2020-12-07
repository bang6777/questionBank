import React from 'react';
import Item from './Item';
const ItemQuesstion=({posts,loading})=>{
    if(loading){
        return (<div><h2>Loading.....</h2></div>);
    }
    return (
        <tbody>
           {posts.map((post,index)=>{
               var item=post.Id_Quesstion;
               return(
                <tr key={index}>
                    <td scope="row">{post.id}</td>
                    <td className="content-cover">
                        <span>{post.Name_quesstion}</span>
                        <div className="content-action">
                            <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                        </div>
                    </td>
                    <td>
                        <Item item={item} key={index}/>
                    </td>
                        <td>{post.createdAt}</td>
                </tr>);
           })}   
           </tbody>
    );
}
export default ItemQuesstion;
import React,{useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import Item from './Item';
import ShowTeacherCreate from './ShowTeacherCreate';
const ItemQuesstion=({posts,loading,currentPage})=>{
    const [teacher,setTeacher]=useState('');
    if(loading){
        return (<div><h2>Loading.....</h2></div>);
    }
    return (
        <tbody>
           {posts.map((post,index)=>{
               var item=post.Id_Quesstion;
               return(
                <tr key={index}>
                    <td scope="row">{showIndex(index,currentPage)}</td>
                    <td className="content-cover">
                        <span>{post.Name_quesstion}</span>
                        <div className="content-action">
                            <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                        </div>
                    </td>
                    {showTeacher(post.Id_teacher)}
                    <td>
                        <Item item={item} key={index}/>
                    </td>
                        <td>{showLevel(post.Id_level)}</td>
                </tr>);
           })}   
           </tbody>
    );
}
const showIndex=(index,currentPage)=>{
    var result=null;
    if(currentPage===1){
       result=index+1*currentPage;
    }
    else{
        result=index+1+(currentPage-1)*10;
    }
return result;
}
const showTeacher=(Id_teacher)=>{
    return <ShowTeacherCreate Id_teacher={Id_teacher} />
}
const showLevel=(level)=>{
    let result=null;
    if(level===1){
        result="Dể";
    }
    if(level===2){
        result="Trung Bình";
    }
    if(level===3){
        result="Khó";
    }
    return result;
}
export default ItemQuesstion;
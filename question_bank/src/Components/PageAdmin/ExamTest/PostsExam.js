import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import AnsewerQuestion from './AnsewerQuestion';

const PostsExam = ({posts,loading}) => {
    if(loading){
        return <h2>Loading.....</h2>
    }
    return (
    <ul className="list-group mb-4">
           {posts ? posts.map((post,index)=>{
               var item=post.Id_Quesstion;
               return(
                <tbody>
                    <div className="question"> Câu {post.id}: {post.Name_quesstion}</div>
                    <AnsewerQuestion item={item} key={index}/>
                </tbody>
            );
           }): <h2>Loading.....</h2>}   
        </ul>
    );  
}
export default PostsExam;
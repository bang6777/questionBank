import React,{Component,useState,useEffect} from 'react';
import Paginations from '../../Pagination/Paginations';
import AnswerQuestion from './AnsewerQuestion';
import { useLocation } from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import PostsExam from './PostsExam';

const ExamDetails=()=>{
  const location = useLocation();
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  const [page,setPage]=useState(0);
  const [collection,setCollection]=useState("question");
  const [limit,setLimit]=useState(10);
  useEffect(()=>{
    const currentPath = location.state;
    const fetchPosts= async()=>{
      let obj={
        id: currentPath.id
      }
      setLoading(true);
      await CallApi("v1/exam_question","POST",obj).then(res=>{
             
              var str="";
              obj={
                Id_quesstion: []
              }
              if(res){
                res.data.exam_question.map(id=>{
                    obj.Id_quesstion.push(id.id);
                })
              }
              console.log(obj);
              CallApi("v1/quesstion/id","POST",obj).then(ress=>{
                console.log(ress.data);
                setPosts(ress.data.details);
              
               })
               setLoading(false);
               setPage(4);
         })
    }
    fetchPosts();
  },[]);  
  const last=currentPage*postsPerPage;
  const first=last-postsPerPage;
  const currentPosts=posts.slice(first,last);
  const paginate= pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="col-md-9 menu-right col-sm-12 col-lg-9">
      <div className="top-title">
        <span>
          Quản Lý Đề Thi
        </span>
        <span className="add-new">
          Add New
        </span>
        <span className="add-new">
          Import
        </span>
      </div>
      <div className="back-link" style={{backgroundColor: '#ffff', margin: 0}}><i className="fas fa-home"> </i> <a href="#">Trang chủ/ </a><a href="#">Địa lý/ </a><a href="#">Đề Thi</a></div>
      <div className="link1">
        <table className="table">
          <thead>
            <tr>
              <th  className="text-center">Dề Thi</th>
            </tr>
          </thead>
           <PostsExam posts={currentPosts} loading={loading} />
           <Paginations page={page} paginate={paginate}/>
      
        </table>
      </div>
    </div>
      
  )

}
export default ExamDetails;

    

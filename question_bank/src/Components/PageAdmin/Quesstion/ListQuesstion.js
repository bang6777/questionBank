import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import Pagination from '../../Pagination';
import Paginations from '../../Pagination/Paginations';
import Posts from '../../Pagination/Posts';
import ItemQuesstion from './ItemQuesstion';
import {Link} from 'react-router-dom';
const ListQuesstion=(props)=>{
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  const [page,setPage]=useState(0);
  const [collection,setCollection]=useState("question");
  const [limit,setLimit]=useState(10);
  useEffect(()=>{
    const fetchPosts= async()=>{
      setLoading(true);
      var x = localStorage.getItem("admin");
      let obj={
            id: x,
          }
      await CallApi("v1/teacher/id","POST",obj).then(res=>{
        
            let ob={
              Id_exam_subject: res.data.details.Id_exam_subject
            }
              CallApi("v1/teacher/listtc/1","POST",ob).then(res1=>{
                    if(res1!==undefined){
                      let obt={
                        id: res1.data.details,
                        Id_grade: props.location.state.id
                      }
                      CallApi("v1/pagination?collection=question&limit=10","POST",obt).then(res=>{
                          setPosts(res.data.post);
                          setPage(res.data.page);
                          setLoading(false);
                      });
                    }
              })
      });
      
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
        NGÂN HÀNG CÂU HỎI
      </span>
      <Link to="add-question" className="add-new">Thêm Mới</Link>
    </div>
     <div className="link1">
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Câu hỏi</th>
            <th>Giáo Viên</th>
            <th>Câu trả lời</th>
            <th>Cấp độ</th>
          </tr>
        </thead>
        <ItemQuesstion posts={currentPosts} loading={loading} currentPage={currentPage}/>
      </table>
      <Paginations page={page} paginate={paginate}/>
    </div>
  </div>
      
  )
}
export default ListQuesstion;
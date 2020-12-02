import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import Pagination from '../../Pagination';
import Paginations from '../../Pagination/Paginations';
import Posts from '../../Pagination/Posts';
import ItemQuesstion from './ItemQuesstion';
const ListQuesstion=()=>{
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
      await CallApi("v1/pagination?collection=question&limit=10","GET",null).then(res=>{
          setPosts(res.data.post);
          setPage(res.data.page);
          setLoading(false);
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
      <span className="add-new">
        Add New
      </span>
      <span className="add-new">
        Import
      </span>
    </div>
    <div className="back-link" style={{backgroundColor: '#ffff', margin: 0}}><i className="fas fa-home"> </i> <a href="#">Trang chủ/ </a><a href="#">Địa lý/ </a> <a href="#">Lớp 10/ </a> <a href="#">Chương 1</a></div>
    <div className="link1">
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Câu hỏi</th>
            <th>Câu trả lời</th>
            <th>Ngày tạo</th>
          </tr>
        </thead>
        <ItemQuesstion posts={currentPosts} loading={loading}/>
      </table>
      <Paginations page={page} paginate={paginate}/>
    </div>
  </div>
      
  )
}
export default ListQuesstion;
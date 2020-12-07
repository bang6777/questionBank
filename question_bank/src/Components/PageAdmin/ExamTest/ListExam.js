import React,{Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
// import CKEditor from '@ckeditor/ckeditor5-react';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import ItemExam from './ItemExam';
    import CallApi from '../../../utils/apiCaller';
    import {Link} from 'react-router-dom';
export default class ListExam extends Component{
  constructor(props){
    super(props);
    this.state={
      exams:  []
    }
}
componentDidMount(){
  
    CallApi("v1/exam","GET",null).then(res=>{
          this.setState({
            exams: res.data.details
          })
    })
}
render(){
  var {exams}=this.state;
    return(
      <div className="col-md-9 menu-right col-sm-12 col-lg-9">
      <div className="top-title">
        <span>
          Quản Lý Đề Thi
        </span>
        <Link to="/admin/add-exam" className="add-new">Thêm Mới</Link>
        <span className="add-new">
          Import
        </span>
      </div>
      <div className="back-link" style={{backgroundColor: '#ffff', margin: 0}}><i className="fas fa-home"> </i> <a href="#">Trang chủ/ </a><a href="#">Địa lý/ </a><a href="#">Đề Thi</a></div>
      <div className="link1">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Thời Gian</th>
              <th>Ngày tạo</th>
            </tr>
          </thead>
          <tbody>
            {this.Showexams(exams)}
           </tbody>
        </table>
      </div>
    </div>
    )
};
Showexams(exams){
  var result=null;
  if(exams.length > 0 ){
      result=exams.map((exam,index)=>{
          return (
              <ItemExam exams={exam} key={index} index={index}  />
          )
      });
  }
  return result;
}
}

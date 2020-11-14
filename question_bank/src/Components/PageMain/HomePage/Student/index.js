import React,{Component} from 'react';
import CallApi from '../../../../utils/apiCaller';
import ListStudent from './ListStudent';
export default class Student extends Component{
    constructor(props){
      super(props);
      this.state={
          students:  []
      };
    }
    componentDidMount(){
      CallApi('v1/student','GET',null).then(res=>{
        this.setState({
          students:  res.data.details
        });
      });

    }
    render(){
        var {students}=this.state;
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
                <div className="top-title">
                    <span>
                        Danh Sách Sinh Viên
                    </span>
                    <span className="add-new">
                        Thêm Mới
                    </span>
                </div>
                <div className="back-link" style={{backgroundColor: '#ffff', margin: 0}}>
                    <i className="fas fa-home"> </i> 
                    <a href="#">Trang chủ/ </a>
                    <a href="#">Địa lý/ </a> 
                    <a href="#">Lớp 10/ </a> 
                    <a href="#">Chương 1</a>
                </div>
                <div className="link1">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Tên </th>
                            <th>Ngày Sinh</th>
                            <th>Giới Tính</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.ShowStudent(students)}
                        </tbody>
                    </table>
                  
                </div>
            </div>
        )
    };
    ShowStudent(students){
        var result=null;
        if(students.length > 0 ){
            result=students.map((student,index)=>{
                return (
                    <ListStudent students={student} key={index} index={index}/>
                )
            });
        }
        return result;
    }
   
}
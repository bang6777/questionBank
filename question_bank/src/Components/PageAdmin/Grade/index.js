import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';
import GradeDetails from './GradeDetails';
import Grade_Edit from './GradeEdit';
import ShowGrade from './ShowGrade';
class Grade extends Component{
    constructor(props){
      super(props);
      this.state={
          isShowForm: false,
          grades:  []
      };
    }
    componentDidMount(){
        CallApi('v1/grade','GET',null).then(res=>{
          this.setState({
            grades: res.data.details
          })
        })
    }
    render(){
        var {grades,isShowForm}=this.state;
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
            <div className="top-title">
              <span>
                DANH SÁCH KHỐI
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
              <div className="row" >
                  <div className="col-md-6">
                      <table className="table">
                          <thead>
                              <tr>
                              <th style={{width: '20px'}}>STT</th>
                              <th>Tên</th>
                              </tr>
                          </thead>
                          {this.ShowGrades(grades,isShowForm)}
                      </table>
                  </div>
              </div>
            </div>
            <Grade_Edit />

          </div>
        )
    };  
    ShowGrades(grades,isShowForm){
    console.log(grades.length);
      var result=null;
      if(grades.length > 0){
        result=grades.map((grade,index)=>{    
            return(
                  <ShowGrade grades={grade} key={index} index={index} isShowForm={isShowForm} />
                )
            });
      }
      return result;
    }
}
export default Grade;
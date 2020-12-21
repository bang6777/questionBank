import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import StudentHeader from '../StudentHeader';
import Menu from '../Menu';
import CallApi from '../../../utils/apiCaller';

class IndexTest extends Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            Id_exam: "",
            password: "",
            redirect: 0,
            Stt_exam: 0,
            message: "", 
            Id_test: ""
        }
    }
    componentDidMount(){
        // CallApi("/v1/exam/load/exam","GET",null).then(res=>{
        //    if(res!== undefined){
        //     this.setState({
        //         data: res.details
        //     })
        //    }
        // })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{

        e.preventDefault();
        CallApi("v1/exam/create/post","POST",this.state).then(res=>{
            console.log(res);
            if(res !== undefined ){
                this.setState({
                    redirect: 1,
                    Id_test: res.data.user.id
                })
            }
            else{
                this.setState({
                    message: "Sai thông tin vui lòng kiểm tra lại"
                })
            }
        })
    }
    render(){
        
        if(this.state.redirect!==0){
            return <Redirect
            to={{
              pathname: "/student/test-start",
              state: { Id_user: localStorage.getItem('user'),
                        Id_exam: this.state.Id_exam,
                        Id_test: this.state.Id_test
            }
            }}
           />;
            }
        return(
                <div className="class-backgroup">
                    <StudentHeader />
                 <div className="container">
                 <Menu />
                 <div className="col-md-9 menu-right col-sm-12 col-lg-9">
                <form onSubmit={this.handleSubmit} className="form-exam">  
                    <div className="panel panel-default">
                        <div className="panel-heading"> 
                                <h3 className="panel-title text-center">Kiểm Tra</h3> 
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mã Đề</label>
                        <input type="text" required name="Id_exam"  className="form-control"  onChange={this.handleChange} min="0" Max="100"/>
               
                    </div>
                    <div className="form-group">
                        <label>Số thứ tự</label>
                        <input type="number" required name="Stt_exam"  className="form-control"  onChange={this.handleChange} />
               
                    </div>
                    <div className="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" required name="password" className="form-control"  onChange={this.handleChange} />
                    </div>
                    <div className="d-flex col-sm-12 mb-3">
                {this.state.message && (
                  <small className="text-danger">{this.state.message}</small>
                )}
              </div>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Xác Nhận</button>
                </form>
          </div>
                 </div>
                
                </div>
        )
    };  
}
export default IndexTest;
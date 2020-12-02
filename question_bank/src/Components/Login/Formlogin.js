import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import '../../public/css/style.css';
import CallApi from "../../utils/apiCaller";
class Formlogin extends Component  {
  constructor(props){
    super(props);
    this.state={
      username:  "",
      password:  "",
      message: "",
      student:  false,
      redirect:  0
    };
  }
  handleInputChange =(e)=>{
    const target=e.target;
    const name=target.name;
    const value=target.type==='checkbox' ? target.checked: target.value;
    this.setState({
      [name]: value,
    })
  }
  handleSubmit=(e)=>{
    console.log(this.state);
    e.preventDefault();
    if(this.state.student===true){
      CallApi('v1/user/login','Post',this.state).then(res=>{
        
        if(res.data.user!== undefined){
          localStorage.setItem("user", res.data.jwt);
          this.setState({
            redirect: 2
          })
        }
        else{
          this.setState({
            message:  "Sai tên đăng nhập hoặc mật khẩu"
          })
        }
      })
    }
    else{
      CallApi('v1/user/login/teacher','Post',this.state).then(res=>{
        console.log(res);
        if(res !== undefined){
          localStorage.setItem("admin", res.data.jwt);
          this.setState({
            redirect: 1
          })
        }
        else{
          this.setState({
            message:  "Sai tên đăng nhập hoặc mật khẩu"
          })
        }
      })
    }
  }
 render(){
   if(this.state.redirect===1){
     alert("Đăng nhập thành công");
    return <Redirect to="/admin" />;
   }
   else if(this.state.redirect===2){
    alert("Đăng nhập thành công");
   return <Redirect to="/student" />;
   }
  
  return (
    <div className="form-login">
        <div className="container-fluid backgorup-height">
          <div className="col-md-6 signin-left">
          </div>
          <div className="col-md-6 signin-right">
            <div className="form-signin">
              <div className="form-group">
                <h3 className="sign-color">Đăng Nhập</h3>
              </div>
              <div className="space">
              </div>
                  <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        placeholder="Nhập tên đăng nhập"
                        required
                        name="username"
                        onChange={this.handleInputChange}
                      />
                      <input
                        type="password"
                        className="form-control form-control-md"
                        placeholder="Nhập mật khẩu"
                        required
                        name="password"
                        onChange={this.handleInputChange}
                      />
                       <div className="form-group form-sdt">
                       <input
                        className="sd"
                        type="checkbox"
                        checked={this.state.student} 
                        name="student"
                        onChange={this.handleInputChange}
                      /> <span>Sinh Viên</span>
                       </div>
                  </div>
                  <div className="d-flex col-sm-12 mb-3">
                {this.state.message && (
                  <small className="text-danger">{this.state.message}</small>
                )}
              </div>
                  <div className="form-group">
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
                      Đăng Nhập
                    </button>
                    <button type="submit" className="btn btn-warning">
                    Hủy
                    </button>
                  </div>
                  </form>
            </div>
          </div>
        </div>
      </div>
  );
 }
}

export default Formlogin;

import React,{Component} from 'react';

function Formlogin() {
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
              <div className="form-group">
                <input type="text" className="form-control" name="username" placeholder="Username..." />
                <input type="password" className="form-control" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Đăng Nhập
                </button>
                <button type="submit" className="btn btn-warning">
                 Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Formlogin;

import React,{Component} from 'react';
class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-default" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
                <a href="# " className="navbar-brand"> <i className="fas fa-home" /> Hệ Thống Quản Lý Đề Thi</a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right navbar-color">
                <li className="dropdown">
                     <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Thông Tin</a>
                </li>
                <li className="dropdown ">
                     <a href="# " className="dropdown-toggle color" data-toggle="dropdown">File</a>
                </li>
                <li className="dropdown ">
                     <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Ngôn Ngữ</a>
                </li>
                <li className="dropdown ">
                     <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Export</a>
                </li>
                <li className="dropdown">
                  <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Admin<b className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="# ">Log Out</a></li>
                    <li><a href="# ">Profile</a></li>
                  </ul>
                </li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </nav>
        )};
}
export default Header;
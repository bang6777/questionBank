import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class   Sidebar extends Component {
    render() {
        return (
            <div className="col-md-3 menu-left col-sm-12 col-lg-3 ">
                <ul className="main-menu">
                    <li className="menu-tp active"><Link to ="/list-exam">Quản Lý Đề Thi<span className="caret"> </span>   </Link>
                        <ul className="sub-menu">
                            <li><Link to ="/list-exam">Danh Sách Đề Thi<span className="caret"> </span></Link></li>
                            <li><Link to="/add-new-exam" >Thêm Đề Thi</Link></li>
                            <li><a href="# ">Chỉnh Sửa Đề Thi</a></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to ="/list-quesstion">Quản Lý Ngân Hàng Câu Hỏi<span className="caret"> </span></Link>
                        <ul className="sub-menu">
                            <li><Link to ="/list-quesstion">Danh Sách Câu Hỏi<span className="caret"> </span>   </Link></li>
                            <li><Link to="/add-quesstion" >Thêm Câu Hỏi</Link></li>
                            <li><a href="# ">Sửa Câu Hỏi</a></li>
                        </ul>
                    </li>
                  
                    <li className="menu-tp"><Link to="/list-grade" >Khối</Link>
                        <ul className="sub-menu">
                            <li><Link to='add-grade'>Thêm Khối</Link></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to="/list-student" >Sinh Viên</Link>
                        <ul className="sub-menu">
                            <li><Link to='/add-student'>Thêm Sinh Viên</Link></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to="/list-student/addstudent" >Điểm</Link>
                    </li>
                    <li className="menu-tp"><a href="# ">Đánh Giá<span className="caret"> </span></a>
                       
                       </li>
                    <li className="menu-tp"><a href="# ">Setting<span className="caret"> </span></a>
                    </li>
                    <li className="menu-tp"><a href="# ">Export<span className="caret"> </span></a>
                    </li>
                </ul>
                <div>
                
                </div>
            </div>
      
        )
    }
}
export default Sidebar;

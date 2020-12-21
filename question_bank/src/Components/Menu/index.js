import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class  Sidebar extends Component {
    render() {
        return (
            <div className="col-md-3 menu-left col-sm-12 col-lg-3 ">    
                <ul className="main-menu">
                    <li className="menu-tp active"><Link to ="/admin/list"> <i className="fas fa-book-open"></i> Quản Lý Đề Thi<span className="caret"> </span>   </Link>
                        <ul className="sub-menu">
                            <li><Link to ="/admin/list">Danh Sách Đề Thi<span className="caret"> </span></Link></li>
                            <li><Link to="/admin/add-exam" >Thêm Đề Thi</Link></li>
                            <li><a href="# ">Chỉnh Sửa Đề Thi</a></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to ="/admin/add-question"><i className="fas fa-question-circle"></i> Quản Lý Ngân Hàng Câu Hỏi<span className="caret"> </span></Link>
                        <ul className="sub-menu">
                            <li><Link to ="/admin/list-question">Danh Sách Câu Hỏi<span className="caret"> </span>   </Link></li>
                            <li><Link to="/admin/add-question" >Thêm Câu Hỏi</Link></li>
                            <li><a href="# ">Sửa Câu Hỏi</a></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link><i className="fas fa-user-graduate"></i>Quản Lý Điểm Sinh Viên</Link> </li>
                    <li className="menu-tp"><Link to="/admin/list-student" ><i className="fas fa-user-graduate"></i> Học Sinh</Link>
                       
                    </li>
                    <li className="menu-tp"><Link to="/admin/mark-exam" ><i className="fas fa-address-card"></i> Chấm Điểm</Link>
                    </li>
                  
                    <li className="menu-tp"><a href="# "> <i className="fas fa-wrench"></i> Setting<span className="caret"> </span></a>
                    </li>
                    <li className="menu-tp"><a href="# "> <i className="fas fa-file-export"></i> Export<span className="caret"> </span></a>
                    </li>
                </ul>
            </div>
      
        )
    }
}
export default Sidebar;

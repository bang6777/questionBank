import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class   Sidebar extends Component {
    render() {
        return (
            <div className="col-md-3 menu-left col-sm-12 col-lg-3 ">    
                <ul className="main-menu">
                    <li className="menu-tp active"><Link to ="/admin/list-exam"> <i class="fas fa-book-open"></i> Quản Lý Đề Thi<span className="caret"> </span>   </Link>
                        <ul className="sub-menu">
                            <li><Link to ="/admin/list-exam">Danh Sách Đề Thi<span className="caret"> </span></Link></li>
                            <li><Link to="/admin/add-new-exam" >Thêm Đề Thi</Link></li>
                            <li><a href="# ">Chỉnh Sửa Đề Thi</a></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to ="/admin/list-quesstion"><i class="fas fa-question-circle"></i> Quản Lý Ngân Hàng Câu Hỏi<span className="caret"> </span></Link>
                        <ul className="sub-menu">
                            <li><Link to ="/admin/list-quesstion">Danh Sách Câu Hỏi<span className="caret"> </span>   </Link></li>
                            <li><Link to="/admin/add-quesstion" >Thêm Câu Hỏi</Link></li>
                            <li><a href="# ">Sửa Câu Hỏi</a></li>
                        </ul>
                    </li>
                  
                    <li className="menu-tp"><Link to="/list-grade" ><i class="fas fa-graduation-cap"></i> Khối</Link>
                        <ul className="sub-menu">
                            <li><Link to='/admin/add-grade'>Thêm Khối</Link></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to="/admin/list-student" ><i class="fas fa-user-graduate"></i> Sinh Viên</Link>
                        <ul className="sub-menu">
                            <li><Link to='/admin/add-student'>Thêm Sinh Viên</Link></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to="/admin/diem" ><i class="fas fa-address-card"></i> Điểm</Link>
                    </li>
                    <li className="menu-tp"><a href="# "><i class="fas fa-pen-square"></i> Đánh Giá<span className="caret"> </span></a>
                       
                       </li>
                    <li className="menu-tp"><a href="# "> <i class="fas fa-wrench"></i> Setting<span className="caret"> </span></a>
                    </li>
                    <li className="menu-tp"><a href="# "> <i class="fas fa-file-export"></i> Export<span className="caret"> </span></a>
                    </li>
                </ul>
                <div>
                
                </div>
            </div>
      
        )
    }
}
export default Sidebar;

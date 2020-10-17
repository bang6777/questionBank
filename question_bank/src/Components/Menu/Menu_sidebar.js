import React, { Component } from 'react';
class Menu_sidebar extends Component {
    render() {
        return (
            <div className="col-md-2 menu-left col-sm-12">

                <ul className="main-menu">
                    <li className="menu-tp"><a>Quản Lý Đề Thi<span className="caret"> </span></a>
                        <ul className="sub-menu">
                            <li><a href="# ">Thêm Đề Thi</a></li>
                            <li><a href="# ">Danh Sách Đề Thi</a></li>
                            <li><a href="# ">Chỉnh Sửa Đề Thi</a></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><a>Quản Lý Ngân Hàng Câu Hỏi<span className="caret"> </span></a>
                        <ul className="sub-menu">
                            <li><a href="# ">Thêm Câu Hỏi</a></li>
                            <li><a href="# ">Danh Sách Câu Hỏi</a></li>
                            <li><a href="# ">Sửa Câu Hỏi</a></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><a>Đánh Giá<span className="caret"> </span></a>
                        <ul className="sub-menu">
                            <li><a href="# ">Add New</a></li>
                            <li><a href="# ">Danh Sách Đề Thi</a></li>
                            <li><a href="# ">Danh mục</a></li>
                            <li><a href="# ">Danh mục</a></li>
                        </ul>
                    </li>
                    <li className="menu-tp"><a>Export<span className="caret"> </span></a>
                    </li>
                    <li className="menu-tp"><a>Setting<span className="caret"> </span></a>
                    </li>
                </ul>
            </div>
        )
    };
}
export default Menu_sidebar;

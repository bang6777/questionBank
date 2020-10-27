import React, { Component } from 'react';
class Menu_body extends Component {
    render() {
        return (
            <div className="col-md-10 menu-right col-sm-12 ">
                <div className="top-title">
                    <span>
                        NGÂN HÀNG CÂU HỎI
                    </span>
                    <span className="add-new">
                        Add New
                    </span>
                </div>
                <div className="back-link" style={{ backgroundColor: '#ffff', margin: 0 }}><i className="fas fa-home"> </i> <a
                        href=" #">Trang chủ/</a><a href=" #">Thông
                        Tin</a></div>
                <div className="link1">
                    <div className="main-contents">
                        <div className="title-subjects">
                            <div className="title-class">
                                <div className="title-content">
                                    Lớp 10
                                    <div className="icon" />
                                </div>
                            </div>
                            <div className="title-subject">
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                            </div>
                        </div>
                        <button>Xem thêm</button>
                    </div>
                    <div className="main-contents">
                        <div className="title-subjects">
                            <div className="title-class">
                                <div className="title-content">
                                    Lớp 11
                                    <div className="icon" />
                                </div>
                            </div>
                            <div className="title-subject">
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                            </div>
                        </div>
                        <button>Xem thêm</button>
                    </div>
                    <div className="main-contents">
                        <div className="title-subjects">
                            <div className="title-class">
                                <div className="title-content">
                                    Lớp 12
                                    <div className="icon" />
                                </div>
                            </div>
                            <div className="title-subject">
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                                <div className="content-sub">
                                    <span>Môn Toán</span>
                                </div>
                            </div>
                        </div>
                        <button>Xem thêm</button>
                    </div>
                </div>
        </div>
        )
    };
}
export default Menu_body;
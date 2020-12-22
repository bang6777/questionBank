import React,{Component} from 'react';
import {Link } from 'react-router-dom';

class Footer extends Component{
render(){
    return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                       <div className="col-md-12">
                       <div className="col-md-4">
                        <h4>WEBSITE</h4>
                        <a href="#">Trang chủ</a>
                        <a href="#">Bài đăng</a>
                        <a href="#">Chức năng</a>
                        <a href="#">Thông báo</a>
                        </div>
                        <div className="col-md-4">
                        <h4>LIÊN KẾT</h4>
                        <div className="d-flex justify-content-around">
                            <a href="#">FB</a>
                            <a href="#">Zalo</a>
                            <a href="#">Website</a>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <h4>ĐỊA CHỈ</h4>
                        <p>Khu II, đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
                        <a href>Điện thoại: (84-292) 3832663</a>
                        </div>
                       </div>
                    </div>
                </div>
            </div>              
    )
}
}
export default Footer;
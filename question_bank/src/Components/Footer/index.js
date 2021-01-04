import React,{Component} from 'react';
import {Link } from 'react-router-dom';

class Footer extends Component{
render(){
    return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                       <div className="col-md-12">
                       <div className="col-md-6">
                        <h4>WEBSITE</h4>
                        <a href="#">Trang chủ</a>
                        <a href="#">Thông báo</a>
                        </div>
                       
                        <div className="col-md-6">
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
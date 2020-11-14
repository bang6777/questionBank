import React,{Component} from 'react';
import {Route} from 'react-router-dom';

class Grade extends Component{
    render(){
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
            <div className="top-title">
              <span>
                NGÂN HÀNG CÂU HỎI
              </span>
              <span className="add-new">
                Add New
              </span>
              <span className="add-new">
                Import
              </span>
            </div>
            <div className="back-link" style={{backgroundColor: '#ffff', margin: 0}}><i className="fas fa-home"> </i> <a href="#">Trang chủ/ </a><a href="#">Địa lý/ </a> <a href="#">Lớp 10/ </a> <a href="#">Chương 1</a></div>
            <div className="link1">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Câu hỏi</th>
                    <th>Câu trả lời</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">1</td>
                    <td className="content-cover">
                      <span>
                        Thiên nhiên phần lãnh thổ phía Bắc ( từ dãy Bạch Mã trở ra) đặc trưng
                        cho vùng khí hậu nào
                      </span>
                      <div className="content-action">
                        <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                      </div>
                    </td>
                    <td>A. Nhiệt đới ẩm gió mùa có mùa đông lạnh <br />
                      B. Cận xích đạo gió mùa <br />
                      C. Cận nhiệt đơi hải dương <br />
                      D. Nhiệt đới lục địa khô</td>
                    <td id="hvn" />
                  </tr>
                  <tr>
                    <td scope="row">2</td>
                    <td className="content-cover">
                      <span>
                        Thiên nhiên phần lãnh thổ phía Bắc ( từ dãy Bạch Mã trở ra) đặc trưng
                        cho vùng khí hậu nào
                      </span>
                      <div className="content-action">
                        <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                      </div>
                    </td>
                    <td>A. Nhiệt đới ẩm gió mùa có mùa đông lạnh<br />
                      B. Cận xích đạo gió mùa<br />
                      C. Cận nhiệt đơi hải dương
                      D. Nhiệt đới lục địa khô</td>
                    <td id="hvn1" />
                  </tr>
                  <tr>
                    <td scope="row">3</td>
                    <td className="content-cover">
                      <span>
                        Thiên nhiên phần lãnh thổ phía Bắc ( từ dãy Bạch Mã trở ra) đặc trưng
                        cho vùng khí hậu nào
                      </span>
                      <div className="content-action">
                        <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                      </div>
                    </td>
                    <td>A. Nhiệt đới ẩm gió mùa có mùa đông lạnh <br />
                      B. Cận xích đạo gió mùa <br />
                      C. Cận nhiệt đơi hải dương <br />
                      D. Nhiệt đới lục địa khô</td>
                    <td id="hvn" />
                  </tr>
                  <tr>
                    <td scope="row">4</td>
                    <td className="content-cover">
                      <span>
                        Thiên nhiên phần lãnh thổ phía Bắc ( từ dãy Bạch Mã trở ra) đặc trưng
                        cho vùng khí hậu nào
                      </span>
                      <div className="content-action">
                        <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                      </div>
                    </td>
                    <td>A. Nhiệt đới ẩm gió mùa có mùa đông lạnh<br />
                      B. Cận xích đạo gió mùa<br />
                      C. Cận nhiệt đơi hải dương
                      D. Nhiệt đới lục địa khô</td>
                    <td id="hvn1" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
    };  
}
export default Grade;
import React,{Component} from 'react';
export default class Form extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="form-exam">  
                    <div className="panel panel-default">
                        <div className="panel-heading"> 
                                <h3 className="panel-title text-center">Import File</h3> 
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Thời Gian</label>
                        <input type="text" required name="Time" id="Time" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" required name="Pass" id="Pass" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mô Tả</label>
                        <textarea  required name="Note" id="Note" className="form-control"></textarea>
                    </div>
                        <div className="form-group">
                            <label>Chọn File</label>
                            <input type="file" name="file" id="file"   className="form-control"/>
                        </div>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Xác Nhận</button>
                </form>
          </div>
        )
    };
  
}

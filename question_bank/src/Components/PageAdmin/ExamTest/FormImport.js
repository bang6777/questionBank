import React,{Component} from 'react';

export default class FormImport extends Component{
    render(){
        var {id}=this.props;
        console.log("aaaaaaaaaaaaaaaaaaa"+id);
        return(
            <div className="col-md-9 menu-right  col-sm-12 col-lg-9 ">
                 <div className="form-quiz">
          <form action method="post">
            <div className="panel panel-default">
              <div className="panel-heading"> 
                <h3 className="panel-title text-center">Select Quiz</h3> <div className="btn btn-primary "> add potic</div>
              </div>
            </div>
            <div className="quiz">  
              <div className="form-group">
                <label htmlFor>Choose part</label>
                <select className="form-control" name id>
                  <option />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor>Dể</label>
                <input type="number" defaultValue={0} />
              </div>
              <div className="form-group">
                <label htmlFor>Trung Bình</label>
                <input type="number" defaultValue={0} />
              </div>
              <div className="form-group">
                <label htmlFor>Khó</label>
                <input type="number" defaultValue={0} />
              </div>
            </div>
            <div className="quiz">  
              <div className="form-group">
                <label htmlFor>Choose part</label>
                <select className="form-control" name id>
                  <option />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor>Dể</label>
                <input type="number" defaultValue={0} />
              </div>
              <div className="form-group">
                <label htmlFor>Trung Bình</label>
                <input type="number" defaultValue={0} />
              </div>
              <div className="form-group">
                <label htmlFor>Khó</label>
                <input type="number" defaultValue={0} />
              </div>
            </div>
            <button type="button" className="btn btn-primary">Xác Nhận</button>
          </form>
        </div>
            </div>
        )
    };
}

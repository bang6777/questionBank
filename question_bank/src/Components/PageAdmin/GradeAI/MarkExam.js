import React,{Component} from 'react';
import {  Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import callAPI from '../../../utils/apiCallerpython';
export default class ItemExam extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect:  0,
            id:    "",
            createExam: false,
            files: [],
            imgs:[]
        }
    }
    onChange=(e)=> {
        this.setState({ files: e.target.files});
    }
    handleShowForm=()=>{
        this.setState({
            createExam: true
        })
    }
    handleCancel=()=>{
        this.setState({
            createExam: false
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        for (const i of Object.keys(this.state.files)) {
            formData.append('files', this.state.files[i])
        }
        CallApi("v1/img/upload/img","POST",formData).then(res=>{
            console.log(res);
            // if(res!== undefined){
            //     callAPI("choose-folder-muitiple","POST",res.data.path).then(res=>{
            //         console.log(res);
            //     })
            //     this.setState({
            //         imgs:res.data.path,
            //     })
            // }
        })
        e.preventDefault();
    }
    render(){
    let {createExam,imgs}=this.state;
        return(
            <div className="col-md-19 menu-right col-sm-9">
                       <div className="main-contents">
                       <div className="title-subjects">
                           <div className="title-class">
                               <div className="title-content">
                                  Chấm
                                   <div className="icon" />
                                   <img src="/uploads/2020-12-28-img1.jpg"/>
                                   {this.showImg(imgs)}
                               </div>
                             
                               <div  className="btn btn-primary" onClick={this.handleShowForm}>Chọn file chấm bài</div>
                               <div >
                                  {createExam?
                                    <div className="form-ai">
                                        <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                            <p>Chọn File</p>
                                            <input type="file" webkitdirectory directory multiple name="files" onChange={this.onChange}/>
                                            <div className="btn btn-danger" onClick={this.handleSubmit}>Tạo</div>
                                            <div className="btn btn-warning" onClick={this.handleCancel}>Hủy</div>
                                        </form>
                                    </div> : null}
                               </div>
                                  <button className="btn btn-primary">
                                  Chọn Đáp Án
                               </button>
                               <button className="btn btn-primary">
                                  Chấm Điểm
                               </button>
                           </div>
                           <div className="title-subject">
                                 
                           </div>
                       </div>
                   </div>     
                           
            
            </div>
        )

        }
        showImg(imgs){
            var result=null;
            if(imgs.length>0 ){
              
                    return(
                       123
                    )
                // result=imgs.map((img,index)=>{
                //     return(
                //         <img src={img} />
                //     )
                // })
            }
            return result;
        }
}


import React,{Component} from 'react';
import {  Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
export default class ItemExam extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect:  0,
            id:    ""
        }
    }
    
 
    render(){
    
        return(
            <div className="col-md-19 menu-right col-sm-9">
           
                       <div className="main-contents">
                       <div className="title-subjects">
                           <div className="title-class">
                               <div className="title-content">
                                  Chấm
                                   <div className="icon" />
                                   
                               </div>
                               <button className="btn btn-primary">
                                  Chọn Bài Thi
                               </button>
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
}


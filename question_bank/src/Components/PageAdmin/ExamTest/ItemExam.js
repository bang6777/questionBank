import React,{Component} from 'react';
import {  Redirect } from "react-router-dom";
import CKEditor from '@ckeditor/ckeditor5-react';
// import CKEditor from '@ckeditor/ckeditor5-react';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
export default class ItemExam extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect:  0,
            id:    ""
        }
    }
    showdetails=(id)=>{
        this.setState({
            redirect:  1,
            id: id
        })
    }
    render(){
        if(this.state.redirect!==0){
          return <Redirect
          to={{
            pathname: "/admin/examdetails",
            state: { id: this.state.id }
          }}
         />;
          }
        var {exams,index}= this.props;
        return(
                <tr>
                    <td scope="row">{index+1}</td>
                    <td className="content-cover">
                        <span>Mã Đề: 0{index+1}</span>
                        <div className="content-action">
                            <a href>Edit</a> | <a href className="color-red">Delete</a> | <span onClick={()=>this.showdetails(exams.id)} > View</span>
                        </div>
                    </td>
                    <td>{exams.createdAt}</td>
                        
                </tr>
        )
    };
   
}

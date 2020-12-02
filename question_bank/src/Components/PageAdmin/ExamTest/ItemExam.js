import React,{Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
// import CKEditor from '@ckeditor/ckeditor5-react';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default class ItemExam extends Component{
    render(){
        var {exams,index}= this.props;
        return(
                <tr>
                    <td scope="row">{index+1}</td>
                    <td className="content-cover">
                        <span>{exams.Time}</span>
                        <div className="content-action">
                            <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                        </div>
                    </td>
                    <td>{exams.createdAt}</td>
                        
                </tr>
        )
    };
   
}

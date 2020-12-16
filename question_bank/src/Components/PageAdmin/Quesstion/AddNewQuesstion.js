import React,{Component} from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@blowstack/ckeditor5-full-free-build';
import { useLocation } from 'react-router-dom';
import Parser from 'react-html-parser';
import MathJax from 'react-mathjax-preview';
import CallApi from '../../../utils/apiCaller';
export default class AddNewQuesstion extends Component{
    constructor(props){
        super(props);
        this.state={
            Id_teacher: localStorage.getItem("admin"),
            dt: "",
            topics: [],
            levels: [],
            anwser: 'option1',
            level: "",
            dt1: "",
            dt2: "",
            dt3: "",
        }
    }
    handleCkeditor=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt: data
        })
    }
    handleCkeditor1=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt1: data
        })
    }
    handleCkeditor2=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt2: data
        })
    }
    handleCkeditor3=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            dt3: data
        })
    }
    handleOnchange=(e)=>{
        this.setState({
            anwser: e.target.value
          });
    }
    componentDidMount(){
        CallApi("v1/topic","GET",null).then(res=>{
            this.setState({
                    topics: res.data.details
            })
        })
        CallApi("v1/level","GET",null).then(res=>{
            this.setState({
                    levels: res.data.details
            })
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        let obj=this.props.location.state.id;
        let {topics,levels}=this.state;
        return(
         
            <div className="col-md-19 menu-right col-sm-9">
                <form onSubmit={this.handleSubmit} onChange={this.handleOnchange}>
                <div className="form-quesstion">
                    <div className="title-quesstion">
                    <div className="form-group title-qs">Thêm Câu Hỏi Mới
                    </div>
                    <div className="space">
                    </div>
                    <div className="form-group">
                       <div>{ <MathJax math={this.state.dt} />}</div>
                        <label >Tên Câu Hỏi </label> 
                        
                        <input type="text" className="form-control" name="namequesstion" placeholder="Nhập tên câu hỏi..." />
                    </div>
                    <div className="form-group">
                        Cấp độ
                        <select  name="level"  value={this.state.level} className="form-control" >
                        {levels.map(level=>(
                             <option value={level.id}>{level.content}</option>
                           ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Chọn Chương</label>
                        <select className="form-control">
                           {topics.map(topic=>(
                             <option value={topic.id}>{topic.Name_topic}: {topic.Content_topic}</option>
                           ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Đáp Án A</label>
                        <input type="radio" value="option1" checked={this.state.anwser === 'option1'} />
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditor}
                        />
                    </div>
                    <div className="form-group">
                        <label >Đáp Án B</label>
                        <input type="radio" value="option2" checked={this.state.anwser === 'option2'} />
                        <CKEditor
                    editor={ClassicEditor}
                    onInit={editor => {
                       
                    }}
                    onChange={this.handleCkeditor1}
                />
                    </div>
                    <div className="form-group">
                   
                        <label >Đáp Án C</label>
                        <input type="radio"  value="option3" checked={this.state.anwser === 'option3'} />
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                           
                        }}
                        onChange={this.handleCkeditor2}
                        />
                    </div>
                    <div className="form-group">
                        <label >Đáp Án D</label>
                        <input type="radio"  value="option4" checked={this.state.anwser === 'option4'}/>
                        <CKEditor
                        readOnly = {true}
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditor3}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>
                           Thêm Mới
                        </button>
                    </div>
                    </div>
                </div>
               
                </form>
            </div>
        )
    };
}
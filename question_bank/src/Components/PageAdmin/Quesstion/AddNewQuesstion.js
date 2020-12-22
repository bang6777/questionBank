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
            Id_grade:this.props.location.state.id,
            Id_teacher: localStorage.getItem("admin"),
            dt: "",
            topics: [],
            levels: [],
            answer: 'op1',
            level: "",
            dt1: "",
            dt2: "",
            dt3: "",
            Name_quesstion:"",
            Id_es: "",
            Id_topic:""
        }
    }
    handleCkeditorName=(e,editor)=>{
        const data=editor.getData();
        this.setState({
            Name_quesstion: data
        })
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
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount(){
        let obj1={
            id: localStorage.getItem("admin")
        }
        CallApi("v1/teacher/1","POST",obj1).then(res=>{
            if(res!==undefined){
                let  obj={
                    Id_grade: this.props.location.state.id,
                    Id_es: res.data.details.id
                }
                this.setState({
                    Id_es: res.data.details.id
                })
                console.log(obj);
                CallApi("v1/topic/1","POST",obj).then(res=>{
                    console.log( res.data.details);
                    this.setState({
                            topics: res.data.details
                    })
                })
            }
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
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditorName}
                        />
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
                        <select className="form-control" name="Id_topic" value={this.state.Id_topic}>
                           {topics.map(topic=>(
                             <option value={topic.id}>{topic.Name_topic}: {topic.Content_topic}</option>
                           ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Đáp Án A</label>
                        <input type="radio" value="op1" checked={this.state.answer === 'op1'} />
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditor}
                        />
                    </div>
                    <div className="form-group">
                        <label >Đáp Án B</label>
                        <input type="radio" value="op2" checked={this.state.answer === 'op2'} />
                        <CKEditor
                    editor={ClassicEditor}
                    onInit={editor => {
                       
                    }}
                    onChange={this.handleCkeditor1}
                />
                    </div>
                    <div className="form-group">
                   
                        <label >Đáp Án C</label>
                        <input type="radio"  value="op3" checked={this.state.answer === 'op3'} />
                        <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                           
                        }}
                        onChange={this.handleCkeditor2}
                        />
                    </div>
                    <div className="form-group">
                        <label >Đáp Án D</label>
                        <input type="radio"  value="op4" checked={this.state.answer === 'op4'}/>
                        <CKEditor
                        readOnly = {true}
                        editor={ClassicEditor}
                        onInit={editor => {
                            
                        }}
                        onChange={this.handleCkeditor3}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
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
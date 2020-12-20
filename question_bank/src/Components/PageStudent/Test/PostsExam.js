import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import AnsewerQuestion from './AnsewerQuestion';

class PostsExam extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:  [],
            Data: [],
            Id_answer: [],
            grade_exam:[]
        }
    }
    handleSubmit=(e)=>{
        let data=this.handleSave();
        console.log(data);
        CallApi("v1/grade_exam","POST",data).then(res=>{
            if(res!==undefined){
               alert("Điểm của bạn là:" +res.data.data);
            }
        })
        // Map id answer 
        e.preventDefault();
    }
    handleSave=()=>{
        // //fillter trung
        function uniqByKeepLast(question, key) {
            return [
                ...new Map(
                    question.map(x => [key(x), x])
                ).values()
            ]
        }
        let data=uniqByKeepLast(this.state.questions, it => it.question);
        let dataN=[];
        data.map(dt=>{
            dataN.push(dt.answer);
        });
        this.setState({
            Id_answer: dataN,
        });
        return data;
    }
    handleInputChange=(e)=>{
        if(e.target.checked !==undefined){
        this.setState({
            questions: this.state.questions.concat({ question: Number(e.target.name), answer: Number(e.target.value) })
        })
    }
     function uniqByKeepLast(question, key) {
            return [
                ...new Map(
                    question.map(x => [key(x), x])
                ).values()
            ]
        }
        let data=uniqByKeepLast(this.state.questions, it => it.question);
        let dataN=[];
        data.map(dt=>{
            dataN.push(dt.answer);
        });
        this.setState({
            Id_answer: dataN,
        });
    }
    render(){
        let {posts,currentPage,index}=this.props;
        let {Id_answer}=this.state;
        return (
            <ul className="list-group mb-4">
                <form onSubmit={this.handleSubmit}  onClick={this.handleInputChange} >
                   {posts ? posts.map((post,index)=>{
                       var item=post.Id_Quesstion;
                        var item2=post.id;
                       return(
                        <tbody>
                            <div className="question" id=""> Câu {this.showIndex(index,currentPage)}: {post.Name_quesstion}</div>
                            <AnsewerQuestion item2={item2} item={item} key={post.id} index={index} currentPage={currentPage} id_quesstion={post.id} Id_answer={Id_answer}/>
                        </tbody>
                    );
                   }): <h2>Loading.....</h2>}   
                   <button className="btn btn-primary" onClick={this.handleSubmit}>Nộp Bài</button>
                   <button className="btn btn-primary" onClick={this.handleSave}>Lưu Bài</button>
                   </form>
                  
                </ul>
            );  
        }
        showIndex(index,currentPage){
            var result=null;
            if(currentPage===1){
               result=index+1*currentPage;
            }
            else{
                result=index+1+(currentPage-1)*10;
            }
        return result;
    }

    }
   
export default PostsExam;
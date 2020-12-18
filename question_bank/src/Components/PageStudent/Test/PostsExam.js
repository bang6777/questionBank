
import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import AnsewerQuestion from './AnsewerQuestion';

class PostsExam extends Component{
    constructor(props){
        super(props);
        this.state={
            quesstions: [{Id_quesstion: "",answer: ""}],
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    handleInputChange=(e)=>{
        var isChecked = e.target.checked;
        if (["Id_quesstion","answer"].includes(e.target.name)) {
            let  quesstions= [...this.state.quesstions]
            // quesstions[e.target.dataset.id][e.target.name] = e.target.value;
       
          } else {
            this.setState({ [e.target.name]: e.target.value })
          }
    }
        
//   handleChange(event) {
//     var isChecked = event.target.checked;
//     var item = event.target.value;
     
//     this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
// }
    componentDidMount(){
        for(var i=0;i<=40;i++){
            this.setState((prevState) => ({
                quesstions: [...prevState.quesstions, {Id_quesstion: "",answer: ""}],
              }));
        }
        
    }
    
    render(){
        let {posts,currentPage,obj}=this.props;
        
        return (
            <ul className="list-group mb-4">
                <form onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
                   {posts ? posts.map((post,index)=>{
                       var item=post.Id_Quesstion;
                       return(
                        <tbody>
                            <div className="question" id=""> Câu {this.showIndex(index,currentPage)}: {post.Name_quesstion}</div>
                            <AnsewerQuestion item={item} key={index} index={index} currentPage={currentPage}  />
                        </tbody>
                    );
                   }): <h2>Loading.....</h2>}   
                   <button className="btn btn-primary" onClick={this.handleSubmit}>Nộp Bài</button>
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
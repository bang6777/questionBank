import React from 'react';
import CallApi from '../../../utils/apiCaller';
import AnsewerPDF from './AnsewerPDF';

export class ComponentToPrint extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      datas:[],
      key:""
    }
  }
    componentDidMount(){
      let obj={
        id: localStorage.getItem("Id_exam_export")
      }
      CallApi("v1/exam/export/pdf","POST",obj).then(res=>{
        console.log(res.data);
        if(res!==undefined){
          this.setState({
            datas: res.data.details,
            key: res.data.success
          })
        }
      })
    }
    render() {
      let {datas,key}=this.state;
      return (
        <table className="format-pdf">
          {datas.map((post,index)=>{
            console.log(post.Id_Quesstion)
               var item=post.Id_Quesstion;
               return(
                <tbody>
                    <div className="question" key={index}> Câu{index+1}: {post.Name_quesstion}</div>
                    <AnsewerPDF item={item} key={index} index={index} code={key}/>
                </tbody>
            );
           })}   
        </table>
      );
    }
  }
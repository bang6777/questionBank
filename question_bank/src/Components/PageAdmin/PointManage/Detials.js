import React,{Component} from 'react';

class Details extends Component{
    render(){
        let {tests,exams}=this.props;
        return(
           this.show(tests,exams)
           
        )
    }
    show(tests,exams){
        var core=10/exams.length;
        var result=null;
        result=exams.map((ex,index)=>{
            if(Number(ex)=== Number(tests.question)){
                if(Number(tests.core)===1){
                    return(
                        <td key={index} className="color-success "> <span>{core} <i className="fas fa-check"></i></span></td>
                    )
                }
                else{
                    return(
                        <td key={index} className="color-danger" ><span> {core} <i className="fas fa-times"></i></span></td>
                    )
                }
            }
        })
        return result;
    }

}
export default Details;
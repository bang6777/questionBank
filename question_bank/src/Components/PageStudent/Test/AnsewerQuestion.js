import React,{Component} from 'react';
export default class AnsewerQuestion extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
    var {item,index,currentPage}=this.props;
      return(
          <div>
             {this.showitem(item,index,currentPage)}
            </div>
      )
  };
  showitem(item,index,currentPage){
    var result=null;
    if(currentPage===1){
       result=index*currentPage;
    }
    else{
        result=index+1+(currentPage-1)*10;
    }
    var rss=result;
    var a="answer"+result;
    var b=a+"-1";
    var b2=a+"-2";
    var b3=a+"-3";
    var b4=a+"-4";
    var ten="answer"+result;
return(
              <div className="answer">
                  <label> <input type="radio"  name="answer" value={item[0].id} id={result+1}  /> A. {item[0].Content}</label>
                  <label><input type="radio" name="answer1" value={item[1].id} id={result+2} /> B. {item[1].Content}</label>
                  <label><input type="radio" name="answer2" value={item[2].id} id={result+3}  /> C. {item[2].Content}</label>
                  <label><input type="radio"  name="answer3" value={item[3].id}  id={result+4}/>D. {item[3].Content}</label>
              </div>
          )
  }

}
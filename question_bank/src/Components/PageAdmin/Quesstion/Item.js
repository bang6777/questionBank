import React,{Component} from 'react';
export default class Item extends Component{
    render(){
      var {item}=this.props;
        return(
              this.showitem(item)
        )
    };
    showitem(item){
      let kq1,kq2,kq3,kq4;
  
      if(item[0].Diem==="1"){
        kq1=<label style={{color: 'red'}}>A. {item[0].Content}</label>;
      }
      else{
        kq1=<label>A. {item[0].Content}</label>;
      }
      if(item[1].Diem==="1"){
        kq2=<label style={{color: 'red'}}>B. {item[1].Content}</label>;
      }
      else{
        kq2=<label>B. {item[1].Content}</label>;
      }
      if(item[2].Diem==="1"){
        kq3=<label style={{color: 'red'}}>C. {item[2].Content}</label>;
      }
      else{
        kq3=<label>C. {item[2].Content}</label>;
      }
      if(item[3].Diem==="1"){
        kq4=<label style={{color: 'red'}}>D. {item[3].Content}</label>;
      }
      else{
        kq4=<label>A. {item[3].Content}</label>;
      }

     
  return(
                <div className="answer">
                   {kq1}{kq2}{kq3}{kq4}
                </div>
            )
    }
  }
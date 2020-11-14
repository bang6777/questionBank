import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Header from '../../Header';
import Menu from '../../Menu';
import Menu_body from './Home/Menu_body';
import AddNewQuesstion from './Quesstion/AddNewQuesstion';
import ListQuesstion from './Quesstion/ListQuesstion';
import ListExam from './ExamTest/ListExam';
import AddNewExam from './ExamTest/AddNewExam';
import AddStudent from './Student/AddStudent';
import Student from './Student';
import Grade from './Grade';
class HomePage extends Component{
    render(){
        return(
            <div>
                <Header />
                <Menu />
                <div>
                    <Route exact  path="/" component={Menu_body} />
                    <Route exact  path='/add-quesstion' component={AddNewQuesstion} />
                    <Route exact  path='/list-quesstion' component={ListQuesstion} />
                    <Route exact  path='/list-exam' component={ListExam} />
                    <Route exact  path='/add-exam' component={AddNewExam} />
                    <Route exact  path='/list-student' component={Student} />
                    <Route exact  path="/add-student" component={AddStudent} />
                    <Route exact  path="/list-grade" component={Grade} />
                </div>
            </div>
        )
    };  
}
export default HomePage;
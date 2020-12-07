import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Menu_body from './Home/Menu_body';
import AddNewQuesstion from './Quesstion/AddNewQuesstion';
import ListQuesstion from './Quesstion/ListQuesstion';
import ListExam from './ExamTest/ListExam';
import AddNewExam from './ExamTest/AddNewExam';
import Student from './Student';
import AddStudent from './Student/AddStudent';
import Grade from './Grade';
import SelectQuiz from './SelectQuiz';
import Header from '../Header';
import Menu from '../Menu';
import AdminRoute from '../AdminRoute/AdminRoutes';
import ExamDetails from './ExamTest/ExamDetails';

class PageAdmin extends Component{
    render(){
        return(
            <div>
                <Header />
                <Menu />
                <div>
                    <AdminRoute  path='/admin/add-quesstion' component={AddNewQuesstion} />
                    <AdminRoute  path='/admin/list-quesstion' component={ListQuesstion} />
                    <AdminRoute  path='/admin/list-exam' component={ListExam} />
                    <AdminRoute  path='/admin/add-exam' component={AddNewExam} />
                    <AdminRoute  path='/admin/list-student' component={Student} />
                    <AdminRoute  path="/admin/add-student" component={AddStudent} />
                    <AdminRoute  path="/admin/list-grade" component={Grade} />
                    <AdminRoute  path="/admin/select-quiz" component={SelectQuiz} />
                    <AdminRoute  path='/admin/examdetails' component={ExamDetails} />
                    
                </div>
                <div className="clearfix"></div>
                {/* <Footer /> */}
            </div>
            
        )
    };  
}
export default PageAdmin;
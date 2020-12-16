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
import Footer from '../Footer';
import FormImport from './ExamTest/FormImport';
import Form from './ExamTest/Form';
import GardeQuesstion from './Quesstion/GradeQuesstion';
import FormQuestion from './Quesstion/FormQuestion';
// import QuestionShow from './Quesstion/QuestionShow';
import ShowExam from './ExamTest/ShowExam';
import MarkExam from './ExamTest/MarkExam';

class PageAdmin extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                <Menu />
                <AdminRoute  path='/admin/add-question' component={GardeQuesstion} />
                <AdminRoute  path='/admin/add-new-question' component={AddNewQuesstion} />
                <AdminRoute  path='/admin/list-quesstion' component={ListQuesstion} />
                {/* <AdminRoute  path='/admin/list' component={QuestionShow} /> */}
                <AdminRoute  path='/admin/list' component={ShowExam} />
                <AdminRoute  path='/admin/file-import' component={Form} />
                <AdminRoute  path='/admin/list-student' component={Student} />
                <AdminRoute  path="/admin/add-student" component={AddStudent} />
                <AdminRoute  path="/admin/list-grade" component={Grade} />
                <AdminRoute  path="/admin/select-quiz" component={SelectQuiz} />
                <AdminRoute  path='/admin/examdetails' component={ExamDetails} />
                <AdminRoute  path='/admin/add-exam' component={FormImport} />
                <AdminRoute  path='/admin/list-exam' component={ListExam} />
                <AdminRoute  path='/admin/import-question' component={FormQuestion} />
                <AdminRoute  path='/admin/mark-exam' component={MarkExam} />
                
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>
            
        )
    };  
}
export default PageAdmin;
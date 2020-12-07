var db = require("../models");
var db_exam_question=db.Exam_Question;
exports.add_Exam_Question_Byid=(req,res)=>{
    console.log(req.body);
    db_exam_question
    .findAll({
        where: { Id_exam:  req.body.id}
      })
    .then(exam_question => {
        res.status(200).json({
            sucess: 'true',
            exam_question: exam_question
        });
    })
    .catch(err => {
        console.log(err );
    });
};
exports.get_Exam_Question=(req,res)=>{
    
    db_exam_question
    .findAll()
    .then(exam_question => {
        res.status(200).json({
            sucess: 'true',
            exam_question: exam_question
        });
    })
    .catch(err => {
        console.log(err );
    });
};

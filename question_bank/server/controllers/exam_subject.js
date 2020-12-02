var db = require("../models");
var db_exam_subject = db.Exam_Subject;
// var db_class=db.Class;
//get list
exports.get_List_Exam_Subject = function (req, res) {
    db_exam_subject.findAll({
        // include: [{
        //     model: db.Class, as: "Id_Grade"
        // }]
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
exports.add_Exam_Subject=function(req,res){
    db_exam_subject.create({
        Name_es:    req.body.Name_es
    }).then(details=>{
        res.status(200).json({
            code:   '200',
            details:    details
        })
    })
}
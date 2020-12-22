var db = require("../models");
var db_quesstion = db.Quesstion;
var db_answer=db.Answer;
// var db_class=db.Class;
//get list
exports.get_List_Quesstion = function (req, res) {
    db_quesstion.findAll({
        include: [{
            model: db.Answer, as: "Id_Quesstion"
        }]
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
exports.get_Quesstion_ById = function (req, res) {
    
    db_quesstion.findAll({
        include: [{
            model: db.Answer, as: "Id_Quesstion"
        }],
        where: { id:  req.body.Id_quesstion}
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
exports.add_Quesstion=function(req,res){
    var data=req.body;
    data.forEach(dt=>{
        db_quesstion.create({
            Id_topic:   dt.Id_topic,
            Id_teacher: dt.Id_teacher,
            Id_level:   dt.Id_level,
            Name_quesstion: dt.Name_quesstion,
        }).then(details=>{
            res.status(200).json({
                code:   '200',
                details:    details
            })
        });
    })
}
exports.add_Question_Answer=function(req,res){
    var data=req.body;
        db_quesstion.create({
            Id_topic:   data.Id_topic,
            Id_teacher: data.Id_teacher,
            Id_level:   data.Id_level,
            Name_quesstion: data.Name_quesstion,
        }).then(details=>{
            var Id_quesstion= details.id;
            db_answer.create({
                Id_quesstion:   Id_quesstion,
                Content:    data.Content,
                Diem:   data.Diem
            })
            db_answer.create({
                Id_quesstion:   Id_quesstion,
                Content:    data.Content,
                Diem:   data.Diem
            })
            db_answer.create({
                Id_quesstion:   Id_quesstion,
                Content:    data.Content,
                Diem:   data.Diem
            })
            db_answer.create({
                Id_quesstion:   Id_quesstion,
                Content:    data.Content,
                Diem:   data.Diem
            })
        });
}
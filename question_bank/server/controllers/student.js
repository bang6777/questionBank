var db= require('../models');
var db_student=db.Student;
var str=require('./replace');
const value=1000000;
exports.get_All_Student=function(req,res){
    db_student.findAll().then(details=>{
       res.status(200).json({
        success:    'true',
        details:    details
       });
    });
}
exports.add_Student=function(req,res){
    var Id_student="";
    var Name="";
    var dt=req.body;
    db_student.findAll().then(data=>{
        var key =data.length;
        if(key>0){
            Id_sd=data[key-1].id+value;
        }
        else{
            Id_sd=1+value;
        }
        Name=str.cutString(str.removeAccents(req.body.Name));
        Id_student=Name+Id_sd;
        db_student.create({
            Id_student:  Id_student,
            Id_subject:   dt.Id_subject,
            Name: dt.Name,
            Dob: dt.Dob,
            Gender: dt.Gender,
            Address: dt.Address,
            Phone: dt.Phone,
            Password: dt.Password
        }).then(details=>{
            res.status(200).json({
                success:   'true',
                details:    details
            })
        })
    });
   
    
}
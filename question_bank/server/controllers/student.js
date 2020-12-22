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
    // var dt=req.body;
    var items=req.body;
    db_student.findAll().then(data=>{
        var key =data.length;
        if(key>0){
            Id_sd=data[key-1].id+value;
        }
        else{
            Id_sd=value;
        }
       
       items.forEach(dt=>{
        Name=str.cutString(str.removeAccents(dt.Name));
        var i=1;
        Id_sd=Id_sd+i
        Id_student=Name+Id_sd;
           
            db_student.create({
                Id_student:  Id_student,
                Id_class:   dt.Id_class,
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
            i=i+1;
        });
   
       })
    
}
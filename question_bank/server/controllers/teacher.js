var db=require('../models');
var db_teacher=db.Teacher;
exports.get_Teacher= function(req,res){
    db_teacher.findAll().then(details=>{
        res.status(200).json({
            Code:   '200',
            details:    details
        });
    })
}
exports.add_Teacher= function(req,res){
    // var Id_teacher="";
    // var Name="";
    var dt=req.body;
    db_teacher.findAll().then(data=>{
        // var key =data.length;
        // if(key>0){
        //     Id_sd=data[key-1].id+value;
        // }
        // else{
        //     Id_sd=1+value;
        // }
        // Name=str.cutString(str.removeAccents(req.body.Name));
        // Id_teacher=Name+Id_sd;
        db_teacher.create({
            
            Id_subject: dt.Id_subject,
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
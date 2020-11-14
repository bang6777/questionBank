var db = require("../models");
var db_grade = db.Grade;
var db_class=db.Class;
//get list
exports.get_List_Grade = function (req, res) {
    db_grade.findAll({
        include: [{
            model: db.Class, as: "Id_Grade"
        }]
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
//get by id
exports.get_Grade_ById = (req, res) => {
    db_grade
        .findByPk(req.params.id)
        .then(grade => {
            res.status(200).json({
                sucess: 'true',
                grade: grade
            });
        })
        .catch(err => {
            console.log(err );
        });
};
// insert data One or Multilple
exports.add_Grade = (req, res) => {
    let items = req.body;
    var obj=['Name','Id_Grade'];
    
    if(checkErrorByName(items,obj)){
        db_grade.bulkCreate(
            items,
            { returning: true 
        }) 
        .then(function(response){
              res.json({
                success:    'true',
                details: response
            });
        })
        .catch(function(error){
            res.json({
                success:    'false',
                details: "Body param error"
            });
    }) 
    }
    else{
        res.json({
            success:    'false',
            code:   500,
            details: "Body param error"
        });
    }
};
//update grade
exports.update_Grade = (req, res) => {
    let items = req.body;
    if (items.length >= 1) {
        items.forEach(item => {
            db_grade.update({
                Name: item.Name
            },
                {
                    where: {
                        Id_grade: item.Id_grade
                    }
                }).then((stt) => {
                    if (stt >= 1) {
                        res.status(201).json({
                            success: 'true',
                            details: items
                        })
                    }
                    else {
                        res.status(400).json({
                            success: 'False',
                            code: 400,
                            details: "Body parse error"
                        })
                    }
                },
                    function (err) {
                        console.log("aaa");
                    });
        })
    }

};

exports.delete_Grade = function (req, res) {
    let items = req.body;
    items.Id_grade.forEach(item=>{
        db_grade.destroy({
            where: {
                Id_grade: item //this will be your id that you want to delete
            }
        }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
            if (rowDeleted === 1) {
                console.log('Deleted successfully');
                res.status(201).json({
                    success: 'true',
                    details: items.Id_grade
                })
            }
            else {
                res.status(400).json({
                    success: 'false',
                    code: 400,
                    details: "Body parse error"
                })
            }
        }, function (err) {
            console.log(err);
        });
    });
    
}

function checkErrorByName(items,obj){
    var check=true;
//     items.forEach(item=>{
//         for(var key in item){
//             if(item[key]=== null){
//                 check=false;
//             }
//            obj.forEach(oj=>{
//                 if(item===undefined){
//                     check=false;
//                 }
//             })
//         }

//     })
    items.forEach(item=>{
        if(item.Name === undefined){
            check=false;
        }
    })
    return check;
}
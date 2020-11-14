var db = require("../models");
var db_position_teacher = db.Position_Teacher;
// var db_class=db.Class;
//get list
exports.get_List_Position_Teacher = function (req, res) {
    db_position_teacher.findAll({
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
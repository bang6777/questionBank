var db = require("../models");
var db_quesstion = db.Quesstion;
// var db_class=db.Class;
//get list
exports.get_List_Quesstion = function (req, res) {
    db_quesstion.findAll({
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
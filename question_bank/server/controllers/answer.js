var db = require("../models");
var db_answer = db.Answer;
//get list
exports.get_List_Answer = function (req, res) {
    db_answer.findAll({
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
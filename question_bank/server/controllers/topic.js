var db = require("../models");
var db_topic = db.Topic;
// var db_class=db.Class;
//get list
exports.get_List_Topic= function (req, res) {
    db_topic.findAll({
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
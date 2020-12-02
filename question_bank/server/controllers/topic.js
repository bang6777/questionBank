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
exports.add_Topic=function(req,res){

    db_topic.create({
        Id_es:    req.body.Id_es,
        Name_topic: req.body.Name_topic,
        Content_topic:     req.body.Content_topic
    }).then(details=>{
        res.status(200).json({
            code:   '200',
            details:    details
        })
    })
}
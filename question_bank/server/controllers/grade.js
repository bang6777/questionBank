var db= require("../models");
//get list
exports.get_grade = (req, res) => {
    db.Grade.findAll().then(details => res.json({
        success: 'true',
        details,
        })
    );
};


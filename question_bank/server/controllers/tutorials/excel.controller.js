const db = require("../../models");
var db_exam = db.Exam;
var db_quesstion = db.Quesstion;
var db_exam_quesstion = db.Exam_Question;
var db_answer = db.Answer;
const readXlsxFile = require("read-excel-file/node");
const upload = function (req, res) {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    let path =
      __basedir + "/upload/" + req.file.filename;
    readXlsxFile(path).then((rows) => {
      rows.shift();
      db_exam.create({
        Id_teacher: req.Id_teacher,
        Time: req.Time,
        Pass: req.Pass,
        Note: req.Note
      }).then(exam => {
        id_exam = exam.id;
        rows.forEach((row) => {
          db_quesstion.create({
            Name_quesstion: row[1],
            Id_teacher: req.body.Id_teacher,
          }).then(qs => {
            var id_quesstion = qs.id;
            let tutorial = {
              Id_quesstion: id_quesstion,
              Content: row[2],
              Diem: row[6],
            };
            let tutorial1 = {
              Id_quesstion: id_quesstion,
              Content: row[3],
              Diem: row[6],
            };
            let tutorial2 = {
              Id_quesstion: id_quesstion,
              Content: row[4],
              Diem: row[6],
            };
            let tutorial3 = {
              Id_quesstion: id_quesstion,
              Content: row[5],
              Diem: row[6],
            };
            let tutorials = [];
            tutorials.push(tutorial, tutorial1, tutorial2, tutorial3);
            db_answer.bulkCreate((tutorials)).then(ans => {
              db_exam_quesstion.create({
                Id_quesstion: id_quesstion,
                Id_exam: id_exam
              }).then(result => {
                res.status(200).send({
                  message: "Uploaded the file successfully: ",
                  details: tutorials
                });
              })
            })
          })
        });
      });
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
module.exports = {
  upload
};
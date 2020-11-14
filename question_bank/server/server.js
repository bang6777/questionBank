const express=require("express");
const app=express();
const db=require("./models");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT =process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let	Class =require('./routes/class');
let	exam_subject =require('./routes/exam_subject');
let	grade =require('./routes/grade');
let	level =require('./routes/level');
let	position_teacher =require('./routes/position_teacher');
let	position =require('./routes/position');
let	quesstion =require('./routes/quesstion');
let	student =require('./routes/student');
let	subject =require('./routes/subject');
let	teacher =require('./routes/teacher');
let	term =require('./routes/term');
let	test_quesstion =require('./routes/test_quesstion');
let	test =require('./routes/test');
let	topic =require('./routes/topic');
let	answer =require('./routes/answer');

app.use("/v1/answer",answer);
app.use("/v1/class",Class);
app.use("/v1/exam_subject",exam_subject);
app.use("/v1/grade",grade);
app.use("/v1/level",level);
app.use("/v1/position_teacher",position_teacher);
app.use("/v1/position",position);
app.use("/v1/quesstion",quesstion);
app.use("/v1/student",student);
app.use("/v1/subject",subject);
app.use("/v1/teacher",teacher);
app.use("/v1/term",term);
app.use("/v1/test_quesstion",test_quesstion);
app.use("/v1/test",test);
app.use("/v1/topic",topic);
db.sequelize.sync().then (() => {
    app.listen(PORT, ()=> {
        console.log('listening on: http://localhost:'+PORT);
    });
    
});

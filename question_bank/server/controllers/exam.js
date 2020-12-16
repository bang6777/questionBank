var db = require("../models");
var db_topic = db.Topic;
var db_exam=db.Exam;
var db_exam_quesstion=db.Exam_Question;
var db_examdetails=db.ExamDetails;
var db_edq=db.ExamDetails_Quesstion;
// var db_class=db.Class;
//get list
exports.get_List_Exam= function (req, res) {
    db_exam.findAll({
        include: [{
            model: db.Exam_Question, as: "Id_Exam"
        }]
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
exports.post_List_Exam_ById=function(req,res){
    console.log(req.body.Id_exam_subject);
    db_exam.findAll({
        include: [{
            model: db.Exam_Question, as: "Id_Exam"
        }],
        where: { Id_exam_subject:  req.body.Id_exam_subject,
            Id_grade: req.body.Id_grade
        }

            
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
}
exports.add_Exam= function (req, res){
    var data=req.body.Id_exam;
    var result=[];
    let ketqua=[];
    var exam=null;
    db_exam.create({
        Id_teacher	:   req.body.Id_teacher,
        Time	:       req.body.Time,
        Pass	:       req.body.Pass,
        Note	:       req.body.Note,
    }).then(details=>{
        id_exam=details.id;
        data.forEach(dt=>{
            var id_topic=dt.Id_topic;
            var sl=[
                {"de": dt.de},
                {"tb": dt.tb},
                {"kho": dt.kho}
            ];
           console.log(sl);
                db_topic.findAll({
                        where: { Id:  id_topic},
                        include: [{
                        model: db.Quesstion, as: "Id_Topic",
                    }]
                })
                .then(details=>{
                    console.log(sl);
                    var Array=createIdQuestion(details);
                    var index=cutArray(checkRandom(Array,sl));
                    index.forEach(idx=>{
                        db_exam_quesstion.create({
                            Id_exam:    id_exam,
                            Id_quesstion:   idx
                        }).then(result=>{
                            res.json(details);
                        })
                    })
                })
        })
    })
}
function checkRandom(Array,sl){
    var result=[[],[],[]];
    console.log(sl[0].de);
    var level=[sl[0].de,sl[1].tb,sl[2].kho];
    var i=0;
    var kq=null;
    var num=0;
   
    while(i< sl.length){
        for(num;num<sl.length;num++){
            if(i===num){
                kq=level[i]; 
                break;
            }
        }
        while(result[i].length < kq){
            var random=Math.floor(Math.random() * Array[i].length);
            result[i].push(Array[i][random]);
            Array[i].splice(random,1);
        }
        i++;
    }
    return result;
}
function createIdQuestion(details){
    var Array=[[],[],[]];
    details.forEach(item=>{
        item.Id_Topic.forEach(it=>{
            if(it.Id_level===1){
                Array[0].push(it.id);
            }
            if(it.Id_level===2){
                Array[1].push(it.id);
            }
            if(it.Id_level===3){
                Array[2].push(it.id);
            }
        })
    })
    return Array;
}
function cutArray(result){
    var index=[];
    result.forEach(rs=>{
       rs.forEach(r=>{
           index.push(r);
       })
    })
    return index;
}
exports.Create_Exam=function(req,res){
    var data=req.body;
    console.log(data);
    db_exam.findOne({
        include: [{
            model: db.Exam_Question, as: "Id_Exam"
        }],
        where: {id: data.id}
    }).then(details => {
        if(details){
           let arrData=details.Id_Exam;
            for(let i=1;i<=data.number;i++){
                db_examdetails.create({
                    Id_exam: data.id,
                    Content: null
                }).then(res1=>{
                        var id=res1.id;
                        var ar=ranDomExam(arrData);
                        ar.forEach(ix=>{{
                            db_edq.create({
                                Id_examdetails: id,
                                Id_quesstion : ix
                            }).then(details=>{
                                res.status(200).json({
                                    code: "200",
                                    details:  details
                                })
                            })
                        }})
                })
            }
        }   
    });
}
function ranDomExam(details){
  
    var Array=[];
    var result=[];
    details.forEach(item=>{
       Array.push(item.id);
    });
    result=shuffle(Array);
    return result;
}
//swap ques
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0 ) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
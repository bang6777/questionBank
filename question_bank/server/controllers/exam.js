var db = require("../models");
var db_topic = db.Topic;
var db_exam=db.Exam;
var db_exam_quesstion=db.Exam_Question;
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
            var sl=dt.sl;
                db_topic.findAll({
                        where: { Id:  id_topic},
                        include: [{
                        model: db.Quesstion, as: "Id_Topic",
                    }]
                })
                .then(details=>{
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
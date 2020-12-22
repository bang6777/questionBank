var db=require('../models');
var db_chamdiem=db.Quesstion;
exports.get_Grade_Exam=function(req,res){
    var data=req.body;
    var Arr=[];
    data.map(dt=>{
        Arr.push(dt.question);
    })
    db.Quesstion.findAll({
        include: [{
            model: db.Answer, as: "Id_Quesstion"
        }],
        where: {id: Arr}
    }).then(data=>{
        var arr=[];
        data.map(id=>{
            arr.push(id.Id_Quesstion);
        })
        var arr2=[];
        arr.map(ar=>{
           ar.map(a=>{
            if(Number(a.Diem)===1){
                arr2.push({ question: a.Id_quesstion, answer:a.id });
            }
           })
        })
        console.log(req.body.question);
        len=req.body.length;
        let diem=10/len;
        var array1=req.body;
        const array3=array1.concat(arr2);
        let result=uniqByKeepLast(array3, it => it.answer);
        len_kq=result.length;
        var result_kq=0;
        if(len_kq>len){
            result_kq=10-(len_kq-len)*diem;
        }
        else{
            result_kq=10;
        }
        res.status(200).json({
            data:result_kq
        })
    })
}
function uniqByKeepLast(answer, key) {
    return [
        ...new Map(
            answer.map(x => [key(x), x])
        ).values()
    ]
}

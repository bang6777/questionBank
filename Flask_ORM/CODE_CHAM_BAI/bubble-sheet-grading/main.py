from flask import Flask
from flask import jsonify
from Grade import *
from flask import json
from flask import  request
from flask_cors import CORS
import random 
from functools import wraps
a=Grade()
def async_action(f):
    @wraps(f)
    def wrapped(*args, **kwargs):
        return asyncio.run(f(*args, **kwargs))
    return wrapped
app = Flask(__name__)

@app.route('/choose-folder', methods=['POST']) 
def openfile():
    data = request.json
    a.openfile(data['file_name']);
    return jsonify(data)
@app.route('/choose-folder-muitiple',methods = ['GET', 'POST'])
def chosseMuitiple():
    try:
        data = request.json
        if(data!={}):
            a.chamnhieu(data);
            return jsonify(data), 200
        else:
            return jsonify({"massage": "file empty"}), 500
    except Exception as err:
        print(err)
        return jsonify({"massage": "lỗi không thực hiện được"}), 500
@app.route('/answer', methods=['POST','GET']) 
def chosseanswer():
    data = request.json
    a.nhapdapan(data);
    return jsonify(data)
@app.route('/grade', methods=['GET']) 
def Grade():
    try:
        str_random=str(random.randint(1000, 10000))
        arr=a.chambai(str_random)
        arr1="123"
        if arr1!="":
            print("erre")
            return jsonify(arr)
        else:
            print("ok")
            return jsonify({"mess": "errre"})
    except Exception as err:
        print(err)
        return jsonify({"massage": "lỗi không thực hiện được"}), 500
if __name__ == '__main__':
    app.debug = True
    app.run(host='127.0.0.1', port=5000)
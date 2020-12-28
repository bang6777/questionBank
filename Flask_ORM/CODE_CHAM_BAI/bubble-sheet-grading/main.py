from flask import Flask
from flask import jsonify
from Grade import *
from flask import json
from flask import  request
from flask_cors import CORS
a=Grade()
app = Flask(__name__)

@app.route('/choose-folder', methods=['POST']) 
def openfile():
    data = request.json
    print(data['file_name'])
    a.openfile(data['file_name']);
    return jsonify(data)
@app.route('/choose-folder-muitiple',methods = ['GET', 'POST'])
def chosseMuitiple():
    
    try:
        data = request.json
        if(data!={}):
            a.chamnhieu(data);
            print(data)
            return jsonify(data), 200
        else:
            return jsonify({"massage": "file empty"}), 500
    except Exception as err:
        print(err)
        return jsonify({"massage": "lỗi không thực hiện được"}), 500
@app.route('/answer', methods=['POST']) 
def chosseanswer():
    data = request.json
    print(data['file_name'])
    a.nhapdapan(data['file_name']);
    return jsonify(data)
@app.route('/grade', methods=['GET']) 
def Grade():
    arr=a.chambai()
    return jsonify(arr)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
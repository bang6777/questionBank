from flask import Flask
from flask import jsonify
app = Flask(__name__)
# @app.route('/<int:number>/')
# def incrementer(number):
#     return "Incremented number is " + str(number+1)
# @app.route('/<string:name>/')
# def hello(name):
#     return "Hello " + name
# @app.route('/person/')
# # def hello():
# #     return jsonify({'name':'Jimit',
# #                     'address':'India'})
# @app.route('/numbers/')
# def print_list():
#     return jsonify(list(range(5)))
# @app.route('/home/')
# def home():
#     return "Home page"
# @app.route('/contact')
# def contact():
#     return "Contact page"
@app.route('/teapot/')
def teapot():
    return "Would you like some tea?", 418
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
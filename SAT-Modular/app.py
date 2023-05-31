from flask import Flask, render_template, request, jsonify
from werkzeug.wrappers import response
from chat import get_response

app = Flask(__name__)


@app.route('/')
def homepage():
   return render_template('base.html')

@app.post('/predict')
def predict():
    text = request.get_json().get('message')
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

@app.route('/declaraciones')
def declaraciones():
    return render_template('declaraciones.html')

@app.route('/CFDI')
def CFDI():
    return render_template('CFDI.html')


if __name__ == '__main__':
    app.run(debug=True)
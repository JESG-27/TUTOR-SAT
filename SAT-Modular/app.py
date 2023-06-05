from flask import Flask, render_template, request, jsonify
from werkzeug.wrappers import response
from chat import get_response

app = Flask(__name__)

# --------------------------------------  Ruta de inicio  --------------------------------------
@app.route('/')
def homepage():
   return render_template('inicio.html')

# --------------------------------------  Chatbot  --------------------------------------
@app.post('/predict')
def predict():
    text = request.get_json().get('message')
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

# --------------------------------------  Tutoriales  --------------------------------------
@app.route('/tutoriales')
def tutorial():
    return render_template('tutoriales.html')

@app.route('/declaraciones')
def declaraciones():
    return render_template('declaraciones copy.html')

@app.route('/CFDI')
def CFDI():
    return render_template('CFDI.html')

# --------------------------------------  Preguntas Frecuentes  --------------------------------------
@app.route('/preguntas-frecuentes')
def preguntas():
    return render_template('preguntas.html')


# --------------------------------------  Sobre nosotros  --------------------------------------
@app.route('/sobre_nosotros')
def nosotros():
    return render_template('sobre_nosotros.html')

# -------------------------------------- app.run --------------------------------------
if __name__ == '__main__':
    app.run(debug=True)
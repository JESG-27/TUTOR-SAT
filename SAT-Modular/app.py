from flask import Flask, render_template, request, jsonify, redirect
from googleSheets import questionInsert
from werkzeug.wrappers import response
from chat import get_response

app = Flask(__name__)

# --------------------------------------  Ruta de inicio  --------------------------------------
@app.route('/')
def homepage():
   return render_template('inicio.html')

# --------------------------------------  Chatbot  --------------------------------------
# @app.post('/predict')
# def predict():
#     text = request.get_json().get('message')
#     response = get_response(text)
#     message = {"answer": response}
#     return jsonify(message)

# --------------------------------------  Tutoriales  --------------------------------------
@app.route('/tutoriales')
def tutorial():
    return render_template('tutoriales.html')

@app.route('/declaraciones')
def declaraciones():
    return render_template('declaraciones.html')

# ------------------- CFDI -------------------
@app.route('/CFDI')
def CFDI():
    return render_template('CFDI.html')

# ------------------- CFDI Tutorial -------------------
@app.route('/CFDI-tutorial')
def tutorialCFDI():
    return render_template('CFDI/tutorialCFDI.html')

# --------------------------------------  Preguntas Frecuentes  --------------------------------------
@app.route('/preguntas-frecuentes', methods=['GET', 'POST'])
def preguntas():
    if (request.method == 'GET'):
        return render_template('preguntas.html')
    elif (request.method == 'POST'):
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        question = request.form['question']
        
        questionInsert(email, name, subject, question)
        return redirect('preguntas-frecuentes')


# --------------------------------------  Sobre nosotros  --------------------------------------
@app.route('/sobre_nosotros')
def nosotros():
    return render_template('sobre_nosotros.html')

# -------------------------------------- Errores --------------------------------------
def not_found(error):
    return render_template('404.html'), 404

# -------------------------------------- app.run --------------------------------------
if __name__ == '__main__':
    app.register_error_handler(404, not_found)
    app.run(debug=True)
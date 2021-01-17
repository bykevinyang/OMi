import os

from flask import Flask
from flask import render_template, url_for


from lib.process_data import find_disease_helper, find_disease, autocomplete_symptoms


app = Flask(__name__)

disease_data = find_disease_helper()
symptoms_list = []

@app.route('/')
def index():
    return render_template('index.html')


# Update symptom and disease.
@app.route('/disease/<symptom>')
def update_data(symptom):
    global symptoms_list
    symptoms_list.append(symptom.lower())

    current_symptoms = find_disease(disease_data, symptoms_list)
    if current_symptoms[1]:
        symptoms_list = current_symptoms[2]
        return {'data' : current_symptoms[0]}


    else:
        return{'data' : current_symptoms[0]}

@app.route('/autocomplete')
def autocomplete():
    autocomplete_data = autocomplete_symptoms
    return {'Symptoms' : autocomplete_data()}

@app.route('/clear')
def clear():
    global symptoms_list
    symptoms_list = []
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8080)

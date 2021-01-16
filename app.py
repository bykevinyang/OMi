import os
from flask import Flask
from flask import render_template, url_for

from lib.process_data import get_diseases, find_disease_helper, find_disease


app = Flask(__name__)

disease_data = find_disease_helper()
symptoms_ = []

# Update symptom and disease.
@app.route('/disease/<symptom>')
def update_data(symptom):
    symptoms_.append(symptom.lower())
    current_symptoms = find_disease(disease_data, symptoms_)
    if current_symptoms[1]:
        return {'Disease' : current_symptoms[0]}
    else:
        return{'Symptom' : current_symptoms[0]}

if __name__ == '__main__':
    app.run(debug=True)

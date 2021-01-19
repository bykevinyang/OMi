import os
import re
import json
import sqlite3
import wikipedia
from pprint import pprint


from flask import Flask
from flask import render_template, url_for

from lib.search_database import User, check_database
from lib.process_data import  autocomplete_symptoms, get_symptoms


app = Flask(__name__)

symptoms_list = []
user_ids = []


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/autocomplete')
def autocomplete():
    autocomplete_data = autocomplete_symptoms
    return {'Symptoms' : autocomplete_data()}

@app.route('/symptoms')
def symptoms():
    symptoms = get_symptoms()
    return symptoms


@app.route('/disease/<user_symptom>/u/<user_id>')
def update_data(user_id, user_symptom):
    check_database()
    conn = sqlite3.connect('Data/sql/users.db')
    cursor = conn.cursor()
    with open('Data/json/dataset.json') as f:
        data = json.load(f)
    user = User(str(user_id) , data, str(user_symptom), cursor)
    data =  user.search_disease()
    conn.commit()
    conn.close()
    return {'data' : data}


@app.route('/clear')
def clear():
    global symptoms_list
    symptoms_list = []
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True, port=8080)

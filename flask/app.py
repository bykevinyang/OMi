import os
import re
import json
import sqlite3
import wikipedia
from pprint import pprint


from flask import Flask
from flask import render_template, url_for

from lib.search_database import User, check_database

app = Flask(__name__)

symptoms_list = []
user_ids = []


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/symptoms/u/<user_id>')
def symptoms(user_id):
    check_database()
    conn = sqlite3.connect('Data/sql/users.db')
    cursor = conn.cursor()
    with open('Data/json/dataset.json') as f:
        data = json.load(f)
    user =  user = User(str(user_id) , data, '', cursor)
    data =  user.search_symptoms()
    conn.commit()
    conn.close()
    return {'data' : data}


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




if __name__ == '__main__':
    app.run(debug=True, port=8080)

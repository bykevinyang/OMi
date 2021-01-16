import os
from flask import Flask
from flask import render_template, url_for

from lib.process_data import get_diseases, get_symptoms


app = Flask(__name__)

######################################################################
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                 endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)
######################################################################

# app route to get a dict of all diseases
@app.route('/diseases')
def diseases():
    diseases_ = get_diseases()
    return {'diseases' : diseases_}

# app route to get a dict of all symptoms
@app.route('/symptoms')
def symptoms():
    symptoms_ = get_symptoms()

    return {'symptoms' : symptoms_}

if __name__ == '__main__':
    app.run(debug=True)

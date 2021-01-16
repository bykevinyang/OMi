from flask import Flask
from flask import render_template, url_for


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', user = 'Rami')


if __name__ == '__main__':
    app.run(debug=True)

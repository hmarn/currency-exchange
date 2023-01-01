from flask import Flask, json
from flask.logging import create_logger
from markupsafe import escape
from urllib.request import urlopen
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)
LOG = create_logger(app)
LOG.setLevel(logging.INFO)

@app.route("/")
def hello():
    LOG.info('Main request successfull')
    return "Init Currency Exchange!"

@app.route('/capitalize/<word>/')
def capitalize(word):
    return '<h1>{}</h1>'.format(escape(word.capitalize()))

@app.route('/status')
def healthcheck():
    response = app.response_class(
            response=json.dumps({"result":"OK - healthy"}),
            status=200,
            mimetype='application/json'
    )

    LOG.info('Status request successfull')
    return response

@app.route('/metrics')
def metrics():
    response = app.response_class(
            response=json.dumps({"status":"success","code":0,"data":{"UserCount":140,"UserCountActive":23}}),
            status=200,
            mimetype='application/json'
    )

    LOG.info('Metrics request successfull')
    return response

@app.route('/exchange_rate')
def exchange_rate():
    URL = 'https://openexchangerates.org/api/latest.json?app_id=5fcc6db49fdf45cb959de28cce648af2'

    with urlopen(URL) as r:
        text = r.read()

    data = app.response_class(
            response=text,
            status=200,
            mimetype='application/json'
    )
    LOG.info(f"JSON exchange_rates: \n{data}")
    return data

if __name__ == "__main__":
    LOG.info('START Flask')
    app.run(host='0.0.0.0', port=80, debug=True)
    LOG.info('SHUTDOWN Flask')

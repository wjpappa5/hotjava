import json
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/samples")
def samples():
    json_file = 'static/data/samples.json'
    pry = open(json_file)
    data = json.load(pry)
    return data


if __name__ == "__main__":
    app.run(debug=True)



#File Path for App: C:\Users\willj\hotjava\BellyButton
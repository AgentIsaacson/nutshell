from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
	os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)


class Survey(db.Model):
	id = db.Column(db.Integer, primary_key=True)

	name = db.Column(db.String(200), unique=False)
	company = db.Column(db.String(300), unique=False)
	city = db.Column(db.String(200), unique=False)
	state = db.Column(db.String(2), unique=False)
	email = db.Column(db.String(200), unique=False)
	phone = db.Column(db.String(12), unique=False)

	# company_age = db.Column(db.String(50), unique=False)

	# set_apart = db.Column(db.String(500), unique=False)

	# look_for1 = db.Column(db.String(500), unique=False)
	# look_for2 = db.Column(db.String(500), unique=False)
	# look_for3 = db.Column(db.String(500), unique=False)

	# company_look_for1 = db.Column(db.String(500), unique=False)
	# company_look_for2 = db.Column(db.String(500), unique=False)
	# company_look_for3 = db.Column(db.String(500), unique=False)

	# experience = db.Column(db.Integer(2), unique=False)

	# work_links = db.Column(db.String(200), unique=False)

	# competitor1 = db.Column(db.String(200), unique=False)
	# competitor2 = db.Column(db.String(200), unique=False)
	# competitor3 = db.Column(db.String(200), unique=False)

	# why_competitor1 = db.Column(db.String(500), unique=False)
	# why_competitor2 = db.Column(db.String(500), unique=False)
	# why_competitor3 = db.Column(db.String(500), unique=False)

	# video = db.Column(db.String(200), unique=False)

	# reviews = db.Column(db.String(200), unique=False)

	# price = db.Column(db.String(200), unique=False)

	# other_info = db.Column(db.String(500), unique=False)

	def __init__(self, name, company, city, state, email, phone):
		self.name = name
		self.company = company
		self.city = city
		self.state = state
		self.email = email
		self.phone = phone


class SurveySchema(ma.Schema):
	class Meta:
		fields = ('name', 'company', 'city', 'state', 'email', 'phone')


survey_schema = SurveySchema()
surveys_schema = SurveySchema(many=True)

# @app.route("/")
# def hello():
# 	return "Hey Flask"


@app.route("/survey", methods=["POST"])
def add_survey():
	name = request.json["name"]
	company = request.json["company"]
	city = request.json["city"]
	state = request.json["state"]
	email = request.json["email"]
	phone = request.json["phone"]

	new_survey = Survey(name, company, city, state, email, phone)

	db.session.add(new_survey)
	db.session.commit()

	survey = Survey.query.get(new_survey.id)

	return survey_schema.jsonify(survey)


@app.route("/surveys", methods=["GET"])
def get_surveys():
	all_surveys = Survey.query.all()
	result = surveys_schema.dump(all_surveys)
	return jsonify(result.data)


@app.route("/survey/<id>", methods=["GET"])
def get_survey(id):
	survey = Survey.query.get(id)
	return survey_schema.jsonify(survey)


@app.route("/survey/<id>", methods=["PUT"])
def survey_update(id):
	survey = Survey.query.get(id)
	name = request.json["name"]
	company = request.json["company"]
	city = request.json["city"]
	state = request.json["state"]
	email = request.json["email"]
	phone = request.json["phone"]

	survey.name = name
	survey.company = company
	survey.city = city
	survey.state = state
	survey.email = email
	survey.phone = phone

	db.session.commit()
	return survey_schema.jsonify(survey)



@app.route("/survey/<id>", methods=["DELETE"])
def survey_delete(id):
	survey = Survey.query.get(id)
	db.session.delete(survey)
	db.session.commit()

	return survey_schema.jsonify(survey)


if __name__ == '__main__':
	app.run(debug=True)

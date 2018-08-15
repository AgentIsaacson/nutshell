from flask import Flask
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

if __name__ == '__main__':
    app.run(debug=True)

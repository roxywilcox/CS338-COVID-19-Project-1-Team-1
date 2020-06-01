from flask import Flask
from flask import render_template, request, jsonify
from sqlalchemy import create_engine
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Date
from sqlalchemy import Text
from sqlalchemy import create_engine
from sqlalchemy import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from flask import make_response

app = Flask(__name__)
app.config["DEBUG"] = True

Base = declarative_base()


class Covid(Base):
    __tablename__ = 'covid-19'
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    state = Column(Text)
    fips = Column(Integer)
    cases = Column(Integer)
    deaths = Column(Integer)


class CovidCase(Base):
    __tablename__ = 'covid-tested'
    id = Column(Integer, primary_key=True)
    date = Column(Text)
    state = Column(Text)
    positive = Column(Integer)
    negative = Column(Integer)
    pending = Column(Integer)
    hospitalizedCurrently = Column(Integer)
    hospitalizedCumulative = Column(Integer)
    inIcuCurrently = Column(Integer)
    inIcuCumulative = Column(Integer)
    onVentilatorCurrently = Column(Integer)
    onVentilatorCumulative = Column(Integer)
    recovered = Column(Integer)
    dataQualityGrade = Column(Text)
    death = Column(Integer)
    totalTestResults = Column(Integer)
    deathIncrease = Column(Integer)
    hospitalizedIncrease = Column(Integer)
    negativeIncrease = Column(Integer)
    positiveIncrease = Column(Integer)
    totalTestResultsIncrease = Column(Integer)


engine = create_engine("mysql+pymysql://root:12345678@localhost:3306/covid", echo=True)
conn = engine.connect()
DBSession = sessionmaker(bind=engine)
session = DBSession()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/case', methods=['GET', 'POST'])
def c_cases():
    covids = session.query(CovidCase).filter_by(state="IL")[:70:-1]
    msg = []
    for covid in covids:
        temp = {"date": str(covid.date)[:4] + "-" + str(covid.date)[4:6] + "-" + str(covid.date)[6:8],
                "case": int(covid.positiveIncrease/100),
                "test": int(covid.totalTestResultsIncrease/100)}
        msg.append(temp)
    response = make_response(jsonify(msg))
    response.headers['Access-Control-Allow-Origin'] = '*'
    session.close()
    return response


@app.route('/case19', methods=['GET', 'POST'])
def c_cases_19():
    covids = session.query(CovidCase).filter_by(state="IL")[:30:-1]
    msg = []
    for covid in covids:
        daily_case = {"date": covid.date, "case": int(covid.positive), "positiveIncrease": covid.positiveIncrease,
                      "totalTestResultsIncrease": covid.totalTestResultsIncrease,
                      "totalTestResults": covid.totalTestResults}
        msg.append(daily_case)
    response = make_response(jsonify(msg))
    response.headers['Access-Control-Allow-Origin'] = '*'
    session.close()
    return response


if __name__ == '__main__':
    app.run('127.0.0.1', port=5000, debug=True)

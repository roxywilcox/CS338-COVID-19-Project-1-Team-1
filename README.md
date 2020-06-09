# CS338-COVID-19-Project-1-Team-1

## Project Goals

We designed our own end-to-end project, using the COVID-19 data that we ingested, featuring visualizations on a webpage that portrayed the data in a way that would be accessible to the public. The goal of the web page was to compare Illinois state orders (such as lockdowns and various reopenings) with COVID-19 related data points, such as number of cases, number of unemployment claims filed, and number of tests conducted. These visualizations highlight the direct effects that government Stay-At-Home orders have on these factors. Our approach to implementation was to build out the data pipelines, create a functional front-end, and connect the data to the front-end with our own backend server. 

## File Descriptions
* backend: load covid data from database to frontend webpage.
* frontend/app: frontend webpage using react.
* covid-data.csv: data we use in the project. Need to be imported to database locally.

## Installation
Following packages must be installed to run the project:

- Backend:
	- Mysql (or other database)
	- flask
	- sqlalchemy
- Frontend:
	- follow instrutions in frontend/app to run react project.
	- additional packages include react-timeseries-charts and pondjs.

	
## Steps to run 
1. Load the covid-data.csv to local database. 
2. Modify line 31 and line 55 in app.py in order to run the backend correctly.
3. Run the backend by running app.py using following command in backend/ :
 
	```bash
	python3 app.py
	```

4. Run the frontend in frontend/app :

	 ```bash
	npm start
	```


## The Makefile includes instructions on environment setup and lint tests
# Create and activate a virtual environment
# Install dependencies in requirements.txt
# Dockerfile should pass hadolint
# app.py should pass pylint
# (Optional) Build a simple integration test
env:
	#Show information about environment
	which python3
	python3 --version
	which pylint

setup:
	# Create python virtualenv & source it
	# source ~/.currency-exchange/bin/activate
	python3 -m venv ~/.currency-exchange

lint:
	# See local hadolint install instructions:   https://github.com/hadolint/hadolint
	# This is linter for Dockerfiles
	hadolint Dockerfile
	# This is a linter for Python source code linter: https://www.pylint.org/
	# This should be run from inside a virtualenv
	pylint --disable=R,C,W1203,W1202 flask_app/app.py

test:
	# Additional, optional, tests could go here
	#python -m pytest -vv --cov=myrepolib tests/*.py
	#python -m pytest --nbval notebook.ipynb

install:
	# This should be run from inside a virtualenv
	pip3 install --upgrade pip &&\
		pip3 install -r requirements.txt

all: lint test install

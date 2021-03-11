#!/bin/sh

gunicorn --chdir /transformer/models/transformer wsgi:app \
	--workers 2 \
	--bind 0.0.0.0:5002 \
	--timeout 300

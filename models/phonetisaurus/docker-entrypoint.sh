#!/bin/sh

gunicorn --chdir /phonetisaurus/models/phonetisaurus wsgi:app \
	--workers 2 \
	--bind 0.0.0.0:5001 \
	--timeout 300


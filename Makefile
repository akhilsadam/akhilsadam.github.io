serve:
	python3 ./src/projects/tree.py
	python3 ./src/content/cv/gen.py
	python3 ./src/content/cv/make.py
	trunk serve

install:
	npm install webpack-cli 
[![Build Status](https://travis-ci.org/Hguimaraes/baseapolo.svg?branch=master)](https://travis-ci.org/Hguimaraes/baseapolo)

# <img src="/public/assets/imgs/thelyre_apollo.png" width="64" height="64"> Base Apolo

BaseApolo is an academic opportunity manager at the Federal University of Rio de Janeiro ([UFRJ](https://www.ufrj.br/)). This web app helps students and professors of UFRJ to disclose and search for academic opportunities such as undergraduate research, social and extension projects, college teams and more. The app was developed using the MEAN stack wich is an easy starting point with [MongoDB](https://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](https://angularjs.org/) based applications.

## Dependencies
### Linux
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js.
* *MongoDB* - <a href="https://www.mongodb.org/downloads">Download</a> and Install mongodb.
* *Gulp* - <a href="http://gulpjs.com/">Download</a> and Install Gulp.
* *Sass* - <a href="http://sass-lang.com/">Download</a> and Install Sass.

If you're using ubuntu, this is the preferred repository to use...

```bash
$ curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get update
$ sudo apt-get install git
$ sudo apt-get install nodejs
```
## Installation

### Install the App

```bash
$ git clone https://github.com/Hguimaraes/baseapolo
$ cd baseapolo && npm install
$ bower install
$ gulp build-dev
```

### Edit your env variables
You need to create an .env file in root directory and set the following variables:

```bash
DB_HOST=
PORT= (Optional)
SECRET= 
```

### Invoke node with a task manager
To run the web server you just need: 

```bash
$ node server.js
```
Then, open a browser and go to:
```bash
http://localhost:3000
```
To develop, use gulp to watch for file changes
```bash
$ gulp
```

## Technologies

### Additional Tools
* <a href="http://mongoosejs.com/">Mongoose</a> - The mongodb node.js driver in charge of providing elegant mongodb object modeling for node.js
* <a href="http://passportjs.org/">Passport</a> - An authentication middleware for Node.js which supports authentication using a username and password, Facebook, Twitter, and more.
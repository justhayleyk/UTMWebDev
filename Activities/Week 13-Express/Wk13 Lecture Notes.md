## Express

- postman test endpoints without using browser
- route = maps link
- home = / route
- restapitutorial.com http verbs
- res.send res.json -> json
- need to incorporate middleware bodyparser
- expressjs body-parser
  app.use enable/activates any middleware for express
- postman post go to body change raw to json
- read and additions should not be mixed with removals
- serving static files -- express.static
- specify node version in package.json

engines > node
scripts > start

"engines":{
"node":"10.1.0"
}

"scripts""{
"test":
"start":"node server.js" //entry point alias for long text
"end":
}


### Nodemon 
   ```npm install nodemon -g``` 
  refreshes the server everytime you save 
  nodemon server.js






heroku

use git.ignore
node_modules/

create git repo then heroku create

git push heroku master

heroku uses their own ports

var PORT = process.env.PORT || 3000;

heroku logs --tail for troubleshooting

app settings
config vars
set PORT

npm init
git init

package json
engines
scripts

heroku create
process.env.PORT

git add .
git commit -m""

git push heroku master

middleware sits in-between

templating engines

handlebars

\*.handlebars view files

2 curly braces parse html

3 doesnt parse, maintains html

views > layouts

avh git extensions




## Setting up Heroku
heroku logs --tail
1. npm init  -- git init
  package.json --> add: 
    "engines": {
      "node": "VERSION CODE"
    },
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js",
      "watch": "nodemon server.js"
    },

2. heroku create

3.  process.env.PORT || 3000
    heroku --> settings --> config vars

4. git add .
   git commit -m ""

5. git push heroku master

## Handlebars
- This is a templating engine.  
- 'each' will iterate throught an array
- 'if' will work with truthy values
- 'unless' falsey values
- example:
    ```{{#each cats}}
    {{#if sleepy}}
      {{> cats/cat-block sleep=false}}
      <button id="deleteCat">Delete</button>
    {{/if}}
  {{/each}}```
- partial --> forms and footers are highly used as partial

## mySQL + Express
- ```export PATH=${PATH}:/usr/local/mysql/bin/``` --> the command you put into your terminal to access mysql shell

## ORM 
- Object Relational Mapper 
- ability to customize our queries
- create functions for the SQL CRUD functions
```orm.selectWhere("pets", "animal_name", "Rachel");``` 
is the equivilent as 
```"SELECT * FROM ?? WHERE ?? = ?"```
- ?? (placeholders) is for table and columns
- ? (placeholders) values
- We will be using Sequalize for ORM in the future
- fuctions and callbacks:
    - functions are always first class citizens
    - async will be an issue if you try to define the function and then run console on the new var as the console.log will get called first and result in ```undefined```

### Folder Stucture
```
config
 └── connection.js  -- This is the connection to DB // Need to module.export this.
 └── orm.js
db 
 └── schema.sql
 └── seeds.sql
server.js
```

## MVC
*Look at #16 MVC Example
A way for you to organize your code/folders
Model View Controller 
- JS is not MVC but it can mimic it
Model = Data//Database//Souce of Truth (db)
View = Front End//Display Data (view)
Controller = Orchestration between Model and View//Business Logic//Manipulates Data (controllers)



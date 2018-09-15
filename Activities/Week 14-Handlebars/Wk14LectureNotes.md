

## ORM 
- Object Relational Mapper 
- ability to customize our queries
- create functions for the SQL CRUD functions
```orm.selectWhere("pets", "animal_name", "Rachel");``` 
is the equivilent as 
```"SELECT * FROM ?? WHERE ?? = ?"```
- ?? (placeholders) is for table and columns
- ? (placeholders) values

### Folder Stucture
```
config
 └── connection.js  -- This is the connection to DB // Need to module.export this.
 └── orm.js
db 
 └── schema.sql
 └── seeds.sql
server.js```

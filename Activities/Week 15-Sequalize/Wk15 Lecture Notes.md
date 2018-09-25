#Sequalize

DataTypes.STRING upper limit 255 characters
DataTypes.TEXT unlimited number of characters

## CRUD

Create - Post

Read - Get

Update - Put --> First arg is the new data we are updating. Second arg is the location where we will be updating the information.

Delete - Destroy

## Setup

init
install express bodyparser mysql2 sequalize
sequalize init config
sequalize init models
add config file
create models // define validation
setup server
sync function wrapped in the port listening

````
text: {
  type: DataType.STRING,
  allowNull: false,
  validate: {
    len: [1,140]
  }
} ```

## Saturday Sept 22nd

### Associations

Post
-> title
-> body
-> author id (foreign key)
-> post id (primary key)

Author
-> Name
-> Author key (Primary Key)

(1:many association)
````

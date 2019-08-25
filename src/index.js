const express = require('express')
const app = express()
const port = 3000

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'mysql',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('users', {
    // attributes
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

sequelize
  .sync( { force: true } ) // Force To re-initialize tables on each run
  .then(function (err) {
    console.log('It worked!'); 
    User.findAll().then(users => {
        if (users.length == 0) {
            // Create a new user
            User.create({ uid: 1, name: "John" }).then(ins => {
              console.log("added user successfuly");
            });
            
            User.create({ uid: 2, name: "Samantha" }).then(ins => {
              console.log("added user successfuly");
            });
            User.create({ uid: 1, name: "Jack" }).then(ins => {
              console.log("added user successfuly");
            });
            
            User.create({ uid: 2, name: "Michael" }).then(ins => {
              console.log("added user successfuly");
            });
        }
        // console.log("All users:", JSON.stringify(users, null, 4));
    });
  }, function (err) {
    console.log('An error occurred while creating the table:', err);
})


app.get('/user', (req, res) => {    
    User.findAll({ where: {name: req.query.name} }).then(user => {
      //console.log(user);
        // project will be the first entry of the Projects table with the title 'aProject' || null
        if (user) {
          res.json(user)
        } else {
          res.end('USER NOT FOUND')
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
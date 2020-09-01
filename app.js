const path = require('path');

const express = require('express'); //import express.js
const bodyParser = require('body-parser'); //import 3rd party package body-parser (atm it is a part of express, but it is not stable)
const mongoose = require('mongoose'); //import mongoose

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express(); //app is now an express.js application

app.set('view engine', 'ejs'); //"tells" express.js to use the templating engine ejs to render dynamic templates
app.set('views', 'views'); //"tells" express where to find that dynamic views. 'views' is the defult name that express will look for, so this line is not realy needed, but i use it to keep the option to change the views folder name

const adminRoutes = require('./routes/admin'); //impot admin pages controller
const shopRoutes = require('./routes/shop');  //import user pages controller

app.use(bodyParser.urlencoded({ extended: false })); //bodyParser will parse bodies sent by a form (other parser needed for json and other files) so now you can use req.body without getting "undeclared" it will also use next() at the end.
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => { //fake user authentication, calls next() if user is found - real authentication will be added later
    User.findById('5f42217b17f70b4abc232639') //findById - a built-in functions of mongoose
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err)); //prints to the console the error, if the user does not found
});

app.use('/admin', adminRoutes); //http://localhost:3000/admin/ (there is no page for http://localhost:3000/admin, only for http://localhost:3000/admin/otherPages)
app.use(shopRoutes); //http://localhost:3000/

app.use(errorController.get404); //ERROR 404 page not found, this middleware is activate only if admin routes and shop routes was not called

mongoose
  .connect(
    'mongodb+srv://user1:appuser1@cluster0.ibf5j.mongodb.net/shop'
  )
  .then(result => {
    User.findOne().then(user => {
      if(!user) {
        const user = new User({
          name: 'Tsuri',
          email: 'tsuri@test.com',
          cart: {
            items: []
          }
        })
        user.save();
      }
    });
    app.listen(3000); //creates a server that listen to port 3000 - shortcut to node.js way, http.creatServer()
  })
  .catch(err => {
    console.log(err);
  });

  // app.use((req, res, next) => {
//     User.findById("5f42217b17f70b4abc232639")
//       .then((user) => {
//         console.log("DISPLAY USERCART", user.cart);
//         if (!user.cart) {
//           console.log("No cart.");
//           user.cart = { items: [] };
//         }
//         req.user = new User(user.name, user.email, user.cart, user._id);
//         next();
//       })
//       .catch((err) => console.log(err));
//   });

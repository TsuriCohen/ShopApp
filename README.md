# Shop app -MVC-
this is a full shop web app, ready for generic use.

* Authentication (sign in logic, with email confirmation, and log in logic).
* Hashed passwords logic (bcryptjs salt). + reset password logic, with email confirmation.
* Add/edit/Remove products as manager - Only the user who added the product can edit/delete it.
* Shop page, main page, visiable for all users (logged in or out), add to cart option available only for logged in users
* Cart page for current curt and set order. (delete product from cart button is available).
* Orders page, shows all the user's previous orders.

### Screenshots:
* [sign in](https://i.ibb.co/FgsGkr4/signup.jpg)
* [log in](https://i.ibb.co/NWt0fVH/signin.jpg)
* [reset password email](https://i.ibb.co/5Tyw76L/passresetmail.jpg)
* [shop page - pagination](https://i.ibb.co/B3MDZQr/shop.jpg)
* [cart](https://i.ibb.co/wLmBF2F/cart.jpg)
* [buy](https://i.ibb.co/jf2fQrK/OrderNow.jpg)
* [payment page](https://i.ibb.co/sJ6cR0h/paypage.jpg)
* [add product](https://i.ibb.co/L134rcK/add-Product.jpg)
* [admin products](https://i.ibb.co/JKZ6W7b/Admin-Products.jpg)

## Dependencies:
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "connect-flash": "^0.1.1",
    "connect-mongodb-session": "^2.4.1",
    "csurf": "^1.11.0",
    "ejs": "^2.7.4",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "express-validator": "^6.6.1",
    "mongodb": "^3.6.2",
    "mongoose": "^5.10.6",
    "multer": "^1.4.2",
    "node": "^14.11.0",
    "nodemailer": "^4.7.0",
    "nodemailer-sendgrid-transport": "^0.2.0",
    "pdfkit": "^0.11.0",
    "sequelize": "^5.0.0-beta.11",
    "stripe": "^8.109.0",
    "uuid": "^8.3.0"

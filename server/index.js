// Nasıl çalıştığını görmek için
//console.log("Hello, World");
//print('Hello, World'); benzeri

// import 'package:axpress/express.dart' benzeri
const express = require('express');
const mongoose = require('mongoose');

//import from other files
const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://irembyz:nubrup-nosnu6-zoXfon@cluster0.gbos8qi.mongodb.net/?retryWrites=true&w=majority";

//middleware
// client -> middleware -> server -> client ( farklı katmanları arasındaki iletişimi sağlamak )
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);  
app.use(userRouter);

//Creating an API
// http://<youripaddress>/hello-world
//app.get('/hello-world', (req, res) => {
  //  res.json({ hi: "hello world" });
//});
// GET, PUT, POST, DELETE, UPDATE -> CRUD

//connections
mongoose.connect(DB).then(() => {
  console.log('Connection Succesful');
}).catch(e => {
  console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log('connected at port ${PORT}');
});
// localhost
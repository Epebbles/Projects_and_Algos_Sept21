require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require('./config/mongoose.config');
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json(), express.urlencoded({ extended: true })); 
require('./routes/user.routes')(app);
require('./routes/beer.routes')(app);

app.listen(process.env.MY_PORT, () => { 
    console.log('The voices in my head are speaking', process.env.MY_PORT, 'times!'); 
});
/*BEGIN EXPORT*/
//node_modules
const express =  require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
require('dotenv').config();

//routes
const routerStart = require('./routes/lobby.js')

//database
const {ConnectDb} = require('./db.js');
/*END EXPORT*/

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

app.use('/api', routerStart)

ConnectDb();

const port = process.env.PORT
app.listen(port, () =>
    console.log('App is running on port '+ port)
)
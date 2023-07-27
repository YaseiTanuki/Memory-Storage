const express =  require('express');
const {ConnectDb} = require('./db.js');
const cors = require('cors')
require('dotenv').config();
const routerHome = require('./routes/home.js')


const app = express();

app.use(cors());
app.use(express.json())
app.use('/', routerHome)

ConnectDb();

const port = process.env.PORT
app.listen(port, () =>
    console.log('App is running on port '+ port)
)
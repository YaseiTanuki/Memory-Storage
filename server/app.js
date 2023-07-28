const express =  require('express');
const {ConnectDb} = require('./db.js');
const cors = require('cors')
require('dotenv').config();
const routerStart = require('./routes/start.js')


const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', routerStart)

ConnectDb();

const port = process.env.PORT
app.listen(port, () =>
    console.log('App is running on port '+ port)
)
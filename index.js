const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const AuthRouter = require("./Routes/AuthRouter")
const cors = require('cors');
require('dotenv').config();
require("./Models/db");

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth' , AuthRouter);

app.listen(PORT , () => {
    console.log(`server is running on ${PORT}`)
});

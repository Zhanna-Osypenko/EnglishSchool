const express = require("express");
const homeRoutes = require('./home')
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
app.engine('html', require('ejs').renderFile);

app.use("/advantages", homeRoutes);
app.use(cors(corsOptions));

async function start() {
    try {
        app.listen(1234, () => {
            console.log(`Server is running on port ${1234}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();

const express = require("express");
const bodyParser = require("body-parser");
const sampleRouter = require("./router/router");
const app = express();
const port = process.env.PORT || 8080;

require("./config/mongoose")(app);

app.use(bodyParser.json());

app.use("/sample", sampleRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
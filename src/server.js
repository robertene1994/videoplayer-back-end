const express = require("express"),
    app = express(),
    cors = require("cors"),
    http = require("http"),
    path = require("path"),
    server = http.createServer(app),
    port = process.env.PORT || "4201";

// Variables
app.set("express", express);
app.set("path", path);
app.set("port", port);

// CORS config
app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://videoplayer-web.herokuapp.com/");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

// Dependencies config
app.use(cors());

// Routes
require("./routes/routes")(app);

server.listen(app.get("port"), () => {
    console.log(`Server started on port ${app.get("port")}.`);
});

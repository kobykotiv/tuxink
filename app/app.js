// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "pug-views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "pug-public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("FUCK YOU 2020");
    // res.status(200).send("pug-views")
    // res.render("index", { title: "Home" });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

// =========================================================================================================

// const express = require('express')
// const app = express()
// app.listen(3000, () => console.log('Listening on port 3000'))



// const http = require('http');
// const livereload = require('livereload');

// const express = require('express')

// const hostname = '127.0.0.1';
// const port = 3000;

// const connectLivereload = require("connect-livereload");

// const app = express();

// app.use(connectLivereload());

// __dirname = 'html';

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(__dirname);

// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello World! I am Tuxink!\nlolol &11 2');
// // });

// // server.listen(port, hostname, () => {
// //     console.log(`
// Server running at http: //${hostname}:${port}/`);
// // });
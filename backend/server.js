var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
const multer = require("multer");
var cors = require("cors");
const cassandra = require('cassandra-driver');

app.set("view engine", "ejs");
app.use("/prof_pic", express.static("public"));
app.use(cookieParser());
app.use(cors({ origin: "http://54.193.67.21:3000", credentials: true }));

app.use(
  session({
    secret: "cmpe220project",
    resave: false,
    saveUninitialized: false,
    duration: 60 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  })
);

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://54.193.67.21:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, `${new Date()}-${file.fieldname}.${file.mimetype.split("/")[1]}`);
    },
  });
  
  const upload = multer({ storage: storage });

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'test_keyspace'
  });
client.connect(function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log("Cassandra connected")
    }
}

)
app.listen(3001);
console.log("Server Listening on port 3001");

module.exports = app;

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mini",
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mini", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

con.connect(function (err) {
  if (err) throw err;
  var admin =
    "CREATE TABLE ADMIN(admin_id int(50) PRIMARY KEY, firstName char(100) NOT NULL, lastName char(100), username varchar(200) UNIQUE NOT NULL, password varchar(200) NOT NULL)";
  var users =
    "CREATE TABLE users(user_id int(50) PRIMARY KEY, firstName char(100) NOT NULL, lastName char(100), mobile_no int(240))";
  var districts =
    "CREATE TABLE ditrict(dist_id int(50) PRIMARY KEY, dist_name char(100) NOT NULL, dist_temp int(100), dist_rainfall_percent int(50), dist_soil_type varchar(150))";
  var crops =
    "CREATE TABLE crops(crop_id int(50) PRIMARY KEY, crop_name varchar(200) NOT NULL, crop_price int(100), crop_description varchar(250), crop_season varchar(150) NOT NULL, crop_soil_type varchar(150), crop_used_district varchar(200))";
  var blogs =
    "CREATE TABLE blogs(blog_id int(50) PRIMARY KEY, blog_author varchar(100) NOT NULL, blog_title varchar(100) NOT NULL, blog_description varchar(200), blog_tags char(50))";

  con.query(admin, function (err) {
    if (err) throw err;
    console.log("admin Done");
  });

  con.query(users, function (err) {
    if (err) throw err;
    console.log("users Done");
  });
  con.query(districts, function (err) {
    if (err) throw err;
    console.log("districts Done");
  });
  con.query(crops, function (err) {
    if (err) throw err;
    console.log("crops Done");
  });
  con.query(blogs, function (err) {
    if (err) throw err;
    console.log("blogs Done");
  });
});

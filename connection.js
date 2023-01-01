const mysql = require("mysql")

const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "root123",
    database: "youtube",
    port:3306
});

con.connect((err)=> {
    if(err) throw err;
    console.log("Connection created..!!");
})

module.exports.con = con;

// drop table if exists test;
// create table test (
// username TEXT,
// phoneno TEXT,
// emailid TEXT,
// gender TEXT
// );
// insert into test values('uttam','3','kl','ml');
// select * from test;

// alter user 'root'@'localhost' identified with mysql_native_password by 'root123';

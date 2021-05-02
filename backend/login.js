
var login = class login {
  
  login_user(con, req, res) {
    console.log("Connected!");

    var cql =
      "SELECT emailid, password FROM Users where emailid = '" +
      req.body.emailid + 
      "'" + "ALLOW FILTERING";
    var pass, id;
    con.execute(cql, function(err, result, fields) {
      if (err) throw err;
      
      console.log("printing password of result",result);
      pass = result.rows[0].password;
      id = result.rows[0].emailid;
      console.log("PASS AND ID:::", result.rows[0].emailid)

      if (pass === req.body.password) {
        res.cookie("cookie", id, {
          maxAge: 900000,
          httpOnly: false,
          path: "/"
        });
        req.session.user = id;
        res.writeHead(200, {
          "Content-Type": "text/plain"
        });
        res.end("Successful Login");
      } else {
        res.writeHead(401, {
          "Content-Type": "text/plain"
        });
        res.end("UnSuccessful Login");
      }
    });
  }
};

module.exports = {
  login
};

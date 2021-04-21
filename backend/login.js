
var login = class login {
  
  login_user(con, req, res) {
    console.log("Connected!");

    var cql =
      "SELECT emailid, password FROM Users where emailid = '" +
      req.body.emailid +
      "'";
    var pass, id;
    con.execute(cql, function(err, result, fields) {
      if (err) throw err;
      console.log(result[0].emailid);
      pass = result[0].password;
      id = result[0].emailid;

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

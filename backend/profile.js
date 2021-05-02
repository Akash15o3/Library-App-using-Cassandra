
var profile = class profile {
  getbasicinfo(con, req, res) {
    var cql =
      "SELECT name,password,emailid,books FROM Users where emailid = '" + req.body.emailid + "'" + "ALLOW FILTERING";
    var final;
    
    con.execute(cql, function(err, result, fields) {
      if (err) throw err;
      console.log("user prog", result.rows);
      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      // console.log(JSON.stringify(result));
      res.end(JSON.stringify(result.rows));
    });
  }
};

module.exports = {
  profile
};


var profile = class profile {
  getbasicinfo(con, req, res) {
    var cql =
      "SELECT * FROM Users where emailid = '" + req.body.emaild + "'";
    var final;

    con.execute(cql, function(err, result, fields) {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      console.log(JSON.stringify(result));
      res.end(JSON.stringify(result));
    });
  }
};

module.exports = {
  profile
};

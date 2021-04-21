var insert = class insert {
    
    insert_comp(con, body) {
      console.log("Connected!");
      var cql =
        "INSERT INTO Users (name, password, emailid) VALUES (";
      var cql1 =
        "'" +
        body.name +
        "','" +
        body.emailid +
        "','" +
        body.password +
        "')";
      console.log(cql + cql1);
      con.execute(cql + cql1, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    }
  };
  
  module.exports = {
    insert
  };
  
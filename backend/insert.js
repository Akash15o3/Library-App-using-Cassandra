var insert = class insert {
    
    insert_user(con, body,res) {
      console.log("Connected!");
      console.log("bodddy id", body.id);
      var x = parseInt(body.id);
      console.log("type of id", typeof(x));
      var cql =
        "INSERT INTO Users (id, name, password, emailid) VALUES (";
      var cql1 =
      // `'` +
      body.id +
       `,'` +
      body.name +
      `','` +
      body.emailid +
      `','` +
      body.password +
      `')`;
      console.log(cql + cql1);
      con.execute(cql + cql1, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      
        res.writeHead(200, {
          "Content-Type": "text/plain"
        });
        res.end("Record Inserted");
      });
    }
  };
  
  module.exports = {
    insert
  };
  
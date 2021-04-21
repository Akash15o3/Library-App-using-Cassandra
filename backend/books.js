var books = class books {
    getAllBooks(con, req, res) {
        var cql = `SELECT
        authors, 
        title, 
        publication_date, 
        publisher, 
        num_pages, 
        isbn
        
        FROM library_data
        `;
      con.execute(cql, function(err, result, fields) {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end(JSON.stringify(result));
      });
    }
   
    insertBook(con, req, res) {
      var cql =
        `INSERT INTO library_data(authors, title, publication_date, publisher, num_pages, isbn) VALUES (` +
        `'` +
        req.body.authors +
        `','` +
        req.body.title +
        `','` +
        req.body.publication_date +
        `','` +
        req.body.publisher +
        `','` +
        req.body.num_pages +
        `','` +
        req.body.isbn +
        `')`;
      console.log(cql);
      con.execute(cql, function(err, result) {
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
      });
    }

    searchTitle(con, req, res) {
        var cql =
          "SELECT * FROM library_data where title = '" + req.body.title + "'";
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

      searchAuthor(con, req, res) {
        var cql =
          "SELECT * FROM library_data where authors = '" + req.body.authors + "'";
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
    books: books
  };
  
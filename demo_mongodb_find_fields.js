var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // exclude the id field in the result (add "projection:{ _id: 0, etc}" to filter it.  W3Schools doesn't include this syntax. )
  dbo.collection("customers").find({}, {projection:{ _id: 0, name: 1, address: 1 }}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

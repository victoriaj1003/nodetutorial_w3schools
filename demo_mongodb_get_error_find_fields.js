var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, {projection:{ name: 1, address: 0 }}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

/* MongoError: Projection cannot have a mix of inclusion and exclusion.
    at queryCallback (/Users/victoriaboggs/node_modules/mongodb-core/lib/cursor.js:248:25) */

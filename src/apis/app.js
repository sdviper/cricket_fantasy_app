// const express = require('express');
// const bodyParser = require('body-parser');

// // create express app
// const app = express();

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

// // listen for requests
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://soumya:soumya@cluster0.1bsma.mongodb.net/criclife_fantasy_league?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("criclife_fantasy_league").collection("top_performers");
// //   console.log(client.db("criclife_fantasy_league"));
//   console.log(collection);
//   // perform actions on the collection object
//   console.log("Connected ");
//   client.close();
// });

// app.get("/personnel", (request, response) => {
//     collection.findAll({}).toArray((error, result) => {
//         if(error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });

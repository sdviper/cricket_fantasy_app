// const Express = require("express");
// const BodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
// const CONNECTION_URL = "mongodb+srv://soumya.somu97@gmail.com:Sdviper@45@cluster0.1bsma.mongodb.net/criclife_fantasy_league?retryWrites=true&w=majority";;
// // const DATABASE_NAME = "accounting_department";


// var app = Express();
// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({
//   extended: true
// }));
// var database, collection;

// app.listen(5000, () => {
//   MongoClient.connect(CONNECTION_URL, {
//     useNewUrlParser: true
//   }, (error, client) => {
//     if (error) {
//       throw error;
//     }
//     database = client.db(DATABASE_NAME);
//     collection = database.collection("personnel");
//     console.log("Connected to `" + DATABASE_NAME + "`!");
//   });
// });
// app.get("/get_match_predictions", (request, response) => {
//   collection.find({}).toArray((error, result) => {
//     if (error) {
//       return response.status(500).send(error);
//     }
//     response.send(result);
//   });
// });

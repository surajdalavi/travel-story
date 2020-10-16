const db = require("mongoose");
db.connect("mongodb://localhost:27017/TravelStory",{useNewUrlParser:true,useUnifiedTopology:true}, (err) => {
  if (!err) {
    console.log("connected to mongoDB");
  } else {
    console.log("error connecting to mongoDB");
  }
});
module.exports = db;

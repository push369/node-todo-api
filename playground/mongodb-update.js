// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: ObjectID('5a86671c227fc5c4b8391244')},{
//     $set: {
//       completed: true
//     }
//   },{
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

db.collection('Users').findOneAndUpdate({ name: 'Shivaay'},{
  $inc: { age: +1},
  $set: { name: 'Om Shivaay'}
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


  // db.close();
});

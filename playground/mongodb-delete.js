// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });
//deleteOne
// db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
//   console.log(result);
// });
//findOneAndDelete
// db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').deleteMany({name: 'Chintu'});
db.collection('Users').deleteOne({name: 'Shivaay'});
db.collection('Users').findOneAndDelete({_id: new ObjectID('5a85c2981f8d342f4931d523')}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

  // db.close();
});

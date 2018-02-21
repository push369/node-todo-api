const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//   console.log(results);
// });


//Todo.findOneAndRemove({}).then((results) => {
//   console.log(results);
// });

Todo.findByIdAndRemove('5a8d8e7be5b8b5696a748ae1').then((todo) => {
  console.log(todo);
});

Meteor.publish('books',
  function(){
  return Books.find();
})

Meteor.publish('movies',
  function(){
  return Movies.find();
})

Meteor.publish('tv',
  function(){
  return Tv.find();
})

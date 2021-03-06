const yourMovies = [
  {title: "Wonder Woman", director:"Patty Jenkins", genre:"superhero"},
  {title: "Guardians of the Galaxy", director:"James Gunn", genre:"superhero"},
  {title: "The Imitation Game", director:"Morten Tyldum", genre:"historical"},
  {title: "Moana", director:"Ron Clements", genre:"fantasy"},
  {title: "Batman", director:"Leslie Martinson", genre:"superhero"},
  {title: "The Prestige", director:"Christopher Nolan", genre:"thriller"},
  {title: "Prince of Egypt", director:"Brenda Chapman", genre:"drama"},
  {title: "Moonrise Kingdom", director:"Wes Anderson", genre:"young adult"},
  {title: "Amelie", director:"Jean-Pierre Jeunet", genre:"comedy"},
  {title: "Midnight in Paris", director:"Woody Allen", genre:"fantasy"}
]

Template.movies.onCreated(function moviesCreated(){
  //this.state = new ReactiveDict();
  Meteor.subscribe('movies');
});

Template.movies.helpers({
	movies() {return Movies.find()}
})
Template.movies.events({
  'click button'(element,instance){
    const title= instance.$('#title').val();
    const director= instance.$('#director').val();
    const genre= instance.$('#genre').val();


    console.log('adding '+title);
    instance.$('#title').val("");
    instance.$('#director').val("");
    instance.$('#genre').val("");
    var film= {title:title, director:director, genre:genre}
    Meteor.call('movies.insert',film);
  }
})

Template.moviehelp.events({
  'click button'(element, instance){
    console.dir(this);
    console.log(this);
    console.log(this.s._id);
    Meteor.call('movies.delete',this.s._id);
  }
})

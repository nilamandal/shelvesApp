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

Template.movies.helpers({
	movieData: yourMovies
})

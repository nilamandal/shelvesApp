const yourTV = [
  {title: "The Flash", channel:"CW", genre:"superhero"},
  {title: "Legends of Tomorrow", channel:"CW", genre:"superhero"},
  {title: "Daredevil", channel:"Netflix", genre:"superhero"},
  {title: "Once Upon a Time", channel:"ABC", genre:"fantasy"},
  {title: "Supernatural", channel:"CW", genre:"fantasy"},
  {title: "Doctor Who", channel:"BBC", genre:"science fiction"},
  {title: "Sherlock", channel:"BBC", genre:"mystery"},
  {title: "Master of None", channel:"Netflix", genre:"comedy"},
  {title: "It's Always Sunny in Philadelphia", channel:"FX", genre:"comedy"},
]

Template.tv.helpers({
	tvData: yourTV
})

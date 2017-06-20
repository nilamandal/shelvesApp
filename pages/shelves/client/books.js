const yourBooks = [
  {title: "Name of the Wind", author:"Patrick Rothfuss", genre:"fantasy", rating:"1"},//colons
  {title: "The Looking Glass War", author:"John Le Carre", genre:"mystery", rating:"2"},
  {title: "Fruits Basket", author:"Natsuki Takaya", genre:"comedy", rating:"3"},
  {title: "The Lightning Thief", author:"Rick Riordan", genre:"fantasy", rating:"4"},
  {title: "Tokyo Ghoul", author:"Sui Ishida", genre:"horror", rating:"5"},
  {title: "Gone Girl", author:"Gillian Flynn", genre:"mystery", rating:"1"},
  {title: "An Ember in the Ashes", author:"Sabaa Tahir", genre:"fantasy", rating:"2"},
  {title: "The Miserable Mill", author:"Lemony Snicket", genre:"childrens", rating:"3"},
  {title: "American Gods", author:"Neil Gaiman", genre:"fantasy", rating:"4"},
  {title: "The Republic of Thieves", author:"Scott Lynch", genre:"fantasy", rating:"5"}
]

Template.books.helpers({
	books() {return Books.find()}
})


Template.books.events({
  'click button'(element,instance){
    const title= instance.$('#title').val();
    const auth= instance.$('#author').val();
    const genre= instance.$('#genre').val();
    const rating= instance.$('#rating').val();

    console.log('adding '+title);
    instance.$('#title').val("");
    instance.$('#author').val("");
    instance.$('#genre').val("");
    instance.$('#rating').val("");
    Books.insert({title:title, author:auth, genre:genre, rating:rating});
  }
})

Template.tablehelp.events({
  'click span'(element, instance){
    console.dir(this);
    console.log(this);
    console.log(this.s._id);
    Books.remove(this.s._id);
  }
})

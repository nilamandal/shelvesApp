const ourSponsors = [
 {name:"Google",amt:"$50 million"},
 {name:"Apple",amt:"$20 million"},
 {name:"Facebook",amt:"$40 million"},
 {name:"My mom", amt:"$4"},
 {name:"Tim Hickey", amt:"$3 million"}
]

Template.sponsors.helpers({
	sponsorData: ourSponsors,
  today: new Date()
})

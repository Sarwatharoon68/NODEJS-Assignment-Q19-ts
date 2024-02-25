// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
var guest = ["Sra", "Zahra", "Nida", "Huda"];
var canNotattend = "Huda";
var newGuest = "Farwa";
guest[guest.indexOf(canNotattend)] = newGuest;
guest.unshift("Nasreen");
var middleGuest = "Sarwat";
var middleIndex = guest.length / 2;
guest.splice(middleIndex, 0, middleGuest);
guest.push("Warda");
// console.log(guestArr);
console.log(guest.length + " " + "please" + " " + "are invited to dinner");

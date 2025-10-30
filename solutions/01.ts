function translatePossessed(message: string): string {
  if (message.trim() === "") {
    return "";
  }
  return message
    .split(" ")
    .reduce(
      (result, word) => result.concat(" ", ...word.split("").reverse()),
      ""
    )
    .slice(1);
}

const message1 = "i yojne gnihctaw uoy";
const response1 = translatePossessed(message1); // "i enjoy watching you"
console.log(response1);

const message2 = "siht si gnorw";
const response2 = translatePossessed(message2); // "this is wrong"
console.log(response2);

const message3 = "      ";
const response3 = translatePossessed(message3); // ""
console.log(response3);

const message4 = "dooG secitcarP";
const response4 = translatePossessed(message4); // "Good Practices"
console.log(response4);

/* 
Candies earned: 20
4,308 ops/s
Bonus for solving on release day! +5
*/

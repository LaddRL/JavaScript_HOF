console.log("Hello World!\n==========\n");

// Exercise 1 Section
function plus(number){
    return ((plusNumber) => {
        return plusNumber + number;
    });
}
let plusFifteen = plus(15);
console.log(plusFifteen(10));

// Exercise 2 Section
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((hobbits) => {
    console.log(hobbits.name)
  })
// Exercise 3 Section
const namesAndScores = users.map((user)=>{
    return {name: user.name, score: user.score}
});
console.log(namesAndScores);


// Exercise 4 Section
const activeNames = users.filter((user) =>{
        return user.name;
});
console.log(activeNames)

const isOlder = users.filter((user) =>{
    return user.age > 37;
});
console.log(isOlder)


// Exercise 5 Section
let  scoreDesc= users.sort((user1, user2)=>{
    return user2.score - user1.score
})
console.log(scoreDesc);

// Exercise 6 Section

let sumScore = users.reduce((sum, user) => {
    return sum + user.score;
}, 0);
console.log(sumScore);
console.log(sumScore / users.length);
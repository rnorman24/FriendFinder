var friendArray = [
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Fred",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        2
      ]
  },
  {
    "name":"Opie",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        3
      ]
  },
  {
    "name":"Gern",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        4
      ]
  },
  {
    "name":"Pete",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        5
      ]
  }
];
const fred = [ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ];
const gern = [ 5, 4, 3, 2, 1, 1, 2, 3, 4, 5 ];
// 3 + 1 + 2 + 4 + 2 + 4 = 16
let curSum = 50;
let nameMatch;
let photoMatch;
let m = 0;
for (let j = 0; j < friendArray.length; j++) {
  let totalSum = 0;
  for (let i = 0; i < 10; i++) {
    sum = Math.abs(gern[i] - friendArray[j].scores[i]);
    
    totalSum = sum + totalSum;
    
  }
  console.log(totalSum);
  if (totalSum < curSum) {
    curSum = totalSum;
    friendArray[m] = friendArray[j];
  }
}
console.log(friendArray[m].name);
console.log(friendArray[m].photo);
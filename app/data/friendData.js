// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially it's populated with 6 "dummy" friends to compare to.
// But it could have been an empty array as well.
// ===============================================================================

var friendArray = [
  {
    "name":"Sophia",
    "photo":"./images/model-1802142_640.jpg",
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
    "name":"Beth",
    "photo":"./images/woman-3152203_640.jpg",
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
    "name":"Star",
    "photo":"./images/fashion-3080644_640.jpg",
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
    "name":"Zoe",
    "photo":"./images/woman-3190858_640.jpg",
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
    "name":"Cindy",
    "photo":"./images/flower-2587531_640.jpg",
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
  },
  {
    "name":"Jenny",
    "photo":"./images/woman-3439488_640.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        2,
        2,
        5,
        4,
        5
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;

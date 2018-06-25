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
    "photo":"https://cdn.pixabay.com/photo/2018/02/14/06/18/woman-3152203_640.jpg",
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
    "photo":"https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_640.jpg",
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
    "photo":"https://cdn.pixabay.com/photo/2018/03/01/14/57/woman-3190858_640.jpg",
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
    "photo":"https://cdn.pixabay.com/photo/2016/09/01/18/25/fall-1636872_640.jpg",
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
    "photo":"https://cdn.pixabay.com/photo/2018/02/12/17/19/woman-3148784_640.jpg",
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

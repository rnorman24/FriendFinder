# Friend Finder - Node and Express Servers

### Overview

In this activity, I built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Express is used to handle routing. The app is deployed to Heroku so other users can fill it out.


### Data Organization

* The folders amd data are organized as following:

  ```
  FriendFinder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Features

1. 10 question survey, each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

3. `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route is used to handle the compatibility logic. 

5. The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects follow the format below.

```json
{
  "name":"Sophia",
  "photo":"https://cdn.pixabay.com/photo/2016/11/06/02/49/model-1802142_640.jpg",
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
}
```

6. The user's most compatible friend uses the following algorithm:

   * Each user's results is converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * The difference between current user's scores against those from other users are compated, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Absolute value was used to calculate the differences. Put another way: no negative solutions! The app calculates both `5-3` and `3-5` as `2`, and so on. 
   * The closest match is the user with the least amount of difference.

7. Once the current user's most compatible friend is found, the results are displayed as a modal pop-up.
   * The modal displays both the name and picture of the closest match. 

- - -

### Application Links

The app is hosted on Heroku at the following link (https://salty-taiga-65994.herokuapp.com/).

And also can be found on my portfolio page at (https://rnorman24.github.io/Responsive-Portfolio/).

- - -
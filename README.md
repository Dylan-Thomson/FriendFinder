# FriendFinder
## Connect users to their most compatible friend
[Live Heroku Site](https://lit-caverns-99168.herokuapp.com/)

FriendFinder is a fullstack web application built with Node.js and Express where the user is asked to submit a name and image link, then fills out a survey of personality questions. Upon pressing submit, the client makes a `POST` request to the server which pushes the new user to an object array, calculates their best match, and sends the best match back to the client in order to be displayed to the user. The user can also click `API Friends List` in order to get a raw JSON object containing all of the friends being stored on the server.

The matching algorithm takes the user's answers, scored from 1 to 5, and compares them to the answers of each friend stored on the server. It determines the absolute value of difference between each answer, then adds up these differences to calculate the total difference. As it loops through each friend, it updates the best match based on the lowest total difference between answers. Once the loop is finished, it sends the best match back to the client.

* Example:
    * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    * User 2: `[3, 2, 3, 4, 1, 2, 5, 3, 4, 1]`
    * Total Difference: 2 + 1 + 1 + 0 + 4 + 1 + 3 + 2 + 0 + 0 = **14**

## Packages used: 
* [express](https://www.npmjs.com/package/express)
* [path](https://nodejs.org/api/path.html)

## Libraries/Frameworks used:
* [Bootstrap](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Font Awesome](https://fontawesome.com/)

## Challenges
We were given a specific directory structure to work with, which separated the main server script, routing logic, and static files. It took a bit of research to figure out how to use the correct paths in different files. The `path` module was indispensible in building relative filepaths for the routes and static files.

Initially, I calculated the best match by summing each array and comparing the difference from there. However I realized that by doing it this way, users who answered very differently (for example, answering 5 and 1 on opposite questions) would be matched together. In order for the matching algorithm to work properly, the differences between individual questions must be considered. I'll admit that I felt rather silly when I realized my mistake, but it reinforced the importance of testing and pseudocoding.

## Potential Changes
* Incorporate friends into a database for permanent storage (if the server ever restarts, the data is lost)
* Use Handlebars to serve static content
* Allow user to browse friends and see how their scores match up
* More detailed profiles
* More test questions or different tests to choose from
* User accounts
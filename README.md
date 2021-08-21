# App to show the list of Gists by a username

This project was built on React and redux which is bootstrapped with create-react-app,
which includes Jest for testing.


## How to run the app

In the project directory, you should run:

### `yarn install || npm install`

Installs the necessary packages for the app.

### `yarn start || npm run start`

Runs the app in the development mode.

## Open http://localhost:3000(default) 
On opening the app in browser you will find a search bar and search button. On searching for any github user you should be able to see all the public gists of that user along with the languages used in the gist and the creation additional to that you also have an option to see last 3 forks of the gist. 

On clicking on the description of the gist you will be redirected to the gist page.

On clicking on "show forks" you will see the profiles(usernames) of last 3 users who forked the gists along with their avatars. On clicking on either of this you will be redirected to the  github profile page of the user.  

### `yarn test || npm run test`
Will run the tests for all three components which are used to build the app

## Code structure
**src** folder contains all the crucial code of the project.

**__tests__** folder contains all the tests.

**common** folder includes the redux code, all the action, reducers and store

**containers** folder contains the React components which are rendered on the browser. All the components are encapsulated in UserGists director as a representation of how they are displayed on the screen with UserGists repesenting the whole page.


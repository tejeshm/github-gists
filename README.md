# App to show the Gists history by a username.

An app built on React and redux which helps discover the list of gists created by a GitHub user,
App is bootstrapped with create-react-app which includes Jest for testing.


## Requirements

Node.js > 12.0.0

npm > 5

## How to run the app

In the project directory, you should run:

### `yarn install || npm install`

Installs the necessary packages for the app.

### `yarn start || npm run start`

Runs the app in the development mode.

## Open http://localhost:3000(default)

1. Opening the app in the browser http://localhost:3000;
2. In the search bar search for the username of a Github user.
3. You will see the list of gists created by the user.
4. You can click on the description of a gist to get redirected to the Gist page.
5. You can click on “show forks” to see the last three forks of the gist.

### `yarn test || npm run test`
Will run the tests for all three components which are used to build the app

## Code structure

**src** folder contains all the crucial code of the project.

**__tests__** folder contains all the tests.

**common** folder includes the redux code, all the action, reducers and store

**containers** folder contains the React components which are rendered on the browser. All the components are encapsulated in UserGists director as a representation of how they are displayed on the screen with UserGists representing the whole page.



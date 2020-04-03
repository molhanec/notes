# Notes App

Notes App demo project for BSC.

Author: [Michal Molhanec](https://github.com/molhanec)

## Supported Browsers

The app was succesfully tested on Windows 10 x64 using the following
browsers:

- Google Chrome 80.0.3987.163 (64bit)
- Mozilla Firefox 74.0 (64bit)

## Prerequisities

### NodeJS + Yarn 1

To install NodeJS: https://nodejs.org/en/ \
Tested with the version 12.9.1.

To install Yarn: https://classic.yarnpkg.com/en/docs/install \
Tested with the version 1.13.0

## Running in the development mode

Run the commands:

```
yarn
yarn start
```

in the project directory.

Runs the app in the development mode.<br />
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

## Running the production build

You can run the production build like this:

```
yarn
yarn build
yarn global add serve  # Not necessary if you already done it
serve -s build
```

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Running the tests

Run `yarn test` in the project directory.

## Used technologies

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Bootstrap](https://getbootstrap.com/)
- [Reactstrap](https://reactstrap.github.io/)
- [Styled Components](https://www.styled-components.com/)
- [React Router](https://reacttraining.com/react-router/)
- [Connected React Router](https://github.com/supasate/connected-react-router)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

and their dependencies.

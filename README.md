# Movie Browser Project
This is a practice project that I've written from scratch to practice along to the Harvard CS50 Mobile Apps React Native course.

This project involves the implementation of a movie browser. It allows users to search for movies included in the [Open Movie Database](http://www.omdbapi.com/)
and view additional information about any movies they select.

## Requirements
- Some of the libraries imported and used:
  - `expo`
  - `react`
  - `react-native`
  - `prop-types`
  - `react-navigation`
  - `react-redux`
  - `redux-persist`
  - `redux-thunk`
  - `jest`
  - [Jest Expo](https://github.com/expo/expo/tree/master/packages/jest-expo) for integration tests to test Expo / React Native.

## App features
- Multiple `StackNavigator`s through React Navigation.
- Login screen (mostly just to practice navigating through multiple screens).
- Search screen that displays 10 results. Scrolling down loads more results.
- Clear button to clear search results.
- Redux for async state management, including persisted states. I've also included Redux Thunk for Middleware management.

## Getting started
- Install [Expo](https://docs.expo.io/versions/latest/get-started/installation/). You'll need the XDE for your computer and the mobile client (Expo app) on your phone. If you prefer, you can also install the iOS simulator (Macs only) and/or the Android emulator.
- Install Node.js and Yarn if you don't already have them installed. You can check if you already have them installed by opening a terminal and running `node --version` and `yarn --version`. If numbers are printed, you're good to go. If not, [install them](https://nodejs.org/en/).
- After installing those software dependencies, you'll need to install the app's
"dependencies" (libraries that are required to run the app). From a terminal, `cd`
into this directory and run the command `yarn install`. Yarn will look at the
[`package.json`](/package.json) file's `dependencies` key and install those
libraries, as well as all of those libraries' dependencies (and the dependencies'
dependencies and so on).
- Start the Expo server in terminal with `expo start`.
- There is mock OMD API data defined in [`mockData.js`](./mockData.js) if you don't want to use the API.

## Testing suite
- [Jest](https://jestjs.io/) is used as the testing suite. A script has been added to package.json so you can run `yarn test` to run the unit tests. Alternatively you can continuously monitor tests using `yarn test:watch`.
- Any tests in files with a filename including `.test.js` will be run.
- Jest tests Redux actions and reducer code only at the moment.
- Jest Expo can be used to test any Expo or React Native code. For practice, I created a `components` folder and created `MyButton` component to test this independently of the rest of the app.
- Run `yarn test --coverage` to check coverage.

## To do
- Include a new screen that provides details for a particular movie.
- ES6 linter (and perhaps install [Airbnb's JS guide](https://github.com/airbnb/javascript/tree/master/react)?).
- Improve the aesthetics of the app. No thought has been placed into the design currently and I've used it more as a practice ground to understand different React Native components.
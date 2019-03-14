### Name of Student
Christopher Cahill
### Name of Project
Portland City Squash League Web Application 2.0

### Project Intent
This project is meant to be a replacement web application for [www.portlandsquash.org](http://www.portlandsquash.org). My goal for this project is to provide a way for league members to create a user profile, be assigned to teams by the league, report their scores, and for an administrator to intuitively manage the league and future seasons without having to change much code under the hood.


### Minimum features the project requires
* Player registration
* Ability to assign players to different teams from one season to another
* Score reporting and match-win determination
* Integrate links towards US Squash (where league results will be hosted)

### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
* React/Redux
* Firebase
* Material-UI (typography)
* react-firebase-authentication, license purchased from [Robin Wieruch](https://github.com/the-road-to-react-with-firebase/react-firebase-authentication).
* ActiveAdmin (ruby gem, not purchased) 

### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.
* Substitute request system (if you can't make a match)
* Chat/messaging system
* Arrange a challenge match (i.e. to challenge a player on your team to take their spot) - admin notification, etc.

### What additional tools, frameworks, libraries, APIs or other resources will these additional features require?
* TBD


### Draft Component hierarchy
<img src="./public/images/componentHierarchy/componentHierarchy.001.jpeg">

### State Summary
<img src="./public/images/componentHierarchy/componentHierarchy.002.jpeg">

### Draft Visual Representations

#### Landing Page

<img src="./public/images/landingPage.jpg">

#### Landing Page (when new season registration open) and new user registration

<img src="./public/images/landingPage_userReg.jpg">

#### Schedule and Schedule Detail

<img src="./public/images/scheduleDetail.jpg">

#### Enter Scores Detail

<img src="./public/images/enterScores.jpg">




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).






## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

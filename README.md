
# crwn-clothing

This is the current state of a demo project I've been working on in order to keep myself code-focused during recent unemployment. Although it would take some time to explain exactly how, this is quite a different beast from the example put forward in the original lesson plan. I had a number of issues with the methods by which the original was named and configured, and therefore I made numerous alterations, both minor and major, to bring the project more in line with my own personal preferences, as well as more in line with common features of real world projects I've tackled previously.

To give one example of this: the original's product catalog data is organized as a single object (at first a single static JSON, then a single table in a Firebase database), where individual items are nested within the categories that contain them. I reconfigured items and categories to be two distinct tables, so that overall handling could be made more flexible, first and foremost being that items can now be associated with more than one category (without breaking everything).

You can compare my version to the original here: https://github.com/ZhangMYihua/react-context-lesson

A good single file to start with would be:

https://github.com/billyzduke/crwn-clothing/client/src/stores/catalog/selectors.js

vs.

https://github.com/ZhangMYihua/react-context-lesson/blob/master/src/redux/shop/shop.selectors.js

###

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Module Federation Example

This repo is comprised of three separate React applications:

### App1
A standalone React application using React Router. It has an `Overview` component which is used by this app and also exposed for other apps to use.

### App2
A standalone React application using React Router. It uses the `Overview` component which is exposed by App1.

### AppHost
A "host" React application which imports both App1 and App2 React Router routes.

## Setup
1. Install npm packages for each of the three apps using `yarn`
2. Run each app using `yarn start`. Each app will run on a separate port.
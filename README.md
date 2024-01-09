# DFM-Sideline-Sidekick-App

This app is a React Native app with a Node backend, using a MongoDB database. Ask engineering manager about access to the Mongo database, and design lead for access to the figma.
Contact Anthony if you have any issues with setup.

## Frontend

Our frontend is in the dfm-sideline-sidekick-app folder, and it is using a framework called [Expo](https://docs.expo.dev/).
To set up, run npm install in this directory, and then npx expo start. You then have several options to run it, including using either an Android or iOS emulator. Install both of these, as we want our app to work on both Android and iOS. 

## Backend

Cd into the backend folder, and run npm install. Then npm start should run the backend. Note - to connect to the database, you need to make a .env file. Copy the .env.sample, and create a new file called .env. Get access to the database, and paste in database url to be able to connect. 

## Linting

Check out this repository for more help on setting up linters: https://github.com/TritonSE/linters. It should work already if you have ran npm install.

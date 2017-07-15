# Dmitri Wolf Code Challenge

## Create an ATM app with pin entry, balance inquiry, deposit, and withdrawl.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Other technologies added:
- Redux
- Thunk
- React-Router
- Redux-Logger

To start the server, npm start then go to http://localhost:3000/login

Since a server wasn't required, but I wanted to have a source of data external to application state (redux state),
I make a little mock-server out of a regular JavaScript function that you can find in src/http/Client.js

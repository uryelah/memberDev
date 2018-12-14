## about

A simple RESTFUL social network connected to the github API, with short posts and comments CRUD with a vintage interface inspired on DOS terminals

# mern-stack

MongoDB, Express, React/Redux, Node

## deployed at Heroku

```Link
https://protected-dawn-13112.herokuapp.com/
```

# Usage(make it run on your machine)

- You need make the both the following two run

## prerequirement

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^8.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

## optional

- React and Redux Chrome/Firefox dev tools

### Client-side usage(PORT: 3000)

```terminal
$ cd client
$ npm i
$ npm start
```

### Server-side usage(PORT: 5000)

(You need to add a JWT_SECRET in .env to connect to MongoDB -> make it run -> check your terminal for instructions
)

```terminal
$ cd server
$ npm i
$ npm run dev
```

### Both(after npm i)

\$ npm run dev

### Deploy Server to [Heroku](https://dashboard.heroku.com/)

```terminal
$ npm i -g heroku
$ heroku login(it will open a tab)
$ heroku create
$ set heroku as git branch
$ git push heroku master
```

# Dependencies(tech-stack)

| Server-side ---------------- |
| ---------------------------- |


    "bcryptjs": "^2.4.3",
    "body-parser": "^1.18.2",
    "concurrently": "^3.5.1",
    "express": "^4.16.3",
    "gravatar": "^1.6.0",
    "jsonwebtoken": "^8.2.0",
    "mongoose": "^5.0.12",
    "passport": "^0.4.0",
    "passport-jwt": "^4.0.0",
    "validator": "^9.4.1"

| Client-side ---------------- |
| ---------------------------- |


    "axios": "^0.18.0",
    "classnames": "^2.2.5",
    "jwt-decode": "^2.2.0",
    "moment": "^2.22.0",
    "react": "^16.3.1",
    "react-dom": "^16.3.1",
    "react-moment": "^0.7.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.4",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0",
    "socket.io-client": "^1.5.1"

## BUGs or comments

- Issue with redirecting back to /posts page after visiting /post/:id - redux keeps previous state

Please add anymore noted issues.

## Author

[Uryelah]

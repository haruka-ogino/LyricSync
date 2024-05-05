# LyricSync
Welcome to LyricSync. A full-stack application which allows its user to save the lyrics to their favourite songs. Collections can be created where a set of songs can be compiled and saved. Additionally, the translation to foreign songs can either be executed through the translation feature in the app, or inputted manually.

This full-stack application utilises React for the front-end, paired with Knex and SQLite on the backend, with TypeScript as the primary language across the entire stack.

## About

### Background

This project was created by moa-ha and haruka-ogino following their end of their software development bootcamp for the purposes of:
* collaboratively problem-solve
* consolidate learnings
* accountability

### Learning Goals

* consolidate our knowledge of:
    -  React components (routing and prop drilling)
    -  RESTful APIs
    -  relational databases
* authentication and authorisation
* external APIs

### Functionality goals

#### MVP

CRUD Operations:
* create, edit and delete collections
* create, edit and delete songs and their respective lyrics

AUTH:
* log in functionality
* authorisation - control CRUD operations according to each user

External APIs:
* implement the use of an external translation API

## Installation - **From the command line**

```
git clone https://github.com/haruka-ogino/LyricSync.git
cd ghibli-things
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

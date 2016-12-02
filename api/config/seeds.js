// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
require('dotenv').config();

var mongoose = require('./database');

var Book = require('../models/Book');

var books = [
  { title: "Twilight",
    author: "Stephenie Meyer",
    genre: "Vampires"
  },
  {
    title: "Design Patterns",
    author: "Gang of Four",
    genre: "Programming"
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Wizards"
  },
  {
    title: "Game of Thrones",
    author: "George R.R. Martin",
    genre: "Dragons and shit"
  }
];

var games = [
  { title: "Overwatch",
    platform: "PC",
    genre: "First-person shooter"
  },
  {
    title: "NBA 2K16",
    platform: "PS4",
    genre: "Sports"
  },
  {
    title: "League of Legends",
    platform: "PC",
    genre: "The one I suck at"
  }
];

var shows = [
  {
    title: "New Girl",
    length: 30,
    source: "Hulu"
  },
  {
    title: "Game of Thrones",
    length: 60,
    source: "HBO Go"
  },
  {
    title: "Gilmore Girls",
    length: 60,
    source: "Netflix"
  }
];

var todos = [
  {
    task: "Get off your lazy ass and exercise."
  },
  {
    task: "Maybe go look for a job you bum."
  },
  {
    task: "Go interact with other human beings, IN PERSON!!"
  }
];

Book.remove({}, function(err) {
  if(err) console.log(err);
  Book.create(books, function(err, savedBooks) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + savedBooks.length + " books.");
      mongoose.connection.close();
    }
    process.exit();
  });
});

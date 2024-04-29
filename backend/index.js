const express = require('express');
require('./db/config');
const User = require("./db/users");
const app = express();
const cors = require('cors');


const Book = require("./db/books");


app.use(cors());
app.use(express.json());

app.post('/register', async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  resp.send(result);

})

app.post("/login", async (req, resp) => {

  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    }
    else {
      resp.send('no user found')
    }
  }


});

app.post('/add-books', async (req, resp) => {
  let book = new Book(req.body)
  let result = await book.save();
  resp.send(result)
})

app.get('/get-books', async (req, resp) => {
  let book = await Book.find();
  if (book.length > 0) {
    resp.send(book);
  } else {
    resp.send({ result: "no products found" });
  }
});

app.delete('/book/:id', async (req, resp) => {

  const result = await Book.deleteOne({ _id: req.params.id })
  resp.send(result)
})

app.get('/book/:id', async (req, resp) => {
  let result = await Book.findOne({ _id: req.params.id })
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "no record find" })
  }
})

app.put("/book/:id", async (req, resp) => {
  let result = await Book.updateOne({ _id: req.params.id },
    {
      $set: req.body
    })
  resp.send(result)
})





app.listen(5000);

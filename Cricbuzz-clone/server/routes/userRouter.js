const express= require("express");
const app = express();
const chors = require("cors");
const poolu=require('../Config/server/poolu');

app.use(cors());
app.use(express.json());




//routes

user_router.get("/", async (req, res) => {
  try {
    const user = poolu.query(`SELECT * FROM user `)
    res.send({ user });
  } catch (error) {
    res.status(400).send("Internal Error");
  }
});



user_router.post("/", async (req, res) => {
  const body = req.body;
  const { username, email, password } = body;
  if (!username || !email || !password) {
    res.status(401).send({ error: "Please Fill the entire Information" });
  } else {
    "INSERT INTO user VALUES($1,$2,$3)",[username,email,password]
  }
});



user_router.post("/login", async (req, res) => {
  try {
    const body = req.body;
    const user = poolu.query(`SELECT * FROM user where email=$1`,[body.email])
    if (user.password !== body.password) {
      req.send({
        message: "Invalid email address",
      });
    } else {
      const token = sign(user.toJSON());
      res.send({
        message: "Login Successful",
        token,
      });
    }
  } catch (error) {
    res.status(400).send("Invalid Login");
  }
});



user_router.get("/loginuser", async (req, res) => {
  try {
    if (req.user) {
      res.send(req.user);
    } else {
      req.send("Login once");
    }
  } catch (error) {
    res.status.send("Token is no there");
  }
});

export default user_router;
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNhYzA4ZmYyNjY1Y2NhMmVkMGQzODQiLCJuYW1lIjoiVGFudSIsImVtYWlsIjoiZ2hhbnUxMjNAZ21haWwuY29ubSIsInBhc3N3b3JkIjoidGFudW1hbmdhbCIsImFkZHJlc3MiOiJCaHV0ZXN3YXIiLCJibG9nX2lkIjpbXSwiX192IjowLCJpYXQiOjE2NjQ3OTU0MzB9.HspRnwz968EjM6bZYpWEVh4mTfjsRK3nOORNg4spfBA";

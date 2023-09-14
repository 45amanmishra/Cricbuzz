const express= require("express");
const app = express();
const chors = require("cors");
const pooln=require('../Config/server/pooln');

app.use(cors());
app.use(express.json());



const newsRouter = express.Router();

newsRouter.get("/", async (req, res) => {
  const news = "SELECT * FROM news" ;
  res.send(news);
});

newsRouter.post("/add", async (req, res) => {
  const newsData = req.body;
  "INSERT INTO user VALUES ()",[]
});

export default newsRouter;

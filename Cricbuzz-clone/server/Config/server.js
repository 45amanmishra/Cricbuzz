const {Pool, Client} = require("pg").Pool;

const client =new Client({
  user: "postgres",
  host: "localhost",
  database: "Cricbuzz",
  password:'Aman9648',
  posrt: 5432})

const poolu=new Pool({
  user: "postgres",
  host: "localhost",
  database: "Cricbuzz",
  password:'Aman9648',
  posrt: 5432,
  database: "user"
})
const pooln=new Pool({
  user: "postgres",
  host: "localhost",
  database: "Cricbuzz",
  password:'Aman9648',
  posrt: 5432,
  database: "news"
})

module.exports = {client,poolu,pooln};


// dotenv.config();
// const user_id = process.env.SERVER_ID;
// const user_pass = process.env.SERVER_PASS;

// let url = `mongodb+srv://${user_id}:${user_pass}@cluster0.zhxb7on.mongodb.net/?retryWrites=true&w=majority`;

// async function ConnectDB(req, res){
  
//   return new Promise((resolve, reject)=>{
//     mongoose.connect(url).
//     then(()=>{
//         console.log("Connected to Database");
//         resolve();
//     }).catch((err)=>{
//         console.log("Cannot connect to Database");
//         reject(err)
//     })
//   })
// }

// export default ConnectDB;

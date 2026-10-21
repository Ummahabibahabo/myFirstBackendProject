import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}c@cluster0.kailwc7.mongodb.net/`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Successful app listening on port ${port}`);
});

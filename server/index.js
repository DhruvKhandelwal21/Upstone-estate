const express = require("express");

const cors = require("cors");
const userRoutes = require('./routes/userRoutes.js')
const propertyRoutes = require('./routes/propertyRoutes.js')
const mongoose = require("mongoose");
const app = express()
app.use(cors());
app.use(express.json({ limit: "50mb" }));

require("dotenv").config();
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/properties", propertyRoutes);
mongoose.connect(process.env.ATLAS_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> {
  console.log("db is connected successfully");
}).catch((e)=> {
  console.log(e.message);
});


const server = app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
})
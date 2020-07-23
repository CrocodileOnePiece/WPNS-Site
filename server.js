const express = require("express");
const log = console.log;
const app = express();
const path = require("path");
const PORT = 8080;
const routes = require("./routes/index");
const v = require("./routes/virtual");
const c = require("./routes/contact")
const a=require("./routes/about")
const iO = require("./routes/in")
app.set("view engine", "ejs");



// data Rendering
app.use(
  express.urlencoded({
    extended: false,
  }));
app.use(express.json());
//For sending the email


app.post("/email", (req, res) => {
  //tOdo
  //send email
   console.log('Data:', req.body);
   res.json({ message:'Message recieved!'})
});

app.post("/send", (req, res) => {
  //tOdo
  //send email
   console.log('Data:', req.body);
   res.json({ message:'Message recieved!'})
});

//serveing Files
app.use("/", routes);
app.use("/virtual", v);
app.use("/index", routes);
app.use("/contact", c);
app.use("/About", a)
app.use("/In-Office", iO)

app.use("/public", express.static("public"));



app.listen(PORT, () => {
  log("Server is starting on PORT", 8080);
});

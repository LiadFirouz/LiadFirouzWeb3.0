import express from "express";

const app = express();
const port = 3000;

//Static files are linked to and the CSS shows up.
app.use(express.static("./public/images"));
app.use('/public/images/', express.static('./public/images'));


//Render the home page "/" index.ejs
app.get("/", (req, res)=>{
  res.render("index.ejs");
});

//Add the routes to handle the render of the cv page.
app.get("/cv", (req, res)=>{
  res.render("cv.ejs");
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

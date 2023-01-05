const express = require("express")
const app =  express();
const path = require("path")

app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get("/items", (req, res) => {
  let items =  ["Book","Pencil","Apple","Laptop"];
  res.send(items);
})

app.listen(5000, () => {
	console.log("Server is running on port 5000");
})

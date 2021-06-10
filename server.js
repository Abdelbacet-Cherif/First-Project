const express = require("express");
const ConnectDB = require("./servers/helpers/ConnectDB");

const app = express();

//connect to db
ConnectDB();

//middleweares 
app.use(express.json());

//Define Routes
app.use("/register", require("./servers/routes/register"));
app.use("/login", require("./servers/routes/login"));
// app.use("/post", require("./servers/routes/post"));
app.use("/product", require("./servers/routes/product"));
app.use("/collection", require("./servers/routes/category"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on PORT : ${PORT}`));

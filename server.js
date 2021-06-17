const express = require("express");
const ConnectDB = require("./servers/helpers/ConnectDB");
const app = express();
const cors = require("cors");
const path = require("path");
const directory = path.join(__dirname, "/uploads");
const update = require("./servers/routes/update");
//connect to db
ConnectDB();

//middleweares
app.use("/uploads", express.static(directory));
app.use(express.json());
app.use(cors());

//Define Routes
app.use("/register", require("./servers/routes/register"));
app.use("/login", require("./servers/routes/login"));
// app.use("/post", require("./servers/routes/post"));
app.use("/product", require("./servers/routes/product"));
app.use("/collection", require("./servers/routes/category"));
app.use("/categories", require("./servers/routes/category"));

app.use("/api/product", require("./servers/routes/update"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on PORT : ${PORT}`));


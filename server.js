const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { errorHandler } = require("./server/middleware/errorMiddleware.js");

const app = express();
app.use(cors());

// require("./server/routes/person.routes")(app);
const connectDB = require("./server/config/db.js");
//mongoDBconnection
connectDB();
//for environment variables
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./server/routes/person.routes.js"));
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { errorHandler } = require("./server/middleware/errorMiddleware.js");
const { protect } = require("./server/middleware/authMiddleware");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// require("./server/routes/person.routes")(app);
const connectDB = require("./server/config/db.js");
//mongoDBconnection
connectDB();
//for environment variables
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./server/routes/person.routes.js"));
app.use("/api/todos", protect, require("./server/routes/toDoRoute.js"));
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});

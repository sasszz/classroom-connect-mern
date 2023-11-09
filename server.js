const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

require("./server/routes/person.routes")(app);

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});

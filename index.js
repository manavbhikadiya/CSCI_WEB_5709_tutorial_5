const express = require("express");
const app = express();
const router = require("./routes/routes");
const PORT = 8000 || process.env.PORT;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening to the PORT ${PORT}`);
});

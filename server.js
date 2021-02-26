const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//express app that takes data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));

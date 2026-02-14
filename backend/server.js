require("dotenv").config(); 
const connectDB = require("./src/db/db");

const app = require("./src/app");

connectDB();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

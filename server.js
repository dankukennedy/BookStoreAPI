require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-routes")

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to our database - use the correct imported function name
connectToDB();

// Middleware
app.use(express.json());

//routes
app.use('/api/books', bookRoutes)

//Server is running on port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
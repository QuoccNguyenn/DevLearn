require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

// mongodb+srv://jason:<password>@react-app.ynhbv58.mongodb.net/?retryWrites=true&w=majority
const connectDB = async () => {
  try {
    await mongoose.connect(
      // `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@react-app.ynhbv58.mongodb.net/react-app?retryWrites=true&w=majority`, //mongodb+srv://jason:<password>@cluster0.adzlwdj.mongodb.net/?retryWrites=true&w=majority
      `mongodb+srv://jason:jason@cluster0.adzlwdj.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
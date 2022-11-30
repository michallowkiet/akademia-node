import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import fs from "fs";
import User, { UserType } from "./models/User.model.js";

let users;

const getUsersFromFile = () => {
  const filePath = new URL("../data/users.json", import.meta.url);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const users = JSON.parse(data);
      User.insertMany(users);
    }
  });
};

const getUsers = async () => {
  users = await User.find();
};

const app: Express = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    users: users,
  });
});

const run = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/testDB");

    app.listen(3001, () => {
      console.log(`[server]: Server is running at http://localhost:3001`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
// getUsersFromFile();
getUsers();

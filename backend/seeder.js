const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");
const colors = require("colors");
const bcrypt = require("bcrypt");
const User = require("./models/userModal");
const Request = require("./models/requestModal");
const Transaction = require("./models/transactionModal");

const connectDB = require("./config/db");

connectDB();

// ADD A Admin
const admin = JSON.parse(
  fs.readFileSync(`${path.resolve()}/data/admin.json`, "utf-8")
);
const addAdmin = async () => {
  try {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
    await User.create(admin);
    console.log("admin user added!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Request.deleteMany();
    await Transaction.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-a") {
  addAdmin();
}
if (process.argv[2] === "-d") {
  destroyData();
}

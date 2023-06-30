import connectExpress from "./connectExpress";
import connectMongoose from"./connectMongoose.js"
connectExpress()
connectMongoose("mongodb://localhost/test")
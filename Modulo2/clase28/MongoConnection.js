import MongoSingleton from "./MongoSingleton.js";

const firsInstance = MongoSingleton.getInstance();
const secondInstance = MongoSingleton.getInstance();
const thirdInstance = MongoSingleton.getInstance();
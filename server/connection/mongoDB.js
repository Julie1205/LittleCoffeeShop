const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;
const { DATABASE_NAME } = require("../constants/mongoDbConstants");
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const client = new MongoClient(MONGO_URI, options);

const connectToMongoDb = async () => {
    try {
        await client.connect();
        console.log("mongoDb connected");
        return client.db(DATABASE_NAME);
    }
    catch (err) {
        console.log(err.stack);
        process.exit(1);
    }
};

const closeMongoDb = () => {
    client.close();
    console.info('MongoDB connection closed');
    process.exit();
};

module.exports = { connectToMongoDb,  closeMongoDb };


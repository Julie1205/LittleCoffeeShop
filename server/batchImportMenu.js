const drinkMenu = require("./data/drinkMenu.json");
const { MongoClient } = require("mongodb");
const { DATABASE_NAME, MENU_COLLECTION } = require("./constants/mongoDbConstants");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const batchImport = async (data) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        await db.collection(MENU_COLLECTION).insertMany(data);
        console.log("Batch imported");
    }
    catch (err) {
        console.log(err.stack);
    }
    finally{
        client.close();
    }
};

batchImport(drinkMenu);
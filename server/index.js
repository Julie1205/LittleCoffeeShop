const express = require("express");
const morgan = require("morgan");

const { 
    connectToMongoDb,  
    closeMongoDb 
} = require("./connection/mongoDB");

const { MENU_COLLECTION } = require("./constants/mongoDB");

const app = express();
const port = 8000;

app.use(morgan("tiny"));
app.use(express.json());

app.get("/menu", async(req, res) => {
    const db = req.app.locals.db;
    const results = await db.collection(MENU_COLLECTION).find().toArray();
    if(results.length === 0) {
        return res.status(404).json( { status: 404, message: "Menu not found." } );
    } else {
        return res.status(200).json({status: 200, data: results});
    }
});

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Page does not exist"
    });
});

const connect = async () => {
    const db = await connectToMongoDb();
    app.locals.db = db;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
};

connect();

//close connection to MongoDb 
process.on('SIGINT', closeMongoDb);
process.on('SIGTERM', closeMongoDb);
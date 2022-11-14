const express = require("express");
const morgan = require("morgan");
const bcrypt = require("bcrypt");

const { 
    connectToMongoDb,  
    closeMongoDb 
} = require("./connection/mongoDB");

const { MENU_COLLECTION, USERS_COLLECTION } = require("./constants/mongoDB");
const { validateForm } = require("./validations");

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

app.post("/user/login", async (req, res) => {
    const db = req.app.locals.db;
    const { email, password } = req.body;
    console.log(email)

    try {
        const result = await db.collection(USERS_COLLECTION).findOne( { "email": email } );
        if(result) {
            const match = await bcrypt.compare(password, result.password);

            if(match) {
                return res.status(200).json( { status: 200, message: "User successfully logged in", data: { firstName: result.firstName, lastName: result.lastName} } );
            } else {
                return res.status(404).json( { status: 404, message: "incorrect password" } );
            }

        } else {
            return res.status(404).json( { status: 404, message: "user not found." } );
        }
    } catch (err) {
        console.log(err.stack);
        res.status(500).json( { status: 500, message: err.message } );
    }

});

app.post("/user", async(req, res) => {
    const db = req.app.locals.db;
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    if(validateForm(firstName, lastName, email, password)) {
        //TO DO: check if email already in use

        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            const newUserInfo = {
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.toLowerCase().trim(),
                password: hash
            };

            try {
                const result = await db.collection(USERS_COLLECTION).insertOne( newUserInfo );
                if(result.insertedId) {
                    return res.status(201).json( { status: 201, message: "user created." } );
                } else {
                    return res.status(500).json( { status: 500, message: "unable to create user" } )
                }
            } catch (err) {
                console.log(err.stack);
                res.status(500).json( { status: 500, message: err.message } );
            }
        })
    } else {
        return res.status(404).json( {status: 404, data: req.body, message: "Values entered are invalid." } )
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
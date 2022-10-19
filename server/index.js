const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;

app.use(morgan("tiny"));
app.use(express.json());

app.get("/hello", (req, res) => res.status(200).json({status: 200, message: "hello"}))

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Page does not exist"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
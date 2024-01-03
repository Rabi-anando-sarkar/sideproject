const express = require('express');

const app = express();
const port = 4000;

app.get('/',(req,res) => {
    res.send("Working...");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
});
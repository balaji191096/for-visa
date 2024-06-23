const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/getFiles', async (req, res) => {
    const imageFilesDirectory = path.join(__dirname, '../Banner/Login'); // Here you have to change the file directory name 

    fs.readdir(imageFilesDirectory, (err, files) => {
        if (err)
            res.json({ statusCode: 400, message: "Unable to fetch the directory" });

        res.status(200).json({ message: "Success", data: files });
    });
});
app.listen(PORT, () => console.log("Server Listening on port " + PORT));

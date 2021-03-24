const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.get("/traditional-breakfasts", (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: "Breakfast Special",
                description: "Two eggs, choice of ham, bacon or sausage, homefries and toast or English Muffin",
                price: 7.45
            },
            {
                id: 2,
                name: "Spring Special",
                description: "Baked Beans 2 eggs, choice of bacon, ham or sausage w/ toast and homefries",
                price: 8.45
            }
        ]
    )
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
});
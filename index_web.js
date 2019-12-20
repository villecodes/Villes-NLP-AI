// require modules

const {
    ngramsDistribution,
    sentences,
} = require('markovian-nlp');

const fs = require('fs');

const express = require('express');

const app = express();

const cors = require('cors')

app.use(cors());

// method to readfile

const readFile = (fileName) => {
    try {
        let data = fs.readFileSync(fileName, 'utf8');

        return data;
    } catch (e) {
        return 'Error';
    }
}

// talk route (Fixed thanks to @Stassi)
app.get('/talk', (req, res) => {

    const document = readFile('./shook-ones-lyrics.txt');
    const sentence = () => sentences({ document });
    res.send(sentence());
});

app.listen(3000, () => {
    console.log('listening on *3000');
});
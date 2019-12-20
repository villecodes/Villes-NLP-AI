// require modules

const {
    ngramsDistribution,
    sentences,
  } = require('markovian-nlp');

const fs = require('fs');

// method to readfile

const readFile = (fileName) => {
    try {  
        let data = fs.readFileSync(fileName, 'utf8');
        
        return data;
    } catch(e) {
        return 'Error';
    }
}

// talk method (Fixed thanks to @Stassi)

const document = readFile('./shook-ones-lyrics.txt');
const sentence = () => sentences({ document });
const talk = () => console.log(sentence());

talk();
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

// talk method

const talk = () => {
    let sentanceArray = sentences({
        count: 50,
        document: readFile('./shook-ones-lyrics.txt'),
        seed: 1,
    });

    console.log(sentanceArray[Math.floor((Math.random() * sentanceArray.length + 1))]);

}

talk();
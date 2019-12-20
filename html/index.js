const textElmnt = document.querySelector('#text');
const player = new talkify.Html5Player();

player.forceLanguage("en-EN");

talkify.config.useSsml = true;


const getAndTalk = async () => {
    const response = await fetch('http://localhost:3000/talk');
    const text = await response.text();
    textElmnt.textContent = text;
    player.playText(text);
}

getAndTalk();

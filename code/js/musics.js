const musics = [
    {
        music: "This Love",
        singer: "BIGBANG",
    },
    {
        music: "Black(Feat.Jenny)",
        singer: "G-Dragon",
    },
    {
        music: "Ditto",
        singer: "NewJeans",
    },
    {
        music: "1AM",
        singer: "TAEYANG",
    },
    {
        music: "That's Hilarious",
        singer: "Charlie Puth",
    },
    {
        music: "as it was",
        singer: "Harry Styles",
    },
    {
        music: "I Like You",
        singer: "Post Malone",
    },
    {
        music: "Off My Face",
        singer: "Justin Beiber",
    },
    {
        music: "Dangerously",
        singer: "Charlie Puth",
    },
    {
        music: "Die For You",
        singer: "The Weeknd",
    },
];

const music = document.querySelector("#music span:first-child");
const singer = document.querySelector("#music span:last-child");

const todaysMusic = musics[Math.floor(Math.random() * musics.length)];

music.innerText = '🎵' + todaysMusic.music;
singer.innerText = '🎤' + todaysMusic.singer;
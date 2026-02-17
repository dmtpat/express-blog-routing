
const express = require('express')

const app = express();
const port = 3000;

const posts = [
    {
        titolo: "pippo",
        contenuto: "lorem ipsum",
        image: "/image1.jpg"
    },
    {
        titolo: "mario",
        contenuto: "lorem ipsum",
        image: "/image2.jpg"
    },
    {
        titolo: "mariella",
        contenuto: "lorem ipsum",
        image: "/image3.jpg"
    },
    {
        titolo: "gisella",
        contenuto: "lorem ipsum",
        image: "/image4.jpg"
    },
    {
        titolo: "peppe",
        contenuto: "lorem ipsum",
        image: "/image5.jpg"
    }
]

app.use(express.static('public'));

//app.get(rotta , funzione)
app.get('/', (req, res) => {
    console.log("Ecco la prima chiamata!");
    res.send("Server del mio blog");// invia una risposta alla richiesta per la rotta di base '/'
    //res.json(posts);
})
app.get('/bacheca/', (req, res) => {
    console.log("Ecco la prima chiamata!");
    //res.send("Server del mio blog");// invia una risposta alla richiesta per la rotta di base '/'
    res.json(posts);
})

app.listen(port, () => {
    console.log("la chiamata è stata accettata")
})
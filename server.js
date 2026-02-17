
const express = require('express')

const app = express();
const port = 3000;

//importo le rotte dal file delle rotte per le Entità Posts
const postsRouter = require('./routers/posts')

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

app.get('/', (req, res) => {
    console.log("Ecco la prima chiamata!");
    res.send("Server del mio blog");// invia una risposta alla richiesta per la rotta di base '/'
    //res.json(posts);
})

//applico l'uso delle rotte importate da routere imposto il prefisso come da standard REST
app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log("la chiamata è stata accettata")
})
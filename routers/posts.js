const express = require('express');
const router = express.Router();
const posts = require("../public/posts.js")



//Show (cRud)


//index (cRud)
router.get('/', (req, res) => {
    console.log("Ecco la bacheca!");
    //res.send("Server del mio blog");// invia una risposta alla richiesta per la rotta di base '/'
    res.json(posts);
})

//Show (cRud)
router.get('/:id', (req, res) => {
    res.send(`Vuoi visualizzare il post numero: ${req.params.id}`);
})

//Store (Crud)
//Il verbo POST serve a aggiungere una nuova Entità Centrale
router.post('/', (req, res) => {
    res.send(`Vuoi creare un nuovo post`);
})

//Update (crUd)
//Il verbo PUT serve a sostituitre una Entità con una completamente nuova
router.put('/:id', (req, res) => {
    res.send(`Vuoi modificare (completamente) il post numero: ${req.params.id}`);
})

//Modify (crUd)
//Il verbo PATCH serve a "pachare", modivicare il parte l'Entità
router.patch('/:id', (req, res) => {
    res.send(`Vuoi aggiornare (parzialmente) il post numero: ${req.params.id}`);
})

//Destroy (cruD)
// il verbo DELETE serve a eliminare una Entità
router.delete('/:id', (req, res) => {
    res.send(`Vuoi eliminare il post numero: ${req.params.id}`);
})

module.exports = router;

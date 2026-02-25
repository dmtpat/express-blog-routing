const posts = require("../public/posts.js")

//--------------------------------------------------------------------
function index(req, res) {
    console.log(req.query);
    let results = posts;
    if (req.query.tags) {
        results = posts.filter(post => post.tags.find(tag => tag.toLowerCase() == req.query.tags.toLowerCase()) ? true : false);
        //results = posts.find(post => post.tags.toLowerCase() == req.query.tags.toLowerCase()) ? true : false
    }

    res.json(results);
}
//--------------------------------------------------------------------
function show(req, res) {
    const id = Number(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ error: "User Error", message: "Id non valido" })
    }
    const result = posts.find(post => post.id == id)

    if (!result) {
        return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
    }
    res.send(result);
}
function store(req, res) {
    res.send(`Vuoi creare un nuovo post`);
}
function update(req, res) {
    res.send(`Vuoi modificare (completamente) il post numero: ${req.params.id}`);
}
function modify(req, res) {
    res.send(`Vuoi aggiornare (parzialmente) il post numero: ${req.params.id}`);
}
//--------------------------------------------------------------------
function destroy(req, res) {
    const id = Number(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ error: "User Error", message: "Id non valido" })
    }
    const result = posts.find(post => post.id == id)

    if (!result) {
        return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
    }
    posts.splice(posts.indexOf(result), 1);
    console.log(`pizza ${id} eliminata`, posts)
    return res.sendStatus(204);

}


const controllers = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};

module.exports = controllers
const posts = require("../public/posts.js")

function index(req, res) {
    res.json(posts);
}
function show(req, res) {
    const selectedPost = posts.find(post => post.id == parseInt(req.params.id))
    res.send(selectedPost);
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
function destroy(req, res) {
    res.send(`Vuoi eliminare il post numero: ${req.params.id}`);
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

function notFound(req, res, next) {

    res.status(404).json({ error: "si è verificato un errore", message: "404 Page not found" })
}
module.exports = notFound
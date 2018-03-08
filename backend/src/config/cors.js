module.exports = function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me, WWW-Authenticate, Authorization, Origin, Version");
    next()
}
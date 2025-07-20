const logRequest = (req, res, next)=>{
    console.log('terjadi log pada ', req.path);
    next();
}

module.exports = logRequest;
function logger(req,res,next) {
    console.log(`[Logger]: Requesting to ${req.method} ${req.url}`);
    next();
}

module.exports = logger;
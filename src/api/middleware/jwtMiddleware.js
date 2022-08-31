const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.verifyTokenAdmin = (req, res, next) => {
    let token = req.headers['authorization'];

    if(typeof token != undefined){
        jwt.verify(token, JWT_SECRET, (error, decoded) => {
            if(error || decoded.role != "admin"){
                res.sendStatus(401);
            }
            else {
                next();
            }
        })
    }
    else {
        res.status(403);
        res.json({message: "Accès interdit !"});
    }
}

exports.verifyTokenUser = (req, res, next) => {
    let token = req.headers['authorization'];

    if(typeof token != undefined){
        jwt.verify(token, JWT_SECRET, (error, decoded) => {
            if (error || !["user", "admin"].includes(decoded.role)){
                res.sendStatus(401);
            }
            else {
                next();
            }
        })
    }
    else {
        res.status(403);
        res.json({message: "Accès interdit !"});
    }
}
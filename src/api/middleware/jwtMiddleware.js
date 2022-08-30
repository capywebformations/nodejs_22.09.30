const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if(typeof token != undefined){
        jwt.verify(token, JWT_SECRET, (error) => {
            if(error){
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
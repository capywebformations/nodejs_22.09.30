const User = require('../models/userModel');

const jwt = require('jsonwebtoken');
const { off } = require('../models/userModel');

exports.createAnUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            // res.json({message: "Utilisateur crée: " + user.email});
            res.json({ message: `Utilisateur crée: ${user.email}` });
        }
    });
}

exports.loginAnUser = (req, res) => {
    User.findOne({ email: req.body.email }, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            if (user.password === req.body.password) {

                let userData = {
                    email: user.email,
                    role: "user"
                }

                jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30 days' }, (error, token) => {
                    if (error) {
                        res.status(400);
                        console.log(error);
                        res.json({ message: "Impossible de génerer un token." });
                    }
                    else {
                        res.json({token});
                    }
                });




            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Mot de passe ou email erroné." });
            }
        }
    });
}
var router = require('express').Router();
var Game = require('../db').import('../models/game');

router.get('/all', (req, res) => {
    Game.findAll({ where: { owner_id: req.user.id } })
        .then(
            function findSuccess(games) {
                res.status(200).json({
                    games: games,
                    message: "Data fetched."
                })
            },

            function findFail() {
                res.status(500).json({
                    message: "Data not found"
                })
            }
        )
})

router.get('/:id/user/:userId', (req, res) => {
    Game.findOne({ where: { id: req.params.id, owner_id: req.params.userId } })
        .then(
            function findSuccess(game) {
                res.status(200).json({
                    game: game
                })
            },

            function findFail(err) {
                res.status(500).json({
                    message: "Data not found."
                })
            }
        )
})

router.post('/create', (req, res) => {
    Game.create({
        title: req.body.title,
        owner_id: req.body.userId,
        studio: req.body.studio,
        esrb_rating: req.body.esrbRating,
        user_rating: req.body.userRating,
        have_played: req.body.havePlayed
    })
        .then(
            function createSuccess(game) {
                res.status(200).json({
                    game: game,
                    message: "Game created."
                })
            },

            function createFail(err) {
                res.status(500).send(err.message)
            }
        )
})

router.put('/update/:id', (req, res) => {
    Game.update({
        title: req.body.title,
        studio: req.body.studio,
        esrb_rating: req.body.esrbRating,
        user_rating: req.body.userRating,
        have_played: req.body.havePlayed
    },
        {
            where: {
                id: req.params.id,
                owner_id: req.body.userId
            }
        })
        .then(
            function updateSuccess(game) {
                res.status(200).json({
                    game: game,
                    message: "Successfully updated."
                })
            },

            function updateFail(err) {
                res.status(500).json({
                    message: err.message
                })
            }

        )
})

router.delete('/remove/:id', (req, res) => {
    Game.destroy({
        where: {
            id: req.params.id,
            owner_id: req.body.userId
        }
    })
    .then(
        function deleteSuccess(game) {
            res.status(200).json({
                game: game,
                message: "Successfully deleted"
            })
        },

        function deleteFail(err) {
            res.status(500).json({
                error: err.message
            })
        }
    )
})

module.exports = router; // error: 'routers' change on 'router'(5)
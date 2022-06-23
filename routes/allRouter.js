const express = require('express')
const router = express.Router()
const Pupils = require('../model/pupil')

router.get('/', async (req, res) => {
    let pupils;
    if (req.query.gacha && req.query.to) {
        pupils = await Pupils.find({ month: { $lt: req.query.gacha, $gt: req.query.to } }).sort({ score: -1 })
    } else {
        pupils = await Pupils.find().sort({ score: -1 })
    }
    res.render('home', {
        title: 'Pupils',
        pupils,
    })
})

router.post('/pupils/add', async (req, res) => {
    let {
        name, surname, number, group, month, score, tr
    } = req.body
    parseInt(tr)
    const pupils = await Pupils({ name, surname, number, group, month, score, tr })
    await pupils.save()
    res.redirect('/')
})

router.get('/pupils/add', async (req, res) => {
    res.render('addPupil', {
        title: 'Add new pupil',
    })
})

router.get('/pupil/score/add/:id', async (req, res) => {
    const pupil = await Pupils.find({ _id: { $eq: req.params.id } }).limit(1);
    const ball = parseInt(pupil[0].score + +req.query.score)
    await Pupils.findByIdAndUpdate(req.params.id, { score: ball })
    res.redirect('/')
})

router.get('/pupil/del/:id', async (req, res) => {
    await Pupils.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

router.get('/pupil/update/:id', async (req, res) => {
    let pupil = await Pupils.find({ _id: { $eq: req.params.id } })
    pupil = pupil[0]
    let id = req.params.id
    res.render('updatePupil', {
        title: "Edit data pupil",
        id,
        pupil,
    })
})

router.get('/pupil/edit/:id', async (req, res) => {
    await Pupils.findByIdAndUpdate(req.params.id, {
        name: req.query.name,
        surname: req.query.surname,
        number: req.query.number,
        group: req.query.group,
        month: req.query.month,
        score: req.query.score,
    })
    res.redirect('/')
})

module.exports = router
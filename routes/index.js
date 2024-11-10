const express  = require('express');
const router = express.Router();


//Mostrar a index.ejs
router.get('/', async  (req, res)  => {
    res.render("base", {
        title: "Home",
        view: "index"
    });
});


router.get('/quemsomos.ejs', async  (req, res)  => {
    res.render("base", {
        title: "Quem somos",
        view: "quemsomos"
    });
});
module.exports = router;
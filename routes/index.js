const express  = require('express');
const router = express.Router();


//Mostrar a index.ejs
router.get('/', async  (req, res)  => {
    res.render("base", {
        title: "Home",
        view: "home"
    });
});


router.get('/views/cadastro.ejs', async  (req, res)  => {
    res.render("base", {
        title: "Home",
        view: "home"
    });
});

router.get('/views/quemsomos.ejs', async  (req, res)  => {
    res.render("base", {
        title: "Home",
        view: "home"
    });
});
module.exports = router;
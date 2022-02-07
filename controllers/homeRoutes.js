const router = require('express').Router();

const {Blogs, Comments } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Blogs.findAll();
        const posts = postData.map((post) => 
            post.get({plain: true})
        );

        res.render('all', { 
            posts: posts, 
            loggedIn: req.session.loggedIn 
        });
    } catch (err) {
        console.log('error getting all posts');
        console.log(err); 
        res.status(500).json(err);
    }
});

// get one post after you click that post? 
router.get('/singlePost/:id', async (req, res) => {
    try {
        const singlePost = await Blogs.findByPk(req.params.id, {
            include:[Comments]
        });

        res.render('singlePost', {singlePost, loggedIn: req.session.loggedIn })
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
});

// get all comments created by that user? 
// router.get('/dashboard/:user', (req, res) => {
//     try {
//         const userPosts = await Blogs.findAll({
//             where: {
//                 id
//             }
//         })
//     }
// })

// Login route
router.get('/login', (req, res) => {
    console.log(req.session.loggedIn);
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
    console.log(req.session.loggedIn);
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
});


module.exports = router;
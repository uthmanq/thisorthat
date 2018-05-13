var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/posts', function (req, res, next) {
    Post.find({}, function (err, posts) {
        if (err) throw err;
        // send object of all the posts
        res.render('posts', { title: 'Posts', posts: posts });
    });
});

router.get('/posts/make', function (req, res, next) {
    res.render('make');
});

router.get('/posts/view',function(req,res,next){
    var postId = req.query._id;
    console.log(postId)
    Post.findById(postId, function (err, post)
    {
        if (err) throw err;
        res.render('view', {title: 'View Post', post: post});
    });
});

router.post('/posts/post', function (req, res, next) {
    var newPost = Post({
        title: req.body.title,
        sectionAText: req.body.sectionAText,
        sectionBText: req.body.sectionBText
    });
    newPost.save(function (err) {
        if (err) throw err;

        console.log('User created!');
    });
});


module.exports = router;

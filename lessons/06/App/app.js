const express = require("express");
const app = express();
const Post = require('./api/models/posts');

const postsData = new Post();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.status(200).send("hello world");
})

app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get());
})

app.get('/api/posts/:post_id', (req, res) => {
    const post_id = req.params.post_id
    const foundPost = postsData.getIndividualBlog(post_id);
    if (foundPost) {
        res.status(200).send(foundPost);
    } else {
        res.status(404).send("Not Found");
    }

})

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})
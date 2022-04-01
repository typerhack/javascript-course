const fs = require('fs');


const PATH = "./data.json";

class Post {
    get() {
        // Get Posts
        return this.readData();
    }

    getIndividualBlog(id) {
        // Get one post
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == id);
        return foundPost;
    }

    add(newPost) {
        // Add one post
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawdata) {
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;
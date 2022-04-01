const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/"

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPosts(data);
    })
}
const buildPosts = (blogPosts) => {
    let blogPostsContent = "";
    for (blogPost of blogPosts) {
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();

        const image = `${API_BASE_URL}${blogPost.post_image}`;

        blogPostsContent += `
        <div class="row post mt-4">
                    <div class="col-4 post-image" style="background-image: url(${image})"></div>
                    <div class="col-8 py-3 px-4 post-content">
                        <div class="mb-2 post-date">${postDate}</div>
                        <div class="post-title">
                            <h4 class="h2 text-black fw-bold">${blogPost.title}</h4>
                        </div>
                        <div class="post-text">${blogPost.content}
                        </div>
                    </div>
                </div>`
    }
    console.log(blogPostsContent);
    document.querySelector(".blog-post").innerHTML = blogPostsContent;

}
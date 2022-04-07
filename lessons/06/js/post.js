const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/"

window.onload = () => {
    getPostIdParam();
    getIndivedualPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
}

const getIndivedualPost = () => {
    const postId = getPostIdParam();
    fetch(`${API_URL}${postId}`, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildIndivedualPost(data);
    })
}
const buildIndivedualPost = (data) => {
    const postDate = new Date(parseInt(data.added_date)).toDateString();

    const image = `${API_BASE_URL}${data.post_image}`;
    document.querySelector('header').style.backgroundImage = `url(${image})`;

    const blogContent = `
    <div class="post-container">
                    <div id="individual-post-title" class="mb-4 text-center">
                        <h1 class="h2">${data.title}</h1>
                    </div>
                    <div id="individual-post-date" class="ps-3 pt-2 post-date">
                        <p>Published on ${postDate}</p>
                    </div>
                    <div id="individual-post-content" class="mt-3">
                        <p>${data.content}</p>
                    </div>
                </div>`;
    document.querySelector('.post-content').innerHTML = blogContent;

}
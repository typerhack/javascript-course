const API_URL = "http://localhost:3000/api/posts";


const submitNewPost = () => {
    const title = document.querySelector("#title-input").value;
    const content = document.querySelector("#blogcontent").value;
    const image = document.querySelector("#file-upload");

    let data = new FormData();
    data.append("post-image", image.files[0]);
    data.append("title", title);
    data.append("content", content);

    fetch(API_URL, {
        method: "POST",
        body: data
    }).then(() => {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000)

    })
}
const posts = [
    { title: "post one", body: "thistiasdas dasdn"},
    { title: "post two", body: "thistiasdas dasdn"},
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({
    title: "thi embe",
    body: "3"
}, getPosts);
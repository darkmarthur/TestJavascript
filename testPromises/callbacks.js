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

function createPost(post) {
    setTimeout(() => {
        posts.push(posts);
    }, 2000);
}

getPosts();
createPost({
    title: "thi embe",
    body: "adasdasdsdqweq"
});
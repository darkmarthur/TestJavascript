const posts = [
    { title: "post one", body: "thistiasdas dasdn" },
    { title: "post two", body: "thistiasdas dasdn" },
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("error!!!");
            }
        }, 2000);
    });
}



// async function init() {
//     await createPost({
//         title: "thi embe",
//         body: "3"
//     });
//     getPosts();
// }

// init();



async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    getPosts();
}



fetchUsers();
console.log










// const promise1 = Promise.resolve("heel01");
// const promise2 = 10;
// const promise3 = new Promise(
//     (resolve, reject) => setTimeout(resolve, 2000, "Bye")
// );
// const promise4 = 
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then((values) => console.log(values)
// );


// createPost({
//     title: "thi embe",
//     body: "3"
// })
//     .then(getPosts)
//     .catch(err => console.log(err));


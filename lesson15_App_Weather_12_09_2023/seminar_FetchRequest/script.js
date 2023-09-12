const baseUrl = "https://jsonplaceholder.typicode.com/";
const postList = document.getElementById('postList');

fetch(`${baseUrl}posts`)
    .then(res => res.json())
    .then(posts => {
        // console.log(posts);
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('postCard');

            const postTitle = document.createElement('h2');
            postTitle.classList.add('postTitle');
            postTitle.textContent = post.title;

            const postBody = document.createElement('p');
            postBody.classList.add('postBody');
            postBody.textContent = post.body;

            postCard.append(postTitle, postBody);
            postList.append(postCard);

        })

    })
    .catch()
    .finally()
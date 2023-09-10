const BASE_URL = 'https://jsonplaceholder.typicode.com';

const loadUsersBtn = document.getElementById('loadUsersBtn');

loadUsersBtn.addEventListener('click', async () => {
    const users = await fetchUsers();                           // дождаться результат пока не вызовиться fetchUsers()
    displayUsers(users);
})

async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }
}

function displayUsers(users) {
    usersList.innerHTML = '';                                   // analog
    users.forEach(({ name, phone }) => {                        // users.forEach(({ name, phone, address: {geo: {lat, lng}}, city }) => { 
        const li = document.createElement('li');
        const phoneFormatted = phone.split(' ')[0];
        li.textContent = name + '   ' + phoneFormatted;
        usersList.appendChild(li);
    });
}

loadPostsBtn.addEventListener('click', async () => {
    const users = await fetchPosts();                           // дождаться результат пока не вызовиться fetchUsers()
    displayPosts(users);
})

async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = response.json();
        console.log(posts);
        return posts;
    } catch (error) {
        console.log(`Error fetching posts: ${error}`);
    }
}

function displayPosts(posts) {
    postsList.innerHTML = '';                               // analog
    posts.forEach(post => {                                 // posts.forEach(({title, body}) => { 
        const li = document.createElement('li');            // <h4>${title}</h4><p>${body}</p>
        li.innerHTML = `                                
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        postsList.appendChild(li);
    });
}
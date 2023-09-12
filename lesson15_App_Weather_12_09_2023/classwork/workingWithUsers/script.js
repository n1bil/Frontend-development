const BASE_URL = 'https://jsonplaceholder.typicode.com';
const usersList = document.getElementById('usersList');
const usersList2 = document.getElementById('usersList2');
const userDetails = document.getElementById('userDetails');
const searchInput = document.getElementById('searchInput');
const users = [];

(async function fetchAndDisplayUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement('li');
            li.innerText = user.name;
            usersList.appendChild(li);
        })

        let filteredUsers = users;
        // displayUsers(users);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();

            filteredUsers = users.filter(user => {
                return user.name.toLowerCase().includes(searchTerm);
            });

            displayUsers(filteredUsers);
        })
    } catch (error) {
        console.log(error);
    }
})();

function displayUsers(users) {
    usersList2.innerHTML = ''; 
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        li.addEventListener('click', () => displayUsersDetails(user));
        usersList2.appendChild(li);
    });
}

function displayUsersDetails(user) {
    userDetails.innerHTML = '';

    const nameHeading = document.createElement('h2');
    nameHeading.innerHTML = user.name;

    const nickName = document.createElement('p');
    nickName.innerHTML = `<strong>Username: </strong> ${user.username}`;

    
    const email = document.createElement('p');
    email.innerHTML = `<strong>Email: </strong> ${user.email}`;

    const phone = document.createElement('p');
    phone.innerHTML = `<strong>Phone: </strong> ${user.phone}`;

    userDetails.append(nameHeading, nickName, email, phone);
}
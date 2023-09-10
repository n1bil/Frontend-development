const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();
        users.forEach((user) => {
            let userList = document.getElementById("userList");
            const li = document.createElement("li");
            li.textContent = user.name;
            li.addEventListener("click", () => displayUserDetails(user));
            userList.appendChild(li);
        });
    } catch (error) {
        const li = document.createElement("li");
        li.textContent = "Users are not found, please try again later";
        userList.appendChild(li);
    } finally {
        console.log("Loading is complete");
    }
}

function displayUserDetails(user) {
    userDetails.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userDetails.style.display = "block";
}

fetchUsers();

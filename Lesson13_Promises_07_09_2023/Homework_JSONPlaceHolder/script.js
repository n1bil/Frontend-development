fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
        users.forEach((user) => {
            const userList = document.getElementById("userList");
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    })
    .catch((err) => {
        const li = document.createElement("li");
        li.textContent = "Users are not found, please try again later";
        userList.appendChild(li);
    })
    .finally(console.log("Loading is complete"));



userList.addEventListener("click", (e) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
            users.forEach((user) => {
                if (e.target.textContent === user.name) {
                    const userDetails = document.getElementById("userDetails");
                    userDetails.innerHTML = `
                        <p>id: ${user.id}</p>
                        <p>name: ${user.name}</p>
                        <p>email: ${user.email}</p>
                        <p>address: {street: ${user.address.street}, city: ${user.address.city}}</p>
                        <p>phone: ${user.phone}</p>
                        <p>company: ${user.company.name}</p>
                    `
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(console.log('Unloading is complete'));
})

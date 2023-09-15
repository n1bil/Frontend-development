const catFactElement = document.getElementById('cat-fact');
fetch('https://catfact.ninja/fact')
    .then(response => response.json())
        const { fact, length } = response;
        catFactElement.textContent = `${fact} ${length}`;
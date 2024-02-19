fetch("https://api.escuelajs.co/api/v1/categories")
.then(Response => Response.json())
.then(data => {
    let card = '';
    for (let escuelajs of data) {
        card += `<div class="card mb-5 col-4" style="width: 18rem;">
        <img src="${escuelajs.image}" class="card-img-top" alt="${escuelajs.image}">
        <div class="card-body">
        <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">${escuelajs.name}</li>
    </ul>
    </div>
    </div>`
    }
    document.getElementById("lista").innerHTML = card
})
//Code goes here
const apiLocalHost = "http://localhost:3000";

function getBeerNameById(){
    fetch('http://localhost:3000/beers').then(resp=>resp.json()).then(beers=>{
        document.getElementById('beer-list').innerHTML = beers
        .map(beer=>`<li onClick="getBeerDetails(${beer.id})">${beer.name}</li>`)
        .join('');
    })
}



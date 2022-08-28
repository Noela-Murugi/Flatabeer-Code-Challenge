//Code goes here
const apiLocalHost = "http://localhost:3000";

function getBeerNameById(){
    fetch('http://localhost:3000/beers').then(resp=>resp.json()).then(beers=>{
        document.getElementById('beer-list').innerHTML = beers
        .map(beer=>`<li onClick="getBeerDetails(${beer.id})">${beer.name}</li>`)
        .join('');
    })
}

function getBeerDetails(beerId){
    fetch(`http://localhost:3000/beers/${beerId}`).then(resp=>resp.json()).then(beer=>{
        console.log(beer);
        document.getElementById('beer-name').innerHTML = beer.name;
        document.getElementById('beer-image').src = beer.image_url;
        document.getElementById('beer-description').innerHTML = beer.description;
        document.getElementById('review-list').innerHTML = beer.reviews.map(review=>`<li>${review}</li>`).join('');
    });
}




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
    fetch(`http://localhost:3000/beers/${beerId}`)
    .then(response=>response.json())
    .then(beer=>{
        console.log(beer);
        document.getElementById('beer-name').innerHTML = beer.name;
        document.getElementById('beer-image').src = beer.image_url;
        document.getElementById('beer-description').innerHTML = beer.description;
        document.getElementById('review-list').innerHTML = beer.reviews
        .map(review=>`<li>${review}</li>`)
        .join('');
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    getBeerNameById();
    getBeerDetails(1);
    document.querySelector('#description-form').addEventListener('submit', (e)=>{
        e.preventDefault();
        let form = e.target;
        document.querySelector('#beer-description').innerText = form.description.value;
        form.reset();
    });
    document.querySelector('#review-form').addEventListener('submit', e=>{
        e.preventDefault();
        let form = e.target;
        document.querySelector('#review-list').innerText += `<li>${form.review.value}</li>`;
        form.reset();
    })
})


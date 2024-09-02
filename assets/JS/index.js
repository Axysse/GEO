var map = L.map('map').setView([46.205926, 6.148674], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let image0 = src = 'assets/img/pont.png'
let image1 = src = 'assets/img/montcuq.jpg'

let game = [
    { 0: {
        "photo" : { image0 },
        "position" : {
            "lat": 46.205548202278905,
            "lng" : 6.149071455001832
        }
    },
    1: {
        "photo" : { image1 },
        "position" : {
            "lat" :  54,
            "lng" :  56,
        }
    }
}   
];

function getRandomItem(arr) {

    return randomIndex = Math.floor(Math.random() * game.length);
    
}

const result = getRandomItem(game);
console.log(result);


let display = document.getElementById('Img');
let imgDisp = document.createElement("img");

imgDisp.src = image0;
display.appendChild(imgDisp);

var popup = L.popup();

var marker = null

function onMapClick(e) {

    if (!marker) {
        marker = L.marker(e.latlng).addTo(map)
    } else {
    marker.setLatLng(e.latlng)
    }
}

map.on('click', onMapClick);

let guess = document.getElementById("bttn");
let text = document.getElementById("text");
let text2 = document.getElementById("text2");


truth = game[0][0]['position']


guess.addEventListener('click', () => {
    gues = marker.getLatLng();
    text.innerText = gues;
    truth = game[0][0]['position'];
    
    let lat1 = gues["lat"]
    let lng1 = gues["lng"]
    let lat2 = game[0][0]['position']['lat']
    let lng2 = game[0][0]['position']['lng']

    let LATLNG1 = []
    let LATLNG2 = []

    LATLNG1.push(lat1)
    LATLNG1.push(lng1)
    LATLNG2.push(lat2)
    LATLNG2.push(lng2)

    let loin = map.distance(LATLNG1, LATLNG2)

    console.log(loin)

    

    if(loin <= 50 ) {
        text2.innerText = 'GG MA GUEULE'
    } else {
        text2.innerText = 'T mauvais Jack!'
    }
});
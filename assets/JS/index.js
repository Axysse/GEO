var map = L.map('map').setView([48.854622, 2.346616], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// let image0 = src = 'assets/img/pont.png'
// let image1 = src = 'assets/img/montcuq.jpg'


let game = [
      {
        "photo" : { "image": ['assets/img/pont.png'] },
        "position" : {
            "lat": 46.205548202278905,
            "lng" : 6.149071455001832,
        },
        "description" : "Pont du Mont-Blanc - Genève",
    },
     {
        "photo" : { "image": ['assets/img/montcuq.jpg'] },
        "position" : {
            "lat" :  44.337147,
            "lng" :  1.197360,
        },
        "description" : ":)",
    },
    {
        "photo" : {"image" : ['assets/img/espingo.jpg']},
        "position" : {
            "lat" : 42.730492,
            "lng" : 0.499556,
        },
        "description" : "Refuge d'Espingo - Pyréenées centrales - Bagnères de Luchon",
    },
    {
        "photo" : {"image" : ['assets/img/richard.jpg']},
        "position" : {
            "lat" : 51.499209,
            "lng" : -0.125854,
    },
    "description" : "Statue de Richard Coeur de Lion - Parlement de Londres",
},
{
   "photo" : {"image" : ['assets/img/nemo.jpeg']},
        "position" : {
            "lat" : -46.800059,
            "lng" : -122.810501, 
},
"description" : "Point Nemo - Point le plus éloigné de toute terre.",
},
{
    "photo" : {"image" : ['assets/img/detaille.jpg']},
         "position" : {
             "lat" : -66.866026,
             "lng" : -66.810259, 
 }, 
 "description" : "Ile Detaille - Fjord de Lallemand - Antarctique.",
 },
 {
    "photo" : {"image" : ['assets/img/tour.jpg']},
         "position" : {
             "lat" : 40.626569,
             "lng" : 22.948514, 
 },
 "description" : "Tour Blanche - Thessalonique",
 },
 {
    "photo" : {"image" : ['assets/img/turquie.jpg']},
         "position" : {
             "lat" : 38.756986,
             "lng" : 30.534422, 
 },
 "description" : "Afyonkarahisar - Turquie",
 },
 {
    "photo" : {"image" : ['assets/img/afpa.png']},
         "position" : {
             "lat" : 46.813269,
             "lng" : 0.532261, 
 },
 "description" : "Centre AFPA - Châtellerault",
 },
 {
    "photo" : {"image" : ['assets/img/palais-ducs.jpg']},
         "position" : {
             "lat" : 46.583002,
             "lng" : 0.342054, 
 },
 "description" : "Palais des Ducs d'Aquitaine - Poitiers",
 },
 {
    "photo" : {"image" : ['assets/img/alexandre.JPG']},
         "position" : {
             "lat" : 42.696195,
             "lng" : 23.332282, 
 },
 "description" : "Cathédrale Alexandre Nievski - Sofia",
 },
 {
    "photo" : {"image" : ['assets/img/plaza.jpg']},
         "position" : {
             "lat" : 37.377828,
             "lng" : -5.987131, 
 },
 "description" : "Plaza de Espana - Séville",
 },
 {
    "photo" : {"image" : ['assets/img/medersa.jpg']},
         "position" : {
             "lat" : 34.065116,
             "lng" : -4.973616, 
 },
 "description" : "Merdersa Attarine - Fès",
 },
 {
    "photo" : {"image" : ['assets/img/phare.jpg']},
         "position" : {
             "lat" : -54.732467,
             "lng" : -63.857228, 
 },
 "description" : "Phare du bout du monde - Terres de feu - Argentine",
 },
 {
    "photo" : {"image" : ['assets/img/gengis.jpg']},
         "position" : {
             "lat" : 47.808582,
             "lng" : 107.530650, 
 },
 "description" : "Statue équestre de Gengis Khan - Oulan-Bator",
 },
   
];

let GAME = JSON.stringify(game)
 console.log(JSON.stringify(GAME))

function getRandomItem(arr) {

    return randomIndex = Math.floor(Math.random() * game.length);
    
}
let result = getRandomItem(game);

console.log(randomIndex);


let display = document.getElementById('Img');
let imgDisp = document.createElement("img");

imgDisp.src = game[result]['photo']["image"];
imgDisp.style.height = "38rem";
imgDisp.style.width = "70rem";
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
let refresh = document.getElementById("refresh");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let text5 = document.getElementById("text5");
let SCORE = document.getElementById("score")


truth = game[result]['position']


guess.addEventListener('click', () => {
    guess.classList.add("hidden");
    refresh.innerText = "REJOUER"
    gues = marker.getLatLng();
    text.innerText = gues;
    truth = game[result]['position'];
    desc = game[result]['description'];
    
    let lat1 = gues["lat"]
    let lng1 = gues["lng"]
    let lat2 = game[result]['position']['lat']
    let lng2 = game[result]['position']['lng']

    let LATLNG1 = []
    let LATLNG2 = []

    LATLNG1.push(lat1)
    LATLNG1.push(lng1)
    LATLNG2.push(lat2)
    LATLNG2.push(lng2)

    let loin = map.distance(LATLNG1, LATLNG2) 

    let resultat = loin.toString().slice(0, 8)

    L.marker(truth).addTo(map)

    mark = [LATLNG1, LATLNG2];
    L.polyline(mark, {color: 'red'}).addTo(map)
    console.log(resultat)

    text5.innerText = desc

    let score = null

    if(loin <= 50000 ) {
        text2.innerText = 'GG MA GUEULE'
        text4.innerText = 'Tu es à ' + resultat + ' métres de ta destination!'
        switch (true) {
            case (loin <= 1000):
                text3.innerText = "T'est un ouf toi, un malade!."
                score = score + 5000
                SCORE.innerText = 'POINTS : ' + score + ' points'
                break;
            case (loin > 1000 && loin <= 5000):
                text3.innerText = "Propre de fou."
                score = score + 3500
                SCORE.innerText = 'POINTS : ' + score + ' points'
                break;
            case (loin > 5000 && loin <= 20000):
                text3.innerText = "C'est OKAY!"
                score = score + 1750
                SCORE.innerText = 'POINTS : ' + score + ' points'
                break;
                case (loin > 20000 && loin <= 50000):
                    text3.innerText = "En vrai ça passe"
                    score = score + 500
                    SCORE.innerText = 'POINTS : ' + score + ' points'
                    break;   
        }
    } else {
        text2.innerText = 'T mauvais Jack!'
        text4.innerText = 'Tu es à ' + resultat + ' métres de ta destination!'
        text3.innerText = "Tu fais pitié frère."
    };

    

     
});

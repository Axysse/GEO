var map = L.map('map').setView([48.854622, 2.346616], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var poopIcon = L.icon({
    iconUrl: 'assets/img/glace-removebg.png',
    iconSize:     [48, 55], 
    iconAnchor:   [26, 50], 
})

let score = null


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
 {
    "photo" : {"image" : ['assets/img/palais_ideal.jpg']},
         "position" : {
             "lat" : 45.256126,
             "lng" : 5.028510, 
 },
 "description" : "Palais idéal du facteur Cheval - Hauterives",
 },
 {
    "photo" : {"image" : ['assets/img/parc_gaudi.jpeg']},
         "position" : {
             "lat" : 41.414355,
             "lng" : 2.152097, 
 },
 "description" : "Parc Gaudi (Güell) - Barcelone",
 },
 {
    "photo" : {"image" : ['assets/img/popeye.jpg']},
         "position" : {
             "lat" : 35.960940,
             "lng" : 14.341222, 
 },
 "description" : "Popeye village - Décor de film intact - Malte",
 },
 {
    "photo" : {"image" : ['assets/img/enfer.jpg']},
         "position" : {
             "lat" : 40.252160,
             "lng" : 58.438839, 
 },
 "description" : "Les portes de l'Enfer - Turkménistan",
 },
 {
    "photo" : {"image" : ['assets/img/phraya.jpg']},
         "position" : {
             "lat" : 12.1965, 
             "lng" : 100.0120, 
 },
 "description" : "Grotte de Phraya Nakhon - Thaïlande",
 },
 {
    "photo" : {"image" : ['assets/img/devil.jpg']},
         "position" : {
             "lat" : 51.536316, 
             "lng" : 14.640907, 
 },
 "description" : "Le pont du Diable - Allemangne",
 },
 {
    "photo" : {"image" : ['assets/img/tianzin.jpg']},
         "position" : {
             "lat" : 24.510842, 
             "lng" : 111.207282, 
 },
 "description" : "Montagnes de Tianzi - Chine",
 },
 {
    "photo" : {"image" : ['assets/img/djenee.jpg']},
         "position" : {
             "lat" : 13.905135, 
             "lng" : -4.555392, 
 },
 "description" : "Grande mosquée de Djénée - Mali",
 },
 {
    "photo" : {"image" : ['assets/img/picassiette.jpg']},
         "position" : {
             "lat" : 48.442051, 
             "lng" : 1.506043, 
 },
 "description" : "Maison Picassiette - Chartres - France",
 },
 {
    "photo" : {"image" : ['assets/img/mano.jpg']},
         "position" : {
             "lat" : -24.158377, 
             "lng" : -70.156401, 
 },
 "description" : "La mano del desierto - Chili",
 },
 {
    "photo" : {"image" : ['assets/img/petra.jpg']},
         "position" : {
             "lat" : 30.328501, 
             "lng" : 35.444358, 
 },
 "description" : "Cité de Petra - Jordanie",
 },
 {
    "photo" : {"image" : ['assets/img/krak.jpg']},
         "position" : {
             "lat" : 34.787219, 
             "lng" : 36.272174, 
 },
 "description" : "Krak des chevaliers - Syrie",
 },
 {
    "photo" : {"image" : ['assets/img/delphes.jpg']},
         "position" : {
             "lat" : 38.482499, 
             "lng" : 22.501190, 
 },
 "description" : "Temple d'Apollon - Delphes - Grèce",
 },
 {
    "photo" : {"image" : ['assets/img/jigokudani.jpg']},
         "position" : {
             "lat" : 36.732675, 
             "lng" : 138.462078, 
 },
 "description" : "Parc des singes des neiges - Jigokudani - Japon",
 },
 {
    "photo" : {"image" : ['assets/img/gand.jpg']},
         "position" : {
             "lat" : 51.053891, 
             "lng" : 3.720593, 
 },
 "description" : "Pont Sint-Michielsbrug - Gand - Belgique",
 },
   
];


function getRandomItem(arr) {

    return randomIndex = Math.floor(Math.random() * game.length);
    
}

let result = getRandomItem(game);

console.log(result);


let display = document.getElementById('Img');
let imgDisp = document.createElement("img");

imgDisp.src = game[result]['photo']["image"];
imgDisp.style.height = "38rem";
imgDisp.style.width = "70rem";

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
let SCORE = document.getElementById("score");
let start = document.getElementById("start");
let logo = document.getElementById("logo");
let next = document.getElementById("next");

truth = game[result]['position']


start.addEventListener('click', () => {

   let i = 0;

    logo.classList.add("hidden");
    display.appendChild(imgDisp);
    guess.classList.remove("hidden");
    start.classList.add("hidden");
    

    

    guess.addEventListener('click', () => {

        i++
        console.log(i)

    
    
    guess.classList.add("hidden");

    gues = marker.getLatLng();
    text.innerText = gues;

    truth = game[result]['position'];
    desc = game[result]['description'];
    
    let lat1 = gues["lat"];
    let lng1 = gues["lng"];
    let lat2 = game[result]['position']['lat'];
    let lng2 = game[result]['position']['lng'];

    let LATLNG1 = [];
    let LATLNG2 = [];

    LATLNG1.push(lat1);
    LATLNG1.push(lng1);
    LATLNG2.push(lat2);
    LATLNG2.push(lng2);

    let loin = map.distance(LATLNG1, LATLNG2); 

    let resultat = loin.toString().slice(0, 8);

    L.marker(truth, {icon: poopIcon}).addTo(map);

    mark = [LATLNG1, LATLNG2];
    L.polyline(mark, {color: 'red'}).addTo(map);

    text5.innerText = desc

    if(loin <= 100000 ) {
        text2.innerText = 'GG MA GUEULE'
        text4.innerText = 'Tu es à ' + resultat + ' métres de ta destination!'
        switch (true) {
            case (loin <= 2500):
                text3.innerText = "T'est un ouf toi, un malade!"
                score = score + 5000
                SCORE.innerText = 'POINTS : ' + score + ' points'
                break;
            case (loin > 2500 && loin <= 7500):
                text3.innerText = "Propre de fou."
                score = score + 3500
                SCORE.innerText = 'POINTS : ' + score + ' points'
                break;
            case (loin > 7500 && loin <= 50000):
                text3.innerText = "C'est OKAY!"
                score = score + 1750
                SCORE.innerText = 'POINTS : ' + score + ' points'
                break;
                case (loin > 50000 && loin <= 100000):
                    text3.innerText = "En vrai ça passe"
                    score = score + 500
                    SCORE.innerText = 'POINTS : ' + score + ' points'
                    break;   
        }
    } else {
        text2.innerText = 'T mauvais Jack!'
        score = score + 0
        text4.innerText = 'Tu es à ' + resultat + ' métres de ta destination!'
        text3.innerText = "Tu fais pitié frère."
    }; 
        

        refresh.classList.remove("hidden")
        refresh.innerText = "RECOMMENCER";
    

    
});

});

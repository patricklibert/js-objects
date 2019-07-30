let aboutMe = {
    Name : "Patrick Libert",
    level : "40",
    gender : "1978",
    favorite_food : "pizza",
    favorite_series : "Battlestar Galactica",
    favorite_movies : "Emmanuelle 13",
    single : "yes"
};

function FamilyMember(name, level, gender, favorite_food, favorite_series, favorite_movies) {

    this.name = name;
    this.level = level;
    this.gender = gender;
    this.favorite_food = favorite_food;
    this.favorite_series = favorite_series;
    this.favorite_movies = favorite_movies;

    lijst.innerHTML += "Name : " + this.name + "<br>" + "level : " + this.level + "<br>" + "gender : " + this.gender + "<br>" + "favorite_food : " + this.favorite_food + "<br>" + "favorite_series : " + this.favorite_series + "<br> " + "favorite_movies : " + this.favorite_movies + "<br>";

}

function TogglePicture(image) {
    document.getElementById("pict").src = image;
}


var lijst = document.getElementById("list");
let mykey = Object.keys(aboutMe);
let mykey2 = Object.values(aboutMe);
for (key = 0; key < mykey.length; key++) {
    lijst.innerHTML += mykey[key] + " " + mykey2[key] + "<br>";
}

var father = new FamilyMember("Harisson", "71", "M", "Vis", "blalbla", "balabal");
var mother = new FamilyMember("Julia", "73", "V", "Vlees", "blabla", "blabla");
var brother = new FamilyMember("Leonardo", "46", "M", "Groenten", "blabla", "blabla");




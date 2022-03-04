//header is bad grammar on purpose
var headerText = "How to Food"

var appleImg = document.getElementById("img-apple")
    ,appleTitle = document.getElementById("title-apple")
    ,appleList = document.getElementById("list-apple");

var carrotImg = document.getElementById("img-carrot")
    ,carrotTitle = document.getElementById("title-carrot")
    ,carrotList = document.getElementById("list-carrot");

var lettuceImg = document.getElementById("img-lettuce")
    ,lettuceTitle = document.getElementById("title-lettuce")
    ,lettuceList = document.getElementById("list-lettuce");
    
var potatoImg = document.getElementById("img-potato")
    ,potatoTitle = document.getElementById("title-potato")
    ,potatoList = document.getElementById("list-potato");


var titleApple = "Apples"
    ,titleCarrot = "Carrots"
    ,titleLettuce = "Lettuce"
    ,titlePotato = "Potatoes";

var urlImgApple = "img/apple_640.jpg"
    ,urlImgCarrot = "img/carrots_640.jpg"
    ,urlImgLettuce = "img/lettuce_640.jpg"
    ,urlImgPotato = "img/potatoes_640.jpg";

document.getElementById("site-header").firstElementChild.textContent = headerText;

appleTitle.textContent = titleApple;
appleImg.src = urlImgApple;
appleImg.alt = "Apple";
appleList.children[0].textContent = "Eat them plain for a sweet snack.";
appleList.children[1].textContent = "Bake them into a delicious pie.";

carrotTitle.textContent = titleCarrot;
carrotImg.src = urlImgCarrot;
carrotImg.alt = "Carrots";
carrotList.children[0].textContent = "Dice them into a soup.";
carrotList.children[1].textContent = "Roast them in the oven with salt, pepper, and oil.";

lettuceTitle.textContent = titleLettuce;
lettuceImg.src = urlImgLettuce;
lettuceImg.alt = "Lettuce";
lettuceList.children[0].textContent = "Chop it up for a salad.";
lettuceList.children[1].textContent = "Add some leaves to a sandwich.";

potatoTitle.textContent = titlePotato;
potatoImg.src = urlImgPotato;
potatoImg.alt = "Potatoes";
potatoList.children[0].textContent = "Bake them, scoop out the insides and mix in goodies, stuff it back in, bake it again!";
potatoList.children[1].textContent = "Boil 'em, Mash 'em, Stick 'em in a stew.";
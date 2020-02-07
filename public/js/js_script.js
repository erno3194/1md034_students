/*
<div>
  <h1>Välj en burgare</h1>
  <ul id="myBurgers">
  </ul>
</div>
*/

/*
function menuItem(name, info, allergyLac, allergyGlu, vegan, kcal, img) {
  this.name = name;
  this.info = info;
  this.allergyLac = allergyLac;
  this.allergyGlu = allergyGlu;
  this.vegan = vegan;
  this.kcal = kcal;
  this.img = img;

  this.getKcal = function() {
    return this.name + ' ' + this.kcal + ' kcal';
  };
}

let item1 = new menuItem('Big eMac', ' ', true, true, false, 507, 'img/bigmac_460x330.jpg');
let item2 = new menuItem('Bigger eMac', ' ', true, true, false, 1014, 'img/bigmac_460x330.jpg');
let item3 = new menuItem('Biggest eMac', ' ', true, true, false, 2028, 'img/bigmac_460x330.jpg');
let item4 = new menuItem('Biggerest eMac', ' ', true, true, false, 4056, 'img/bigmac_460x330.jpg');
let item5 = new menuItem('Biggestest eMac', ' ', true, true, false, 8112, 'img/bigmac_460x330.jpg');*/

/*
document.getElementById("b1").innerHTML = item1.getKcal();
document.getElementById("b2").innerHTML = item2.getKcal();
document.getElementById("b3").innerHTML = item3.getKcal();
document.getElementById("b4").innerHTML = item4.getKcal();
document.getElementById("b5").innerHTML = item5.getKcal();
*/

/*
let myElement = document.getElementById("myBurgers");
for(let i=0; i<menu.length; i++)
{
    let listItem = document.createElement("ul");
    let listValue = document.createTextNode(menu[i].getKcal());
    listItem.appendChild(listValue);
    myElement.appendChild(listItem);
}
*/
/*
let menu = [item1, item2, item3, item4, item5];
let gridElement = document.getElementById("myBurgerTable");
for(let i=0; i<menu.length; i++)
{
    let divElement = document.createElement("div");
    let listItem = document.createElement("li");
    let imgItem = document.createElement("img");
    let headerItem = document.createElement("h4");
    
    let burgerName = document.createTextNode(menu[i].name)
    let burgerKcal = document.createTextNode(menu[i].kcal + " kcal");
    
    
    imgItem.setAttribute("src", menu[i].img);

    headerItem.appendChild(burgerName);
    divElement.appendChild(headerItem);
    divElement.appendChild(imgItem);
    listItem.appendChild(burgerKcal);

    
    if (menu[i].allergyLac){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains lactose!");
	allergyList.style.color = "red";
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    if (menu[i].allergyGlu){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains gluten!");
	allergyList.style.color = "red";
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    if (menu[i].vegan){
	vegList = document.createElement("li");
	let vegan = document.createTextNode("Vegan friendly!");
	vegList.style.color = "green";
	vegList.appendChild(vegan);
	listItem.appendChild(vegList);
    }

    divElement.appendChild(listItem);
    gridElement.appendChild(divElement);
    
}

let myButton = document.getElementById("submitButton");

myButton.addEventListener("click", buttonFunc);

function buttonFunc(){
    console.log("You clicked button");
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var streetName = document.getElementById("street").value;
    var houseNumber = document.getElementById("house").value;
    var payment = document.getElementById("payment_method").value;

    if (document.getElementById("man").checked){
	var gender = "man";
    }
    if (document.getElementById("woman").checked){
	var gender = "woman";
    }
    if (document.getElementById("other").checked){
	var gender = "other";
    }
    if (document.getElementById("undisclosed").checked){
	var gender = "undisclosed";
    }


    let info = [name, email, streetName, houseNumber, payment, gender];
    for (x in info) {
	console.log(info[x]);
    }
}

*/

/*
<div>
  <h1>Välj en burgare</h1>
  <ul id="myBurgers">
  </ul>
</div>
*/


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
let item5 = new menuItem('Biggestest eMac', ' ', true, true, false, 8112, 'img/bigmac_460x330.jpg');

document.getElementById("b1").innerHTML = item1.getKcal();
document.getElementById("b2").innerHTML = item2.getKcal();
document.getElementById("b3").innerHTML = item3.getKcal();
document.getElementById("b4").innerHTML = item4.getKcal();
document.getElementById("b5").innerHTML = item5.getKcal();

let menu = [item1, item2, item3, item4, item5];

let myElement = document.getElementById("myBurgers");
for(let i=0; i<menu.length; i++)
{
    let listItem = document.createElement("ul");
    let listValue = document.createTextNode(menu[i].getKcal());
    listItem.appendChild(listValue);
    myElement.appendChild(listItem);
}



let myElement = document.getElementById("myBurgers");
for(let i=0; i<menu.length; i++)
{

  let listItem = document.createElement("li");
    let listValue = document.createTextNode(menu[i].getKcal());
    listItem.appendChild(listValue);

    
    if (menu[i].allergyLac){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains lactose!");
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    if (menu[i].allergyGlu){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Contains gluten!");
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    
    if (menu[i].vegan){
	allergyList = document.createElement("li");
	let allergy = document.createTextNode("Vegan friendly!");
	allergyList.appendChild(allergy);
	listItem.appendChild(allergyList);
    }
    
    myElement.appendChild(listItem);

}


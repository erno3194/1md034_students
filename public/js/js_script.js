function menuItem(name, info, allergyLac, allergyGlu, kcal, img){
    this.name = name;
    this.info = info;
    this.allergyLac = allergyLac;
    this.allergyGlu = allergyGlu;
    this.kcal = kcal;
    this.img = img;

    this.getKcal = function() {
    	return this.name + ' ' + this.kcal + ' kcal';
    };
}

let item1 = new menuItem('Big eMac', ' ', 'yes', 'yes', 507, 'img/bigmac_460x330.jpg');
let item2 = new menuItem('Bigger eMac', ' ', 'yes', 'yes', 1014, 'img/bigmac_460x330.jpg');
let item3 = new menuItem('Biggest eMac', ' ', 'yes', 'yes', 2028, 'img/bigmac_460x330.jpg');
let item4 = new menuItem('Biggerest eMac', ' ', 'yes', 'yes', 4056, 'img/bigmac_460x330.jpg');
let item5 = new menuItem('Biggestest eMac', ' ', 'yes', 'yes', 8112, 'img/bigmac_460x330.jpg');

document.getElementById("b1").innerHTML = item1.getKcal();
document.getElementById("b2").innerHTML = item2.getKcal();
document.getElementById("b3").innerHTML = item3.getKcal();
document.getElementById("b4").innerHTML = item4.getKcal();
document.getElementById("b5").innerHTML = item5.getKcal();

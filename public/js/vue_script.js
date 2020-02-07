/*<div>  
   <h1>Välj en burgare</h1> 
  <div id = "myBurgers" class = "table_wrapper">
      <div v-for="x in menu">
              <ul>
                 <li> {{ x.getKcal() }} kCal</li>
                 <div v-if = "x.allergyLac" >
                 <li> Contains lactose! </li>
                 </div>

                 <div v-if = "x.allergyGlu">
                 <li> Contains gluten! </li>     
                 </div>

                 <div v-if = "x.vegan">
                 <li> Vegan friendly! </li>               
                 </div>
                 

              </ul>
      </div>
      
      
  </div>
</div>



const vm = new Vue({
  el: '#myBurgers',
  data: {
    item1: item1.getKcal(),
    item2: item2.getKcal(),
    item3: item3.getKcal(),
    item4: item4.getKcal(),
    item5: item5.getKcal(),
  }
})
*/

const vm = new Vue({
  el: '#myBurgerTable',
  data: {  
      menu: food,
      checked: []
  },
    methods: {
	getOrder: function() {
	    return this.checked;
	}
    }
})

const info = new Vue({
    el: '#deliveryInfo',
    data: {
	fullname: "",
	email: "",
	street: "",
	house: "",
	payment_method: "",
	gender: ""
    },

    methods: {
	markDone: function(fullname, email, street, house, payment_method, gender){
	    console.log(fullname);
	    let divElement = document.getElementById("myOrder");
	    let nameItem = document.createElement("li");
	    nameItem.innerHTML = fullname;

	    let order = vm.getOrder();
	    
	    let emailItem = document.createElement("li");
	    emailItem.innerHTML = email;
	    let streetItem = document.createElement("li");
	    streetItem.innerHTML = street;
	    let houseNumberItem = document.createElement("li");
	    houseNumberItem.innerHTML = house;
	    let paymentItem = document.createElement("li");
	    paymentItem.innerHTML = payment_method;
	    let genderItem = document.createElement("li");
	    genderItem.innerHTML = gender;
	    
	   
	    divElement.appendChild(nameItem);
	    divElement.appendChild(emailItem);
	    divElement.appendChild(streetItem);
	    divElement.appendChild(houseNumberItem);
	    divElement.appendChild(paymentItem);
	    divElement.appendChild(genderItem);

	    for (x of order) {
		let currentBurger = document.createElement("li");
		currentBurger.innerHTML = x;
		divElement.appendChild(currentBurger);
		
	    }
	}
    }
    
})

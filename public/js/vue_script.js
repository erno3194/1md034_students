
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


'use strict';
const socket = io();



const info = new Vue({
    el: '#deliveryInfo',
    data: {
	
	fullname: "",
	email: "",
	street: "",
	house: "",
	payment_method: "",
	gender: "",
	
	orders: {}
    },


    created: function() {
	socket.on('initialize', function(data) {
	    this.orders = data.orders;
	}.bind(this));

	socket.on('currentQueue', function(data) {
	    this.orders = data.orders;
	}.bind(this));
    },
    
    
    methods: {
	
	getNext: function() {
	    let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    return lastOrder + 1;
	},
	
	addOrder: function(event) {

	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: ['Beans', 'Curry'],
	    });
	},

	markDone: function(fullname, email, payment_method, gender){
	    console.log(fullname);
	    let divElement = document.getElementById("myOrder");
	    let nameItem = document.createElement("li");
	    nameItem.innerHTML = fullname;

	    let order = vm.getOrder();
	    
	    let emailItem = document.createElement("li");
	    emailItem.innerHTML = email;
	    let paymentItem = document.createElement("li");
	    paymentItem.innerHTML = payment_method;
	    let genderItem = document.createElement("li");
	    genderItem.innerHTML = gender;
	    
	    //this.addOrder();
	    
	    divElement.appendChild(nameItem);
	    divElement.appendChild(emailItem);
	    divElement.appendChild(paymentItem);
	    divElement.appendChild(genderItem);

	    for (x of order) {
		let currentBurger = document.createElement("li");
		currentBurger.innerHTML = x;
		divElement.appendChild(currentBurger);
		
	    }
	},
    }
    
})


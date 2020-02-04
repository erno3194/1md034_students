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
    menu: menu
  }
})


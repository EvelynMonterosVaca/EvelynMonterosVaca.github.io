class Pizza {
    constructor(name, image, ingredients, sauce, cheese, price) {
      this.name = name;
      this.image = image;
      this.ingredients = ingredients;
      this.sauce = sauce;
      this.cheese = cheese; 
      this.price = price;
    }
  
    // Method to get the HTML section for the pizza (name and image)
    getSection() {
      return `
        <div class="pizza-section" onclick="showPizzaDetails('${this.name}')">
          <img src="images/${this.image}" alt="${this.name}" />
          <h3>${this.name}</h3>
        </div>
      `;
    }
  }
  
  const pizza1 = new Pizza("Hawaiian", "hawaiian.jpeg", "Sliced ham, pineapple, sauce, cheese" , "Tomato sauce" , "Mozzarella cheese", 19.99);
  const pizza2 = new Pizza("Buffalo Chicken Ranch", "buffalo.jpeg", "Shredded chicken breast, ranch dressing, sauce, cheese" , "Hot sauce ", "Italian blend cheese", 19.99);
  const pizza3 = new Pizza("Margarita", "margarita.jpeg", "Sauce, cheese, fresh basil leaves, a drizzle of olive oi" , "Tomato sauce " , "Mozzarella cheese" , 19.99);
  const pizza4 = new Pizza("Pepperoni", "pepperoni.jpeg", "Pepperoni, cheese, sauce" , "Tomato sauce" , "Mozzarella cheese" , 19.99);
  const pizza5 = new Pizza("Veggie", "veggie.jpeg", "Zucchini, broccoli, roasted peppers, artichoke hearts, cherry tomatoes, red onion, sauce, cheese" , "Tomato sauce " , "Mozzarella cheese" , 19.99);
  
  const pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5];
  
  const pizzaListContainer = document.getElementById('list');
  pizzas.forEach(pizza => {
    pizzaListContainer.innerHTML += pizza.getSection();
  });
  
  function showPizzaDetails(pizzaName) {
    const pizza = pizzas.find(p => p.name === pizzaName);
  
    if (pizza) {
      document.getElementById('title').textContent = pizza.name;
      document.getElementById('image').src = `images/${pizza.image}`;
      document.getElementById('ingredients').textContent = pizza.ingredients;
      document.getElementById('sauce').textContent = pizza.sauce;
      document.getElementById('cheese').textContent = pizza.cheese;  
      document.getElementById('price').textContent = pizza.price;
      document.getElementById('pizza').style.display = 'block';
    }
  }
  
  document.getElementById('close').onclick = function() {
    document.getElementById('pizza').style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target === document.getElementById('pizza')) {
      document.getElementById('pizza').style.display = 'none';
    }
  }
  
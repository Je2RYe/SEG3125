	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		imageUrl: "./images/broccoli.jpg"
	  },
	  {
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		imageUrl: "./images/bread.jpg"
	  },
	  {
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		imageUrl: "./images/salmon.jpg"
	  },
	  {
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.75,
		imageUrl: "./images/carrot.jpg"
	  },
	  {
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.50,
		imageUrl: "./images/pasta.jpg"
	  },
	  {
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 8.50,
		imageUrl: "./images/chicken.jpg"
	  },
	  {
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.20,
		imageUrl: "./images/apple.jpg"
	  },
	  {
		name: "pizza",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 5.99,
		imageUrl: "./images/pizza.jpg"
	  },
	  {
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.25,
		imageUrl: "./images/lettuce.jpg"
	  },
	  {
		name: "shrimp",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.99,
		imageUrl: "./images/shrimp.jpg"
	  }
];
	


// given restrictions provided, make a reduced list of products
function restrictListProducts(prods, restrictions) {
    let product_names = [];

    for (let i = 0; i < prods.length; i += 1) {
        let flag = true;

        for (let j = 0; j < restrictions.length; j++) {
            const currentReg = restrictions[j];

            if (
                (currentReg === "Vegetarian" && !prods[i].vegetarian) ||
                (currentReg === "GlutenFree" && !prods[i].glutenFree) ||
                (currentReg === "Organic" && !prods[i].organic) ||
                (currentReg === "Non-organic" && prods[i].organic)
            ) {
                flag = false;
                break; 
            }
        }

        if (flag) {
            product_names.push(prods[i].name);
        }
    }

    return product_names;
}


//Returns an array of prices, the prices matches the array
//returned by the restrictListProducts function
function restrictListPrices(prods, restrictions) {
    let product_prices = [];
    

    for (let i = 0; i < prods.length; i += 1) {
        let flag = true;

        for (let j = 0; j < restrictions.length; j++) {
            const currentReg = restrictions[j];

            if (
                (currentReg === "Vegetarian" && !prods[i].vegetarian) ||
                (currentReg === "GlutenFree" && !prods[i].glutenFree) ||
                (currentReg === "Organic" && !prods[i].organic) ||
                (currentReg === "Non-organic" && prods[i].organic)
            ) {
                flag = false;
                break; 
            }
        }

        if (flag) {
            product_prices.push(prods[i].price);
        }
    }

    return product_prices;
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

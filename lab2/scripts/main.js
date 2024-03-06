
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

// Add a function to handle checkbox changes
function handleCheckboxChange() {
    var checkboxes = document.getElementsByName("diet");
    var selectedCheckboxes = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedCheckboxes.push(checkboxes[i].value);
        }
    }

    // Call populateListProductChoices with the array of selected checkbox values
    populateListProductChoices(selectedCheckboxes, 'displayProduct');
}

// Modify populateListProductChoices to accept an array of checkbox values
function populateListProductChoices(selectedCheckboxes, slct2) {
    var s2 = document.getElementById(slct2);
    s2.innerHTML = "";

    var optionArray = [];
    var priceArray = restrictListPrices(products, selectedCheckboxes);
    priceArray.sort(function(a, b) { return a - b; });

    for (var k = 0; k < priceArray.length; k++) {
        for (var j = 0; j < products.length; j++) {
            if (products[j].price == priceArray[k]) {
                optionArray.push(products[j]);
            }
        }
    }

    for (var i = 0; i < optionArray.length; i++) {
        var product = optionArray[i];
        var productName = product.name;
        var productPrice = priceArray[i];

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        var label = document.createElement('label');
        label.appendChild(document.createTextNode(productName));
        label.appendChild(document.createElement("br"));

        var img = document.createElement("img");
        img.src = product.imageUrl;
        img.alt = productName + " image";
        img.style.width = "150px"; 

        label.appendChild(img);

        label.appendChild(document.createTextNode(" $" + productPrice));
        s2.appendChild(label);
        s2.appendChild(document.createElement("br"));
    }
}


	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + "$" + getTotalPrice(chosenProducts)));
		
}


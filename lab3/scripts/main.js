
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
// it makes each product name as the label for the checkboxes

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
    var maxRange = document.getElementById("myRange").value;
    var s2 = document.getElementById(slct2);
    s2.innerHTML = "";
    //document.getElementById("displayProduct").style.fontStyle = "italic";
    var optionArray = [];
    var priceArray = restrictListPrices(products, selectedCheckboxes,maxRange);
    
    //Sorts the array by prices
    priceArray.sort(function(a, b) { return a - b; });
    
    for (var k = 0; k < priceArray.length; k++) {
        for (var j = 0; j < products.length; j++) {
            if (products[j].price == priceArray[k]) {
                optionArray.push(products[j]);
            }
        }
    }
    
    //array of vegetables 
    var vegetables = [];
    for(var i = 0;i<optionArray.length;i++){
        if(optionArray[i].class == 'vegetable'){
            vegetables.push(optionArray[i]);
        }
    }
    
    //array of fruits
    var fruits = [];
    for(var i = 0;i < optionArray.length;i++){
        if(optionArray[i].class == 'fruit'){
            fruits.push(optionArray[i]);
        }
    }

    //array of diary
    var diaries = [];
    for(var i = 0;i < optionArray.length;i++){
        if(optionArray[i].class == 'diary'){
            diaries.push(optionArray[i]);
        }
    }

    //array of meats
    var meats = [];
    for(var i = 0;i < optionArray.length;i++){
        if(optionArray[i].class == 'meat'){
            meats.push(optionArray[i]);
        }
    }

    //create label for each vegetable in the array
    if(vegetables.length != 0){
        s2.append(document.createElement("br"));
        var veg = document.createElement('label');
        veg.appendChild(document.createTextNode('Vegetables: '));
        s2.append(veg);
        s2.append(document.createElement('br'));
        veg.style.fontWeight='bold';
        veg.style.fontStyle = 'italic'
        for(var i = 0;i<optionArray.length;i++){
            var product = optionArray[i];
            var productName = product.name;
            var productPrice = priceArray[i];
            var productClass = product.class;
            if(productClass == 'vegetable'){
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
    
    }
    //create lable for each fruit in the array
    if(fruits.length != 0){
        s2.append(document.createElement("br"));
        s2.append(document.createElement("br"));
        var fruits = document.createElement('label');
        fruits.appendChild(document.createTextNode('Fruits: '));
        s2.append(fruits);
        s2.append(document.createElement("br"));
        fruits.style.fontWeight="bold"
        fruits.style.fontStyle = 'italic';
        for(var i = 0;i<optionArray.length;i++){
            var product = optionArray[i];
            var productName = product.name;
            var productPrice = priceArray[i];
            var productClass = product.class;
            if(productClass == "fruit"){
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
    }
    
    //create label for all meats
    if(meats.length != 0){
        s2.append(document.createElement("br"));
        s2.append(document.createElement("br"));
        var meats = document.createElement('label');
        meats.appendChild(document.createTextNode('Meats: '));
        s2.append(meats);
        s2.append(document.createElement("br"));
        meats.style.fontWeight = "bold";
        meats.style.fontStyle = "italic";
        for(var i = 0;i<optionArray.length;i++){
            var product = optionArray[i];
            var productName = product.name;
            var productPrice = priceArray[i];
            var productClass = product.class;
            if(productClass == "meat"){
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
    }

    if(diaries.length != 0){
        s2.append(document.createElement("br"));
        s2.append(document.createElement("br"));
        var diary = document.createElement('label');
        diary.appendChild(document.createTextNode('Dairy: '));
        s2.append(diary);
        s2.append(document.createElement("br"));
        diary.style.fontWeight="bold";
        diary.style.fontStyle = 'italic';
        for(var i = 0;i<optionArray.length;i++){
            var product = optionArray[i];
            var productName = product.name;
            var productPrice = priceArray[i];
            var productClass = product.class;
            if(productClass == "diary"){
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

var slider = document.getElementById("myRange");
var output = document.getElementById("maxrange");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
function refreshProducts() {
    var selectedCheckboxes = updateselected();
    var maxRangeValue = document.getElementById("myRange").value;
    document.getElementById("maxrange").innerText = maxRangeValue;
    populateListProductChoices(selectedCheckboxes, 'displayProduct');
}
function updateselected() {
    var checkboxes = document.getElementsByName("diet");
    var selectedCheckboxes = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedCheckboxes.push(checkboxes[i].value);
        }
    }

    return selectedCheckboxes;
}
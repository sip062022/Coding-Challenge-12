// Task 1: Business Dashboard – DOM Element Selection and Creation //

function addRevenueMetricCard () { // function to add the Revenue Metric Card
    const dashboardById = document.getElementById('dashboard'); // selects dashboard container
    const dashboardByQuery = document.querySelector('#dashboard'); // additional method to select dashboard container

    const revenueCard = document.createElement('div');  // adds <div> element for revenue card
    const profitCard = document.createElement('div');  // adds <div> element for profit card
    const expensesCard = document.createElement('div');  // adds <div> element for expenses card


    revenueCard.setAttribute('class', 'metric-card'); // sets the class for the revenue card
    revenueCard.setAttribute('id', 'revenueCard');  // sets the id for the revenue card

    profitCard.setAttribute('class', 'metric-card'); // sets the class for the profit card
    profitCard.setAttribute('id', 'profitCard');  // sets the id for the profit card

    expensesCard.setAttribute('class', 'metric-card'); // sets the class for the expenses card
    expensesCard.setAttribute('id', 'expensesCard');  // sets the id for the expsenses card

    revenueCard.innerHTML = '<h3>Revenue</h3><p>$0</p>'; // sets the title "Revenue" and the placeholder $0
    profitCard.innerHTML = '<h3>Profit</h3><p>$0</p>'; // sets the title "Revenue" and the placeholder $0
    expensesCard.innerHTML = '<h3>Expenses</h3><p>$0</p>'; // sets the title "Revenue" and the placeholder $0

    dashboardById.appendChild(revenueCard); // appends the revenue metric card
    dashboardById.appendChild(profitCard); // appends the profit metric card
    dashboardById.appendChild(expensesCard); // appends the expenses metric card
}

addRevenueMetricCard(); // adds the card to the dashboard by calling the function

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays //

function updateMetricCards() { // function to update the metric card
    const metricCardNodeList = document.querySelectorAll('.metric-card'); // selects every element in metric-card
    const metricCardsArray = Array.from(metricCardNodeList); // turns NodeList into an array

    metricCardsArray.forEach(card => {
        card.innerHTML += " - Updated"; // append "Updated" to the text
        card.style.backgroundColor = "#90EE90"; // adds background color to the card
    });
}

updateMetricCards(); // calls the function to update the metric card

// Task 3: Dynamic Inventory Management – Adding and Removing Items //

function addInventoryItem (productName) { // function to add item
    const inventoryList = document.getElementById('inventoryList'); // grabs the inventory list container
    const newItem = document.createElement('li'); // creates new item using <li>

    newItem.setAttribute('class', 'product-item'); // sets class for the new item
    newItem.setAttribute('data-product', productName); // sets attribute for new item

    newItem.innerText = productName; // makes <li> content the product name

    newItem.addEventListener('click', removeInventoryItem); // removes item when clicked
    inventoryList.appendChild(newItem); // appends the new item 
}

function removeInventoryItem(event) { // function to remove inventory item
    const removedItem = event.target; // remove the item that was clicked
    removedItem.parentNode.removeChild(removedItem); // removes item
}

// Task 4: Business Customer Section – Handling Event Bubbling //

document.getElementById('customerSection').addEventListener('click', function() {  // adds a listener for the customer section
    console.log('Customer section clicked'); // logs that the customer section was clicked
});

const customerCards = document.querySelectorAll('.customer-card');  // selects all customer cards
customerCards.forEach(card => {  // for each card
    card.addEventListener('click', function(event) {  // listener for clik
        console.log('Customer card clicked');  // when clicked log message
        
        event.stopPropagation();  // stops event from bubbling to parent container
    });
});
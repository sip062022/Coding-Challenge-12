// Task 1: Business Dashboard – DOM Element Selection and Creation //

function addRevenueMetricCard () { // function to add the Revenue Metric Card
    const dashboardById = document.getElementById('dashboard'); // selects dashboard container
    const dashboardByQuery = document.querySelector('#dashboard'); // additional method to select dashboard container

    const revenueCard = document.createElement('div');  // adds <div> element for revenue card

    revenueCard.setAttribute('class', 'metric-card'); // sets the class for the revenue card
    revenueCard.setAttribute('id', 'revenueCard');  // sets the id for the revenue card

    revenueCard.innerHTML = '<h3>Revenue</h3><p>$0</p>'; // sets the title "Revenue" and the placeholder $0

    dashboardById.appendChild(revenueCard); // appends the metric card
}

addRevenueMetricCard(); // adds the card to the dashboard by calling the function
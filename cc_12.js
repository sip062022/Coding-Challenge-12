// Task 1: Business Dashboard //
    // added "<div id="dashboard" </div>"" to the index.html file //

const dashboard = document.getElementById('dashboard'); // select dashboard container by getElementByID
const dashboardByQuery = document.querySelector('#dashboard'); // select dashboard by querySelector

const revenueCard = document.createElement('div');  // represents the metric card using a new <div>

revenueCard.setAttribute('class', 'metric-card'); // sets attribute class as metric-card
revenueCard.setAttribute('id', 'revenueCard');  // sets attribute id as reenuecard

// adds placeholder for revenue title and $0 //
revenueCard.innerHTML = ` 
  <h3>Revenue</h3> 
  <p>$0</p>
`;

dashboard.appendChild(revenueCard);  // appends revenueCard to the dashboard

dashboardByQuery.appendChild(revenueCard);  // appends the revenue to the dashboard by query



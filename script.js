const currencyToggle = document.getElementById('currencyToggle');
const basicPlanPrice = document.getElementById('rare');
const standardPlanPrice = document.getElementById('epic');
const premiumPlanPrice = document.getElementById('legendary');

currencyToggle.addEventListener('change', () => {
    if (currencyToggle.checked) {
        basicPlanPrice.textContent = 'Price: $3.59';
        standardPlanPrice.textContent = 'Price: $7.19';
        premiumPlanPrice.textContent = 'Price: $9.59';
    } else {
        basicPlanPrice.textContent = 'Price: ₹299';
        standardPlanPrice.textContent = 'Price: ₹599';
        premiumPlanPrice.textContent = 'Price: ₹799';
    }
});
/* === Footer: Current Year === */
document.getElementById("year").textContent = new Date().getFullYear();

/* === FAQ Accordion Logic === */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        // Toggle visibility
        answer.style.display = 
            answer.classList.toggle("active");
    });
});

/* === Energy Calculator === */

const form = document.getElementById("energyForm");
const resultsBox = document.getElementById("results");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const wattage = parseFloat(document.getElementById("wattage").value);
    const hours = parseFloat(document.getElementById("hours").value);
    const price = parseFloat(document.getElementById("price").value);

    // Validation
    if (isNaN(wattage) || wattage <= 0 ||
        isNaN(hours) || hours < 0 ||
        isNaN(price) || price <= 0) {

        resultsBox.style.display = "block";
        resultsBox.innerHTML = `<p style="color:red">Please enter valid input values.</p>`;
        return;
    }

    // Calculations
    const dailyKWh = (wattage * hours) / 1000;
    const monthlyKWh = dailyKWh * 30;
    const yearlyKWh = dailyKWh * 365;

    const costPerKWh = price / 100;
    const monthlyCost = monthlyKWh * costPerKWh;
    const yearlyCost = yearlyKWh * costPerKWh;

    // Display results
    resultsBox.style.display = "block";
    resultsBox.innerHTML = `
        <h3>Results</h3>
        <p><strong>Daily Consumption:</strong> ${dailyKWh.toFixed(2)} kWh</p>
        <p><strong>Monthly Consumption:</strong> ${monthlyKWh.toFixed(2)} kWh</p>
        <p><strong>Yearly Consumption:</strong> ${yearlyKWh.toFixed(2)} kWh</p>
        <p><strong>Estimated Monthly Cost:</strong> $${monthlyCost.toFixed(2)}</p>
        <p><strong>Estimated Yearly Cost:</strong> $${yearlyCost.toFixed(2)}</p>
    `;
});
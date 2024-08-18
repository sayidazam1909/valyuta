document.getElementById("currency-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from-currency").value;
    let toCurrency = document.getElementById("to-currency").value;

    // Your API key from ExchangeRate-API
    const apiKey = 'YOUR_API_KEY_HERE';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                let conversionRate = data.conversion_rate;
                let convertedAmount = (amount * conversionRate).toFixed(2);

                document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                document.getElementById("result").innerText = "Error: Unable to fetch conversion rate.";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("result").innerText = "Error: Please try again later.";
        });
});
